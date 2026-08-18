<?php

namespace App\Filament\Resources\HeroSections\Schemas;

use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class HeroSectionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Hero Content')
                    ->description('The main headline and text for the hero section.')
                    ->schema([
                        Textarea::make('title')
                            ->required()
                            ->rows(3)
                            ->columnSpanFull()
                            ->helperText('You can use HTML tags like <br className="hidden md:block" /> to break lines on desktop.'),
                        TextInput::make('subtitle')
                            ->columnSpanFull(),
                    ]),

                Section::make('Call to Action')
                    ->description('Configure the main button under the headline.')
                    ->schema([
                        TextInput::make('button_text')
                            ->required()
                            ->label('Button Text'),
                        TextInput::make('button_link')
                            ->required()
                            ->label('Button Link URL (e.g. #contact)'),
                        \Filament\Forms\Components\FileUpload::make('button_icon')
                            ->image()
                            ->directory('hero')
                            ->label('Button Icon (Optional Avatar)'),
                    ])->columns(2),

                Section::make('Images & Elements')
                    ->description('Other dynamic elements on the hero section.')
                    ->schema([
                        \Filament\Forms\Components\FileUpload::make('globe_image')
                            ->image()
                            ->directory('hero')
                            ->label('Earth Globe Image')
                            ->columnSpanFull(),
                        
                        \Filament\Forms\Components\Repeater::make('global_presence')
                            ->label('Global Presence Locations')
                            ->schema([
                                TextInput::make('country')
                                    ->required()
                                    ->label('Country Name (e.g. USA)'),
                            ])
                            ->columnSpanFull(),

                        \Filament\Forms\Components\FileUpload::make('logo_ticker')
                            ->image()
                            ->multiple()
                            ->directory('hero')
                            ->label('Logo Ticker Images')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
