<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            [
                'key' => 'hero_title_1',
                'value' => 'Cute illustrations,',
                'type' => 'text',
            ],
            [
                'key' => 'hero_title_2',
                'value' => 'creativity filled!',
                'type' => 'text',
            ],
            [
                'key' => 'hero_description',
                'value' => 'Welcome to the cozy autumn corner of **ToffeeBean**! We specialize in custom kiss-cut sticker sheets, character guides, and expressive illustrations made to help clients express their Original Characters (OCs) affordably.',
                'type' => 'text',
            ],
            [
                'key' => 'hero_image',
                'value' => '/images/hero-banner.png',
                'type' => 'image',
            ],
            [
                'key' => 'promo_title',
                'value' => "Is this what you're here for? 😏",
                'type' => 'text',
            ],
            [
                'key' => 'promo_description',
                'value' => "It's **HER**. The calico, slightly mischievous custom feline squadmate plushie. Equipped with custom bones stitching details, skeletal pattern elements, and multiple accessories. Fully available now for online Preorder reservations!",
                'type' => 'text',
            ],
            [
                'key' => 'about_title',
                'value' => "HEY THERE! I'M TOFFEE! 🧑‍🎨",
                'type' => 'text',
            ],
            [
                'key' => 'about_description_1',
                'value' => "I'm the artist and organizer behind ToffeeBean! I create soft, super-colorful, and character-packed digital illustrations inspired by kemono and cute pastel cartoon designs. My absolute core goal is to make custom illustrations that feel lively, highly expressive, emotional, and easy to connect with.",
                'type' => 'text',
            ],
            [
                'key' => 'about_description_2',
                'value' => "Whether you're looking for high-quality stickers to display on a sticker book, cute acrylic keychains, or planning the design properties for your very first original character (OC) with a full reference guide commission sheet, I can help you realize it beautifully in our warm autumn workspace style!",
                'type' => 'text',
            ],
            [
                'key' => 'about_image',
                'value' => '/images/artist.jpg',
                'type' => 'image',
            ],
        ];

        foreach ($settings as $setting) {
            Setting::firstOrCreate(['key' => $setting['key']], $setting);
        }
    }
}
