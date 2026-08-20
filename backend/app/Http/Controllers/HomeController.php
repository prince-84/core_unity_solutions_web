<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index()
    {
        // Try to fetch the homepage config
        $page = Page::where('slug', 'homepage')
            ->orWhere('slug', 'home')
            ->first() ?? Page::first();

        // If no page exists yet (e.g. fresh database), create a default instance for seamless previewing
        if (!$page) {
            $page = new Page([
                'slug' => 'home',
                'hero_headline' => 'We are a bold and innovative digital agency based in the UAE.',
                'hero_cta_text' => 'Schedule a call',
                'hero_cta_url' => '#',
                'global_presence' => ['USA', 'UAE', 'Saudi Arabia', 'Pakistan'],
            ]);
        }

        return view('home', compact('page'));
    }
}
