<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServicesSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\ServicesSection::create([
            'mini_title' => 'Digital Marketing Services',
            'main_title' => 'How Our Agency Helps You Scale',
            'cards' => [
                [
                    'type' => 'content_card',
                    'data' => [
                        'icon' => 'services/webnbrand_logo.png',
                        'title' => 'Websites & Branding',
                        'description' => 'From branding to websites, every design is built to attract, engage, and convert.',
                        'mockup_image' => 'services/digital_image.png',
                    ],
                ],
                [
                    'type' => 'links_card',
                    'data' => [
                        'background_image' => 'services/growth_bg.png',
                        'title_highlight' => 'Growth',
                        'title_main' => 'Strategy',
                        'links' => [
                            ['label' => 'Signature Growth System'],
                            ['label' => 'Venture Marketing'],
                            ['label' => 'Marketing Strategy'],
                            ['label' => 'Marketing Advisory'],
                            ['label' => 'SEO Consulting'],
                        ],
                    ],
                ],
                [
                    'type' => 'content_card',
                    'data' => [
                        'icon' => 'services/digi_logo.png',
                        'title' => 'Digital Marketing',
                        'description' => 'Intent-driven marketing across SEO, CRO, social media, and PR that attracts attention and drives results.',
                        'mockup_image' => 'services/marketing_image.png',
                    ],
                ],
            ],
        ]);
    }
}
