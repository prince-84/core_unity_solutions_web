<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\HeroSection::create([
            'title' => 'We are a bold and innovative digital<br className="hidden md:block" /> agency based in the UAE.',
            'subtitle' => '',
            'button_text' => 'Schedule a call',
            'button_link' => '#contact',
            'globe_image' => 'hero/earth_globe.png',
            'global_presence' => [
                ['country' => 'USA'],
                ['country' => 'UAE'],
                ['country' => 'Saudi Arabia'],
                ['country' => 'Pakistan'],
            ],
            'logo_ticker' => [
                'hero/digi_logo.png',
                'hero/dpworld_image.png',
                'hero/red_logoimage.png'
            ],
        ]);
    }
}
