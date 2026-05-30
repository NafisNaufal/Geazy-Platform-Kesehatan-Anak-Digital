<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class NutritionLogItem extends Model
{
    protected $fillable = ['nutrition_log_id', 'food_id', 'portion', 'calories', 'protein', 'fat', 'carbs'];

    protected $casts = [
        'portion' => 'decimal:2',
        'calories' => 'decimal:2',
        'protein' => 'decimal:2',
        'fat' => 'decimal:2',
        'carbs' => 'decimal:2',
    ];

    public function log(): BelongsTo
    {
        return $this->belongsTo(NutritionLog::class, 'nutrition_log_id');
    }

    public function food(): BelongsTo
    {
        return $this->belongsTo(Food::class);
    }
}
