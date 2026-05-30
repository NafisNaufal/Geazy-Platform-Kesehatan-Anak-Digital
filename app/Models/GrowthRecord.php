<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GrowthRecord extends Model
{
    protected $fillable = [
        'child_profile_id', 'weight', 'height', 'lila', 'head_circumference',
        'bmi', 'bmi_status', 'height_status',
        'weight_for_age_z', 'height_for_age_z', 'bmi_for_age_z',
        'recorded_at', 'notes',
    ];

    protected $casts = [
        'recorded_at' => 'date',
        'weight' => 'decimal:2',
        'height' => 'decimal:2',
        'lila' => 'decimal:2',
        'head_circumference' => 'decimal:2',
        'bmi' => 'decimal:2',
    ];

    public function childProfile(): BelongsTo
    {
        return $this->belongsTo(ChildProfile::class);
    }

    public function getBmiStatusColorAttribute(): string
    {
        return match($this->bmi_status) {
            'Normal' => 'green',
            'Kurus', 'Sangat Kurus' => 'yellow',
            'Gemuk', 'Obesitas' => 'red',
            default => 'gray',
        };
    }
}
