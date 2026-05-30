<?php

namespace App\Services;

/**
 * WHO Child Growth Standards calculator.
 * Uses simplified LMS method reference data for Indonesian children (0-60 months).
 * For 5-12 years uses BMI-for-age z-score.
 */
class WhoGrowthService
{
    // Weight-for-age LMS reference (boys) - months => [L, M, S]
    private static array $wfaBoys = [
        0  => [-0.3521, 3.3464, 0.14602],
        1  => [-0.3521, 4.4709, 0.13395],
        2  => [-0.3521, 5.5675, 0.12385],
        3  => [-0.3521, 6.3762, 0.11727],
        4  => [-0.3521, 7.0023, 0.11316],
        6  => [-0.3521, 7.934, 0.10903],
        9  => [-0.3521, 9.1835, 0.10591],
        12 => [-0.3521, 10.2, 0.10855],
        18 => [-0.3521, 11.65, 0.11031],
        24 => [-0.3521, 12.89, 0.11278],
        36 => [1.0, 14.44, 0.11625],
        48 => [1.0, 16.00, 0.11627],
        60 => [1.0, 17.66, 0.12005],
    ];

    private static array $wfaGirls = [
        0  => [-0.3833, 3.2322, 0.14171],
        1  => [-0.3833, 4.1873, 0.13724],
        2  => [-0.3833, 5.1282, 0.13000],
        3  => [-0.3833, 5.8458, 0.12619],
        4  => [-0.3833, 6.4237, 0.12201],
        6  => [-0.3833, 7.297,  0.11801],
        9  => [-0.3833, 8.48,   0.11671],
        12 => [-0.3833, 9.525,  0.11856],
        18 => [-0.3833, 10.99,  0.12051],
        24 => [-0.3833, 12.16,  0.12337],
        36 => [1.0,     13.94,  0.12754],
        48 => [1.0,     15.46,  0.12793],
        60 => [1.0,     17.19,  0.13128],
    ];

    // Height-for-age LMS reference (boys)
    private static array $hfaBoys = [
        0  => [1.0, 49.8842, 0.03795],
        3  => [1.0, 61.428,  0.03534],
        6  => [1.0, 67.624,  0.03300],
        12 => [1.0, 75.749,  0.03132],
        18 => [1.0, 82.316,  0.03182],
        24 => [1.0, 87.116,  0.03690],
        36 => [1.0, 96.1,    0.03715],
        48 => [1.0, 103.3,   0.03864],
        60 => [1.0, 110.0,   0.03994],
    ];

    private static array $hfaGirls = [
        0  => [1.0, 49.1477, 0.03790],
        3  => [1.0, 59.8029, 0.03640],
        6  => [1.0, 65.7311, 0.03467],
        12 => [1.0, 74.015,  0.03326],
        18 => [1.0, 80.833,  0.03355],
        24 => [1.0, 85.716,  0.03816],
        36 => [1.0, 95.1,    0.03807],
        48 => [1.0, 102.7,   0.03957],
        60 => [1.0, 109.4,   0.04069],
    ];

    // BMI-for-age LMS reference (boys, girls) for 0-60 months
    private static array $bmiBoys = [
        0  => [-0.3053, 13.4069, 0.09882],
        3  => [-0.5978, 14.8819, 0.08882],
        6  => [-0.6062, 16.3795, 0.08549],
        12 => [-0.7614, 17.1655, 0.09137],
        18 => [-0.8849, 16.7164, 0.09292],
        24 => [-1.3867, 16.2354, 0.10046],
        36 => [-1.9918, 15.7, 0.10727],
        48 => [-2.3584, 15.3, 0.10799],
        60 => [-2.7268, 15.2, 0.10824],
    ];

    private static array $bmiGirls = [
        0  => [-0.0631, 13.3363, 0.09827],
        3  => [-0.3893, 14.6575, 0.09194],
        6  => [-0.3636, 16.1929, 0.08661],
        12 => [-0.5760, 17.2281, 0.09025],
        18 => [-0.8135, 16.9166, 0.09333],
        24 => [-1.1612, 16.4228, 0.10048],
        36 => [-1.6952, 15.99, 0.10728],
        48 => [-2.1160, 15.59, 0.10794],
        60 => [-2.4849, 15.47, 0.10815],
    ];

    public static function calculate(
        float $weightKg,
        float $heightCm,
        int $ageMonths,
        string $gender
    ): array {
        $bmi = round($weightKg / (($heightCm / 100) ** 2), 2);
        $isBoy = strtolower($gender) === 'laki-laki';

        $wfaZ = self::calcZScore($ageMonths, $weightKg, $isBoy ? self::$wfaBoys : self::$wfaGirls);
        $hfaZ = self::calcZScore($ageMonths, $heightCm, $isBoy ? self::$hfaBoys : self::$hfaGirls);
        $bmiZ = self::calcZScore($ageMonths, $bmi, $isBoy ? self::$bmiBoys : self::$bmiGirls);

        $bmiStatus = self::classifyBmi($bmiZ, $ageMonths);
        $heightStatus = self::classifyHeight($hfaZ);

        return [
            'bmi' => $bmi,
            'bmi_status' => $bmiStatus,
            'height_status' => $heightStatus,
            'weight_for_age_z' => round($wfaZ, 2),
            'height_for_age_z' => round($hfaZ, 2),
            'bmi_for_age_z' => round($bmiZ, 2),
        ];
    }

    private static function calcZScore(int $ageMonths, float $value, array $table): float
    {
        [$l, $m, $s] = self::interpolateLms($ageMonths, $table);
        if ($l == 0) {
            return log($value / $m) / $s;
        }
        return (pow($value / $m, $l) - 1) / ($l * $s);
    }

    private static function interpolateLms(int $ageMonths, array $table): array
    {
        $keys = array_keys($table);
        sort($keys);

        if ($ageMonths <= $keys[0]) {
            return $table[$keys[0]];
        }
        if ($ageMonths >= $keys[count($keys) - 1]) {
            return $table[$keys[count($keys) - 1]];
        }

        $lower = $keys[0];
        $upper = $keys[count($keys) - 1];

        foreach ($keys as $k) {
            if ($k <= $ageMonths) $lower = $k;
            if ($k >= $ageMonths && $k < $upper) $upper = $k;
        }

        if ($lower === $upper) {
            return $table[$lower];
        }

        $t = ($ageMonths - $lower) / ($upper - $lower);
        return [
            $table[$lower][0] + $t * ($table[$upper][0] - $table[$lower][0]),
            $table[$lower][1] + $t * ($table[$upper][1] - $table[$lower][1]),
            $table[$lower][2] + $t * ($table[$upper][2] - $table[$lower][2]),
        ];
    }

    private static function classifyBmi(float $z, int $ageMonths): string
    {
        if ($z < -3) return 'Sangat Kurus';
        if ($z < -2) return 'Kurus';
        if ($z <= 1) return 'Normal';
        if ($z <= 2) return 'Gemuk';
        return 'Obesitas';
    }

    private static function classifyHeight(float $z): string
    {
        if ($z < -3) return 'Sangat Pendek';
        if ($z < -2) return 'Pendek';
        return 'Normal';
    }

    public static function getDailyNutritionTarget(int $ageMonths): array
    {
        if ($ageMonths < 6) {
            return ['calories' => 550, 'protein' => 12, 'fat' => 31, 'carbs' => 59];
        } elseif ($ageMonths < 12) {
            return ['calories' => 725, 'protein' => 18, 'fat' => 36, 'carbs' => 82];
        } elseif ($ageMonths < 24) {
            return ['calories' => 1000, 'protein' => 25, 'fat' => 44, 'carbs' => 120];
        } elseif ($ageMonths < 36) {
            return ['calories' => 1125, 'protein' => 26, 'fat' => 44, 'carbs' => 155];
        } elseif ($ageMonths < 60) {
            return ['calories' => 1350, 'protein' => 35, 'fat' => 50, 'carbs' => 220];
        } elseif ($ageMonths < 84) {
            return ['calories' => 1400, 'protein' => 49, 'fat' => 52, 'carbs' => 220];
        } elseif ($ageMonths < 108) {
            return ['calories' => 1650, 'protein' => 56, 'fat' => 55, 'carbs' => 254];
        } else {
            return ['calories' => 2000, 'protein' => 60, 'fat' => 65, 'carbs' => 300];
        }
    }
}
