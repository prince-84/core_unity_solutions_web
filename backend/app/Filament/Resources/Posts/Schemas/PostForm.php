<?php

namespace App\Filament\Resources\Posts\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class PostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Post Information')
                    ->description('Provide the title, slug, and assign the author.')
                    ->schema([
                        Select::make('user_id')
                            ->relationship('user', 'name')
                            ->required()
                            ->searchable()
                            ->preload()
                            ->label('Author'),
                        
                        TextInput::make('title')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (Get $get, Set $set, ?string $state) {
                                if (!$get('slug')) {
                                    $set('slug', Str::slug($state));
                                }
                            })
                            ->label('Post Title'),

                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->label('Post Slug'),
                    ])->columns(3),

                Section::make('Content & Media')
                    ->description('Write the main article and upload a featured image.')
                    ->schema([
                        RichEditor::make('content')
                            ->required()
                            ->columnSpanFull()
                            ->label('Post Content'),

                        FileUpload::make('featured_image')
                            ->image()
                            ->directory('posts/images')
                            ->label('Featured Image'),
                    ]),

                Section::make('Publishing Settings')
                    ->description('Set status and publication time.')
                    ->schema([
                        Select::make('status')
                            ->options([
                                'draft' => 'Draft',
                                'published' => 'Published',
                            ])
                            ->default('draft')
                            ->required()
                            ->label('Status'),

                        DateTimePicker::make('published_at')
                            ->label('Published At'),
                    ])->columns(2),
            ]);
    }
}
