<?php

namespace Database\Seeders;

use App\Models\HomeService;
use Illuminate\Database\Seeder;

class HomeServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Poster/Illustration',
                'description' => 'Highly expressive custom digital artwork',
                'img' => '/images/services/poster-illustration.jpg',
                'gallery' => [
                    '/images/services/poster-illustration.jpg',
                    '/images/services/071df254-0fbf-4f80-b343-1bc7b5d84fac (1).jpg',
                    '/images/services/62e5c2e8-767f-43d3-a673-2374e9482b9a (1).jpg',
                    '/images/services/afedda4a-cc32-4a5d-b6f1-b32103f449f8.jpg',
                    '/images/services/ce2e47eb-3a28-42ac-98b4-77d3d1ae7b6b.jpg',
                    '/images/services/fbf69d25-2adf-4ff8-b6f0-3738cf5bee81 (1).jpg',
                ],
                'sort_order' => 0,
                'is_active' => true,
            ],
            [
                'title' => 'Custom Stickers',
                'description' => 'Weatherproof kiss-cut sticker sheets and packs',
                'img' => '/images/services/custom-stickers-thumbnail.jpg',
                'gallery' => [
                    '/images/services/custom-stickers-thumbnail.jpg',
                    '/images/services/sticker 1.png',
                    '/images/services/sticker 2.png',
                    '/images/services/sticker 4.png',
                    '/images/services/Sticker (1).png',
                    '/images/services/Sticker (2).png',
                    '/images/services/Sticker (4).png',
                    '/images/services/Sticker (5).png',
                    '/images/services/Sticker (6).png',
                    '/images/services/Sticker (7).png',
                    '/images/services/Sticker (8).png',
                    '/images/services/Sticker (9).png',
                    '/images/services/Sticker (10).png',
                    '/images/services/Sticker (11).png',
                    '/images/services/Sticker (12).png',
                    '/images/services/Sticker (13).png',
                    '/images/services/Sticker (14).png',
                    '/images/services/Sticker (15).png',
                    '/images/services/Sticker (16).png',
                    '/images/services/Sticker (17).png',
                ],
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Reference Guide Sheets',
                'description' => 'Custom layout front/back guides for commissions',
                'img' => '/images/services/refsheet3.png',
                'gallery' => [
                    '/images/services/refsheet3.png',
                    '/images/services/refsheet1.png',
                    '/images/services/refsheet2.png',
                ],
                'sort_order' => 2,
                'is_active' => true,
            ],
        ];

        foreach ($services as $service) {
            HomeService::create($service);
        }
    }
}
