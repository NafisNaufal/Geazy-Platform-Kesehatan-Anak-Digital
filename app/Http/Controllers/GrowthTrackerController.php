<?php

namespace App\Http\Controllers;

use App\Models\GrowthRecord;
use App\Services\WhoGrowthService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GrowthTrackerController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();
        $activeChildId = $request->session()->get('active_child_id');
        $children = $user->childProfiles()->get();
        $activeChild = $children->firstWhere('id', $activeChildId) ?? $children->first();

        if (! $activeChild) {
            return Inertia::render('tracker/index', ['noChild' => true, 'records' => [], 'activeChild' => null, 'children' => []]);
        }

        $records = $activeChild->growthRecords()
            ->orderBy('recorded_at', 'desc')
            ->get()
            ->map(fn ($r) => [
                'id' => $r->id,
                'weight' => $r->weight,
                'height' => $r->height,
                'lila' => $r->lila,
                'head_circumference' => $r->head_circumference,
                'bmi' => $r->bmi,
                'bmi_status' => $r->bmi_status,
                'height_status' => $r->height_status,
                'bmi_status_color' => $r->bmi_status_color,
                'weight_for_age_z' => $r->weight_for_age_z,
                'height_for_age_z' => $r->height_for_age_z,
                'bmi_for_age_z' => $r->bmi_for_age_z,
                'recorded_at' => $r->recorded_at->format('d M Y'),
                'notes' => $r->notes,
            ]);

        return Inertia::render('tracker/index', [
            'records' => $records,
            'activeChild' => [
                'id' => $activeChild->id,
                'name' => $activeChild->name,
                'gender' => $activeChild->gender,
                'age_in_months' => $activeChild->age_in_months,
                'age_string' => $activeChild->age_string,
            ],
            'children' => $children->map(fn ($c) => [
                'id' => $c->id,
                'name' => $c->name,
            ]),
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
            'weight' => ['required', 'numeric', 'min:0.5', 'max:200'],
            'height' => ['required', 'numeric', 'min:10', 'max:250'],
            'lila' => ['nullable', 'numeric', 'min:1', 'max:50'],
            'head_circumference' => ['nullable', 'numeric', 'min:10', 'max:70'],
            'recorded_at' => ['required', 'date', 'before_or_equal:today'],
            'notes' => ['nullable', 'string', 'max:500'],
        ]);

        $whoResult = WhoGrowthService::calculate(
            (float) $validated['weight'],
            (float) $validated['height'],
            $child->age_in_months,
            $child->gender
        );

        $child->growthRecords()->create(array_merge($validated, $whoResult));

        return back()->with('success', 'Data pertumbuhan berhasil disimpan!');
    }

    public function destroy(Request $request, GrowthRecord $record): RedirectResponse
    {
        $user = $request->user();
        abort_if($record->childProfile->user_id !== $user->id, 403);

        $record->delete();

        return back()->with('success', 'Data pertumbuhan dihapus.');
    }
}
