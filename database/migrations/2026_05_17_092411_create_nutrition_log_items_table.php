<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nutrition_log_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('nutrition_log_id')->constrained()->cascadeOnDelete();
            $table->foreignId('food_id')->constrained('foods')->cascadeOnDelete();
            $table->decimal('portion', 7, 2)->comment('amount in serving_unit of food');
            $table->decimal('calories', 7, 2);
            $table->decimal('protein', 5, 2);
            $table->decimal('fat', 5, 2);
            $table->decimal('carbs', 5, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nutrition_log_items');
    }
};
