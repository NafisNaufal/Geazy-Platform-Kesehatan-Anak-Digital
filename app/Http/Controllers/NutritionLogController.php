<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Models\NutritionLog;
use App\Models\NutritionLogItem;
use App\Services\WhoGrowthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NutritionLogController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();
        $activeChildId = $request->session()->get('active_child_id');
        $children = $user->childProfiles()->get();
        $activeChild = $children->firstWhere('id', $activeChildId) ?? $children->first();

        if (! $activeChild) {
            return Inertia::render('nutrisi/index', ['noChild' => true, 'foods' => [], 'todayLogs' => [], 'activeChild' => null, 'children' => [], 'dailyNutrition' => null]);
        }

        $foods = Food::orderBy('category')->orderBy('name')->get()->map(fn ($f) => [
            'id' => $f->id,
            'name' => $f->name,
            'category' => $f->category,
            'calories' => $f->calories,
            'protein' => $f->protein,
            'fat' => $f->fat,
            'carbs' => $f->carbs,
            'serving_unit' => $f->serving_unit,
            'serving_size' => $f->serving_size,
        ]);

        $todayLogs = NutritionLog::with('items.food')
            ->where('child_profile_id', $activeChild->id)
            ->whereDate('log_date', today())
            ->get()
            ->map(fn ($log) => [
                'id' => $log->id,
                'meal_type' => $log->meal_type,
                'log_date' => $log->log_date->format('d M Y'),
                'items' => $log->items->map(fn ($item) => [
                    'id' => $item->id,
                    'food_name' => $item->food->name,
                    'portion' => $item->portion,
                    'serving_unit' => $item->food->serving_unit,
                    'calories' => $item->calories,
                    'protein' => $item->protein,
                    'fat' => $item->fat,
                    'carbs' => $item->carbs,
                ]),
                'total_calories' => $log->total_calories,
                'total_protein' => $log->total_protein,
                'total_fat' => $log->total_fat,
                'total_carbs' => $log->total_carbs,
            ]);

        $nutritionTarget = WhoGrowthService::getDailyNutritionTarget($activeChild->age_in_months);
        $totalToday = [
            'calories' => $todayLogs->sum('total_calories'),
            'protein' => $todayLogs->sum('total_protein'),
            'fat' => $todayLogs->sum('total_fat'),
            'carbs' => $todayLogs->sum('total_carbs'),
        ];

        return Inertia::render('nutrisi/index', [
            'foods' => $foods,
            'todayLogs' => $todayLogs,
            'activeChild' => [
                'id' => $activeChild->id,
                'name' => $activeChild->name,
                'age_in_months' => $activeChild->age_in_months,
                'age_string' => $activeChild->age_string,
            ],
            'children' => $children->map(fn ($c) => ['id' => $c->id, 'name' => $c->name]),
            'dailyNutrition' => [
                'consumed' => $totalToday,
                'target' => $nutritionTarget,
                'percentage' => [
                    'calories' => $nutritionTarget['calories'] > 0 ? min(100, round($totalToday['calories'] / $nutritionTarget['calories'] * 100)) : 0,
                    'protein' => $nutritionTarget['protein'] > 0 ? min(100, round($totalToday['protein'] / $nutritionTarget['protein'] * 100)) : 0,
                    'fat' => $nutritionTarget['fat'] > 0 ? min(100, round($totalToday['fat'] / $nutritionTarget['fat'] * 100)) : 0,
                    'carbs' => $nutritionTarget['carbs'] > 0 ? min(100, round($totalToday['carbs'] / $nutritionTarget['carbs'] * 100)) : 0,
                ],
            ],
            'noChild' => false,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $user = $request->user();
        $activeChildId = $request->session()->get('active_child_id');
        $child = $user->childProfiles()->find($activeChildId) ?? $user->childProfiles()->first();
        abort_unless($child, 404);

        $validated = $request->validate([
            'meal_type' => ['required', 'in:sarapan,makan_siang,makan_malam,snack'],
            'log_date' => ['required', 'date'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.food_id' => ['required', 'exists:foods,id'],
            'items.*.portion' => ['required', 'numeric', 'min:0.1'],
        ]);

        $log = NutritionLog::create([
            'child_profile_id' => $child->id,
            'meal_type' => $validated['meal_type'],
            'log_date' => $validated['log_date'],
        ]);

        foreach ($validated['items'] as $item) {
            $food = Food::find($item['food_id']);
            $nutrition = $food->nutritionPer((float) $item['portion']);

            NutritionLogItem::create([
                'nutrition_log_id' => $log->id,
                'food_id' => $food->id,
                'portion' => $item['portion'],
                'calories' => $nutrition['calories'],
                'protein' => $nutrition['protein'],
                'fat' => $nutrition['fat'],
                'carbs' => $nutrition['carbs'],
            ]);
        }

        return back()->with('success', 'Log makan berhasil dicatat!');
    }

    public function destroy(NutritionLog $log): RedirectResponse
    {
        $user = auth()->user();
        abort_if($log->childProfile->user_id !== $user->id, 403);

        $log->delete();
        return back()->with('success', 'Log makan dihapus.');
    }

    public function foods(): JsonResponse
    {
        $foods = Food::orderBy('name')->get(['id', 'name', 'category', 'calories', 'protein', 'fat', 'carbs', 'serving_unit', 'serving_size']);
        return response()->json($foods);
    }
}
