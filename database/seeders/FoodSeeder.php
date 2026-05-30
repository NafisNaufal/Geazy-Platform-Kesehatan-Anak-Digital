<?php

namespace Database\Seeders;

use App\Models\Food;
use Illuminate\Database\Seeder;

class FoodSeeder extends Seeder
{
    public function run(): void
    {
        $foods = [
            // Karbohidrat
            ['name' => 'Nasi Putih', 'category' => 'karbohidrat', 'calories' => 175, 'protein' => 3.5, 'fat' => 0.4, 'carbs' => 38.9, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Nasi Merah', 'category' => 'karbohidrat', 'calories' => 149, 'protein' => 3.5, 'fat' => 1.2, 'carbs' => 31.3, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Kentang Rebus', 'category' => 'karbohidrat', 'calories' => 77, 'protein' => 2.0, 'fat' => 0.1, 'carbs' => 17.5, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Ubi Jalar', 'category' => 'karbohidrat', 'calories' => 86, 'protein' => 1.6, 'fat' => 0.1, 'carbs' => 20.1, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Roti Gandum', 'category' => 'karbohidrat', 'calories' => 247, 'protein' => 9.0, 'fat' => 3.5, 'carbs' => 46.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Mie Rebus', 'category' => 'karbohidrat', 'calories' => 138, 'protein' => 4.5, 'fat' => 2.1, 'carbs' => 25.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Jagung', 'category' => 'karbohidrat', 'calories' => 96, 'protein' => 3.4, 'fat' => 1.5, 'carbs' => 21.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Singkong', 'category' => 'karbohidrat', 'calories' => 160, 'protein' => 1.4, 'fat' => 0.3, 'carbs' => 38.1, 'serving_unit' => 'gram', 'serving_size' => 100],

            // Protein Hewani
            ['name' => 'Ayam Goreng (tanpa kulit)', 'category' => 'protein', 'calories' => 239, 'protein' => 27.3, 'fat' => 13.6, 'carbs' => 0.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Dada Ayam Rebus', 'category' => 'protein', 'calories' => 165, 'protein' => 31.0, 'fat' => 3.6, 'carbs' => 0.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Telur Ayam', 'category' => 'protein', 'calories' => 143, 'protein' => 12.6, 'fat' => 9.5, 'carbs' => 0.7, 'serving_unit' => 'butir', 'serving_size' => 55],
            ['name' => 'Ikan Lele Goreng', 'category' => 'protein', 'calories' => 196, 'protein' => 24.0, 'fat' => 10.5, 'carbs' => 0.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Ikan Salmon', 'category' => 'protein', 'calories' => 208, 'protein' => 20.4, 'fat' => 13.4, 'carbs' => 0.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Ikan Tongkol', 'category' => 'protein', 'calories' => 131, 'protein' => 28.0, 'fat' => 1.9, 'carbs' => 0.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Udang', 'category' => 'protein', 'calories' => 99, 'protein' => 18.8, 'fat' => 2.4, 'carbs' => 0.2, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Daging Sapi', 'category' => 'protein', 'calories' => 250, 'protein' => 26.0, 'fat' => 15.0, 'carbs' => 0.0, 'serving_unit' => 'gram', 'serving_size' => 100],

            // Protein Nabati
            ['name' => 'Tahu', 'category' => 'protein', 'calories' => 76, 'protein' => 8.0, 'fat' => 4.8, 'carbs' => 1.9, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Tempe', 'category' => 'protein', 'calories' => 193, 'protein' => 20.7, 'fat' => 10.8, 'carbs' => 9.4, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Kacang Hijau', 'category' => 'protein', 'calories' => 347, 'protein' => 22.2, 'fat' => 1.2, 'carbs' => 62.6, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Kacang Kedelai', 'category' => 'protein', 'calories' => 446, 'protein' => 34.9, 'fat' => 19.9, 'carbs' => 30.2, 'serving_unit' => 'gram', 'serving_size' => 100],

            // Sayuran
            ['name' => 'Bayam Rebus', 'category' => 'sayuran', 'calories' => 23, 'protein' => 2.9, 'fat' => 0.4, 'carbs' => 3.6, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Kangkung Tumis', 'category' => 'sayuran', 'calories' => 25, 'protein' => 3.0, 'fat' => 0.7, 'carbs' => 3.5, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Brokoli', 'category' => 'sayuran', 'calories' => 34, 'protein' => 2.8, 'fat' => 0.4, 'carbs' => 6.6, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Wortel', 'category' => 'sayuran', 'calories' => 41, 'protein' => 0.9, 'fat' => 0.2, 'carbs' => 9.6, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Tomat', 'category' => 'sayuran', 'calories' => 18, 'protein' => 0.9, 'fat' => 0.2, 'carbs' => 3.9, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Labu Siam', 'category' => 'sayuran', 'calories' => 19, 'protein' => 0.8, 'fat' => 0.1, 'carbs' => 4.5, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Terong', 'category' => 'sayuran', 'calories' => 25, 'protein' => 1.0, 'fat' => 0.2, 'carbs' => 5.9, 'serving_unit' => 'gram', 'serving_size' => 100],

            // Buah
            ['name' => 'Pisang Ambon', 'category' => 'buah', 'calories' => 89, 'protein' => 1.1, 'fat' => 0.3, 'carbs' => 22.8, 'serving_unit' => 'buah', 'serving_size' => 100],
            ['name' => 'Pepaya', 'category' => 'buah', 'calories' => 43, 'protein' => 0.5, 'fat' => 0.3, 'carbs' => 10.8, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Mangga', 'category' => 'buah', 'calories' => 60, 'protein' => 0.8, 'fat' => 0.4, 'carbs' => 15.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Jeruk', 'category' => 'buah', 'calories' => 47, 'protein' => 0.9, 'fat' => 0.1, 'carbs' => 11.8, 'serving_unit' => 'buah', 'serving_size' => 130],
            ['name' => 'Apel', 'category' => 'buah', 'calories' => 52, 'protein' => 0.3, 'fat' => 0.2, 'carbs' => 13.8, 'serving_unit' => 'buah', 'serving_size' => 150],
            ['name' => 'Semangka', 'category' => 'buah', 'calories' => 30, 'protein' => 0.6, 'fat' => 0.2, 'carbs' => 7.6, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Melon', 'category' => 'buah', 'calories' => 34, 'protein' => 0.8, 'fat' => 0.2, 'carbs' => 8.2, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Alpukat', 'category' => 'buah', 'calories' => 160, 'protein' => 2.0, 'fat' => 14.7, 'carbs' => 8.5, 'serving_unit' => 'gram', 'serving_size' => 100],

            // Susu & Produk Susu
            ['name' => 'Susu Sapi Full Cream', 'category' => 'susu', 'calories' => 61, 'protein' => 3.2, 'fat' => 3.3, 'carbs' => 4.8, 'serving_unit' => 'ml', 'serving_size' => 100],
            ['name' => 'Susu Formula Bayi', 'category' => 'susu', 'calories' => 68, 'protein' => 1.4, 'fat' => 3.8, 'carbs' => 7.0, 'serving_unit' => 'ml', 'serving_size' => 100],
            ['name' => 'Yogurt Plain', 'category' => 'susu', 'calories' => 61, 'protein' => 3.5, 'fat' => 3.3, 'carbs' => 4.7, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Keju', 'category' => 'susu', 'calories' => 402, 'protein' => 25.0, 'fat' => 33.0, 'carbs' => 1.3, 'serving_unit' => 'gram', 'serving_size' => 30],

            // Lainnya
            ['name' => 'Bubur Ayam', 'category' => 'lainnya', 'calories' => 70, 'protein' => 5.5, 'fat' => 2.0, 'carbs' => 8.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Sup Sayuran', 'category' => 'lainnya', 'calories' => 45, 'protein' => 2.5, 'fat' => 1.5, 'carbs' => 6.5, 'serving_unit' => 'gram', 'serving_size' => 200],
            ['name' => 'Soto Ayam', 'category' => 'lainnya', 'calories' => 88, 'protein' => 8.0, 'fat' => 4.5, 'carbs' => 4.0, 'serving_unit' => 'gram', 'serving_size' => 250],
            ['name' => 'Nasi Tim', 'category' => 'lainnya', 'calories' => 110, 'protein' => 6.0, 'fat' => 2.5, 'carbs' => 16.0, 'serving_unit' => 'gram', 'serving_size' => 150],
            ['name' => 'Bubur Kacang Hijau', 'category' => 'lainnya', 'calories' => 95, 'protein' => 5.0, 'fat' => 0.8, 'carbs' => 18.0, 'serving_unit' => 'gram', 'serving_size' => 200],
            ['name' => 'Puding Susu', 'category' => 'lainnya', 'calories' => 80, 'protein' => 2.5, 'fat' => 2.8, 'carbs' => 12.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Roti Bakar', 'category' => 'lainnya', 'calories' => 280, 'protein' => 8.5, 'fat' => 4.5, 'carbs' => 52.0, 'serving_unit' => 'gram', 'serving_size' => 100],
            ['name' => 'Pisang Rebus', 'category' => 'lainnya', 'calories' => 95, 'protein' => 1.3, 'fat' => 0.3, 'carbs' => 24.5, 'serving_unit' => 'buah', 'serving_size' => 100],
        ];

        foreach ($foods as $food) {
            Food::create($food);
        }
    }
}
