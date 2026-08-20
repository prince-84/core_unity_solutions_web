<?php

namespace App\Filament\Resources\Pages\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Repeater;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('General Information')
                    ->description('General configuration for the page.')
                    ->schema([
                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->label('Page Slug (e.g. home)'),
                    ]),

                Section::make('Hero Section')
                    ->description('Configuration for the page hero banner.')
                    ->schema([
                        TextInput::make('hero_headline')
                            ->required()
                            ->columnSpanFull()
                            ->label('Hero Headline'),
                        TextInput::make('hero_cta_text')
                            ->label('CTA Button Text'),
                        TextInput::make('hero_cta_url')
                            ->label('CTA Button URL'),
                    ])->columns(2),

                Section::make('Global Presence')
                    ->description('Locations list for agency global presence.')
                    ->schema([
                        Repeater::make('global_presence')
                            ->label('Locations')
                            ->simple(
                                TextInput::make('country')
                                    ->required()
                                    ->label('Country Name (e.g. USA)')
                            )
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
