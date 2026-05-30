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
        Schema::create('growth_records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('child_profile_id')->constrained()->cascadeOnDelete();
            $table->decimal('weight', 5, 2)->comment('kg');
            $table->decimal('height', 5, 2)->comment('cm');
            $table->decimal('lila', 4, 2)->nullable()->comment('Lingkar Lengan Atas cm');
            $table->decimal('head_circumference', 4, 2)->nullable()->comment('Lingkar Kepala cm');
            $table->decimal('bmi', 5, 2)->nullable();
            $table->string('bmi_status')->nullable()->comment('Normal/Underweight/Overweight/Obese');
            $table->string('height_status')->nullable()->comment('Normal/Stunted/Severely Stunted');
            $table->decimal('weight_for_age_z', 5, 2)->nullable();
            $table->decimal('height_for_age_z', 5, 2)->nullable();
            $table->decimal('bmi_for_age_z', 5, 2)->nullable();
            $table->date('recorded_at');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('growth_records');
    }
};
