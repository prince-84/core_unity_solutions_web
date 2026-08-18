<?php

namespace App\Filament\Resources\ServicesSections\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class ServicesSectionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('mini_title')->default(null),
                TextInput::make('main_title')->default(null),
                \Filament\Forms\Components\Builder::make('cards')
                    ->blocks([
                        \Filament\Forms\Components\Builder\Block::make('content_card')
                            ->schema([
                                \Filament\Forms\Components\FileUpload::make('icon')->image()->directory('services'),
                                \Filament\Forms\Components\TextInput::make('title'),
                                \Filament\Forms\Components\Textarea::make('description'),
                                \Filament\Forms\Components\FileUpload::make('mockup_image')->image()->directory('services'),
                            ]),
                        \Filament\Forms\Components\Builder\Block::make('links_card')
                            ->schema([
                                \Filament\Forms\Components\FileUpload::make('background_image')->image()->directory('services'),
                                \Filament\Forms\Components\TextInput::make('title_highlight'),
                                \Filament\Forms\Components\TextInput::make('title_main'),
                                \Filament\Forms\Components\Repeater::make('links')
                                    ->schema([
                                        \Filament\Forms\Components\TextInput::make('label')->required(),
                                    ])
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }
}
