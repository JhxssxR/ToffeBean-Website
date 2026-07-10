<?php

namespace Database\Seeders;

use App\Models\Commission;
use Illuminate\Database\Seeder;

class CommissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Commission::insert([
            [
                'title' => 'Cute Custom Sticker',
                'description' => 'I will draw a cute custom sticker of anything you want! Can be your OC, your pet, or anything you can think of. Comes with a transparent background.',
                'base_price' => 2.50,
                'price_display' => '2.50$',
                'avatar' => '🐱',
                'is_active' => true,
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Character Reference Sheet',
                'description' => 'A full character reference sheet for your original character. Includes 1 full body, 2 headshots, and a color palette.',
                'base_price' => 10.00,
                'price_display' => '10$ - 50$',
                'avatar' => '⭐',
                'is_active' => true,
                'sort_order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Illustration/Poster',
                'description' => 'A fully rendered illustration of your character. Includes a detailed background and dynamic lighting.',
                'base_price' => 35.00,
                'price_display' => '35.00$+',
                'avatar' => '🦊',
                'is_active' => true,
                'sort_order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
