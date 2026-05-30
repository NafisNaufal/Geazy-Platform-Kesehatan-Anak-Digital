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
        Schema::create('foods', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category')->nullable()->comment('protein/karbohidrat/sayuran/buah/susu/lainnya');
            $table->decimal('calories', 7, 2)->comment('kcal per 100g');
            $table->decimal('protein', 5, 2)->comment('g per 100g');
            $table->decimal('fat', 5, 2)->comment('g per 100g');
            $table->decimal('carbs', 5, 2)->comment('g per 100g');
            $table->string('serving_unit')->default('gram')->comment('gram/ml/butir/porsi');
            $table->decimal('serving_size', 6, 2)->default(100)->comment('default serving size');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foods');
    }
};
