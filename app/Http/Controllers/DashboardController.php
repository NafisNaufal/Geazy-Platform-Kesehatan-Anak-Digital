<?php

namespace App\Http\Controllers;

use App\Models\NutritionLog;
use App\Services\WhoGrowthService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();
        $childProfiles = $user->childProfiles()->get()->map(function ($child) {
            return [
                'id' => $child->id,
                'name' => $child->name,
                'gender' => $child->gender,
                'birth_date' => $child->birth_date->format('Y-m-d'),
                'age_string' => $child->age_string,
                'age_in_months' => $child->age_in_months,
            ];
        });

        $activeChildId = $request->session()->get('active_child_id');
        $activeChild = $childProfiles->firstWhere('id', $activeChildId) ?? $childProfiles->first();

        $latestGrowth = null;
        $dailyNutrition = null;
        $nutritionTarget = null;
        $todayLogs = collect();

        if ($activeChild) {
            $childModel = $user->childProfiles()->find($activeChild['id']);

            $latestGrowth = $childModel?->growthRecords()->first();

            $nutritionTarget = WhoGrowthService::getDailyNutritionTarget($activeChild['age_in_months']);

            $todayLogs = NutritionLog::with('items.food')
                ->where('child_profile_id', $activeChild['id'])
                ->whereDate('log_date', today())
                ->get();

            $totalToday = [
                'calories' => $todayLogs->flatMap->items->sum('calories'),
                'protein' => $todayLogs->flatMap->items->sum('protein'),
                'fat' => $todayLogs->flatMap->items->sum('fat'),
                'carbs' => $todayLogs->flatMap->items->sum('carbs'),
            ];

            $dailyNutrition = [
                'consumed' => $totalToday,
                'target' => $nutritionTarget,
                'percentage' => [
                    'calories' => $nutritionTarget['calories'] > 0
                        ? min(100, round($totalToday['calories'] / $nutritionTarget['calories'] * 100))
                        : 0,
                    'protein' => $nutritionTarget['protein'] > 0
                        ? min(100, round($totalToday['protein'] / $nutritionTarget['protein'] * 100))
                        : 0,
                    'fat' => $nutritionTarget['fat'] > 0
                        ? min(100, round($totalToday['fat'] / $nutritionTarget['fat'] * 100))
                        : 0,
                    'carbs' => $nutritionTarget['carbs'] > 0
                        ? min(100, round($totalToday['carbs'] / $nutritionTarget['carbs'] * 100))
                        : 0,
                ],
            ];
        }

        return Inertia::render('dashboard', [
            'childProfiles' => $childProfiles,
            'activeChild' => $activeChild,
            'latestGrowth' => $latestGrowth ? [
                'weight' => $latestGrowth->weight,
                'height' => $latestGrowth->height,
                'bmi' => $latestGrowth->bmi,
                'bmi_status' => $latestGrowth->bmi_status,
                'height_status' => $latestGrowth->height_status,
                'bmi_status_color' => $latestGrowth->bmi_status_color,
                'recorded_at' => $latestGrowth->recorded_at->format('d M Y'),
            ] : null,
            'dailyNutrition' => $dailyNutrition,
            'todayMeals' => $todayLogs->map(fn ($log) => [
                'id' => $log->id,
                'meal_type' => $log->meal_type,
                'items_count' => $log->items->count(),
                'total_calories' => $log->total_calories,
            ]),
        ]);
    }

    public function switchChild(Request $request)
    {
        $request->session()->put('active_child_id', $request->child_id);
        return back();
    }
}
