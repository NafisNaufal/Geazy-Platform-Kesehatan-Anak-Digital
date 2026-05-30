<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Food extends Model
{
    protected $table = 'foods';

    protected $fillable = ['name', 'category', 'calories', 'protein', 'fat', 'carbs', 'serving_unit', 'serving_size'];

    protected $casts = [
        'calories' => 'decimal:2',
        'protein' => 'decimal:2',
        'fat' => 'decimal:2',
        'carbs' => 'decimal:2',
        'serving_size' => 'decimal:2',
    ];

    public function logItems(): HasMany
    {
        return $this->hasMany(NutritionLogItem::class);
    }

    public function nutritionPer(float $amount): array
    {
        $ratio = $amount / $this->serving_size;
        return [
            'calories' => round($this->calories * $ratio, 2),
            'protein' => round($this->protein * $ratio, 2),
            'fat' => round($this->fat * $ratio, 2),
            'carbs' => round($this->carbs * $ratio, 2),
        ];
    }
}
