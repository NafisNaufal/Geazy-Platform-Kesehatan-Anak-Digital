<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class NutritionLog extends Model
{
    protected $fillable = ['child_profile_id', 'log_date', 'meal_type'];

    protected $casts = [
        'log_date' => 'date',
    ];

    public function childProfile(): BelongsTo
    {
        return $this->belongsTo(ChildProfile::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(NutritionLogItem::class);
    }

    public function getTotalCaloriesAttribute(): float
    {
        return (float) $this->items->sum('calories');
    }

    public function getTotalProteinAttribute(): float
    {
        return (float) $this->items->sum('protein');
    }

    public function getTotalFatAttribute(): float
    {
        return (float) $this->items->sum('fat');
    }

    public function getTotalCarbsAttribute(): float
    {
        return (float) $this->items->sum('carbs');
    }
}
