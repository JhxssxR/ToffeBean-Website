<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExportSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert(array (
  0 => 
  array (
    'id' => 1,
    'name' => 'BuriCat',
    'email' => 'buricat@gmail.com',
    'avatar' => NULL,
    'role' => 'user',
    'email_verified_at' => NULL,
    'password' => '$2y$12$sO8DcHF45KF08JGEkg2p5uY5P6DFW4pdIHFsa4wYQen54PalBl2sy',
    'remember_token' => NULL,
    'created_at' => '2026-06-11 15:46:32',
    'updated_at' => '2026-06-11 15:46:32',
  ),
  1 => 
  array (
    'id' => 2,
    'name' => 'ToffeeBean Admin',
    'email' => 'toffeebean@tofeebean.com',
    'avatar' => NULL,
    'role' => 'admin',
    'email_verified_at' => NULL,
    'password' => '$2y$12$0r/4sfp8vfRuUyXR1ZmeEeFVUzPASRP/Gd09HvrmK3YLv0GcF3pmu',
    'remember_token' => NULL,
    'created_at' => '2026-07-09 04:06:05',
    'updated_at' => '2026-07-09 04:06:05',
  ),
  2 => 
  array (
    'id' => 3,
    'name' => 'Ttest',
    'email' => 'test123@toffeebean.com',
    'avatar' => NULL,
    'role' => 'user',
    'email_verified_at' => NULL,
    'password' => '$2y$12$G0fJrfWhnhl7YmgaCDy2v.inHA9OE9nWvGLhqCi9Pr3RYb/pyS1.G',
    'remember_token' => NULL,
    'created_at' => '2026-07-09 18:19:49',
    'updated_at' => '2026-07-09 18:19:49',
  ),
  3 => 
  array (
    'id' => 4,
    'name' => 'admin',
    'email' => 'admin@example.com',
    'avatar' => '🦊',
    'role' => 'user',
    'email_verified_at' => NULL,
    'password' => '$2y$12$N9XLDLD2AoNIaNR9AUMOxO1v4q7UURxw1uN7by1oykrFi6DNOK0uy',
    'remember_token' => NULL,
    'created_at' => '2026-07-16 05:12:43',
    'updated_at' => '2026-07-16 05:12:43',
  ),
));

        DB::table('home_services')->insert(array (
  0 => 
  array (
    'id' => 1,
    'title' => 'Poster/Illustration',
    'description' => 'Highly expressive custom digital artwork',
    'img' => '/images/services/poster-illustration.jpg',
    'gallery' => '["\\/images\\/services\\/071df254-0fbf-4f80-b343-1bc7b5d84fac (1).jpg","\\/images\\/services\\/62e5c2e8-767f-43d3-a673-2374e9482b9a (1).jpg","\\/images\\/services\\/afedda4a-cc32-4a5d-b6f1-b32103f449f8.jpg","\\/images\\/services\\/1784189345_6a5891a14ca20.jpg","\\/images\\/services\\/1784189345_6a5891a14d304.jpg","\\/images\\/services\\/1784189345_6a5891a14d785.jpg"]',
    'is_active' => 1,
    'sort_order' => 0,
    'created_at' => '2026-07-13 20:10:12',
    'updated_at' => '2026-07-16 08:10:00',
  ),
  1 => 
  array (
    'id' => 2,
    'title' => 'Custom Stickers',
    'description' => 'Weatherproof kiss-cut sticker sheets and packs',
    'img' => '/images/services/custom-stickers-thumbnail.jpg',
    'gallery' => '["\\/images\\/services\\/custom-stickers-thumbnail.jpg","\\/images\\/services\\/sticker 1.png","\\/images\\/services\\/sticker 2.png","\\/images\\/services\\/sticker 4.png","\\/images\\/services\\/Sticker (1).png","\\/images\\/services\\/Sticker (2).png","\\/images\\/services\\/Sticker (4).png","\\/images\\/services\\/Sticker (5).png","\\/images\\/services\\/Sticker (6).png","\\/images\\/services\\/Sticker (7).png","\\/images\\/services\\/Sticker (8).png","\\/images\\/services\\/Sticker (9).png","\\/images\\/services\\/Sticker (10).png","\\/images\\/services\\/Sticker (11).png","\\/images\\/services\\/Sticker (12).png","\\/images\\/services\\/Sticker (13).png","\\/images\\/services\\/Sticker (14).png","\\/images\\/services\\/Sticker (15).png","\\/images\\/services\\/Sticker (16).png","\\/images\\/services\\/Sticker (17).png"]',
    'is_active' => 1,
    'sort_order' => 1,
    'created_at' => '2026-07-13 20:10:12',
    'updated_at' => '2026-07-13 20:14:54',
  ),
  2 => 
  array (
    'id' => 3,
    'title' => 'Reference Guide Sheets',
    'description' => 'Custom layout front/back guides for commissions',
    'img' => '/images/services/refsheet3.png',
    'gallery' => '["\\/images\\/services\\/refsheet3.png","\\/images\\/services\\/refsheet1.png","\\/images\\/services\\/refsheet2.png"]',
    'is_active' => 1,
    'sort_order' => 2,
    'created_at' => '2026-07-13 20:10:12',
    'updated_at' => '2026-07-13 20:10:12',
  ),
));

        DB::table('commissions')->insert(array (
  0 => 
  array (
    'id' => 1,
    'title' => 'Cute Custom Stickersss',
    'description' => 'I will draw a cute custom sticker of anything you want! Can be your OC, your pet, or anything you can think of. Comes with a transparent background.',
    'base_price' => '2.50',
    'price_display' => '2.50$',
    'avatar' => '🐱',
    'is_active' => 1,
    'sort_order' => 1,
    'created_at' => '2026-07-09 05:52:39',
    'updated_at' => '2026-07-09 06:22:27',
  ),
  1 => 
  array (
    'id' => 2,
    'title' => 'Character Reference Sheet',
    'description' => 'A full character reference sheet for your original character. Includes 1 full body, 2 headshots, and a color palette.',
    'base_price' => '10.00',
    'price_display' => '10$ - 50$',
    'avatar' => '⭐',
    'is_active' => 1,
    'sort_order' => 2,
    'created_at' => '2026-07-09 05:52:39',
    'updated_at' => '2026-07-09 05:52:39',
  ),
  2 => 
  array (
    'id' => 3,
    'title' => 'Illustration/Poster',
    'description' => 'A fully rendered illustration of your character. Includes a detailed background and dynamic lighting.',
    'base_price' => '35.00',
    'price_display' => '35.00$+',
    'avatar' => '🦊',
    'is_active' => 1,
    'sort_order' => 3,
    'created_at' => '2026-07-09 05:52:39',
    'updated_at' => '2026-07-09 06:17:01',
  ),
));

    }
}
