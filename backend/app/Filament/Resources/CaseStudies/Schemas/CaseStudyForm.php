<?php

namespace App\Filament\Resources\CaseStudies\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class CaseStudyForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Project General Details')
                    ->description('Enter the client details and project title.')
                    ->schema([
                        TextInput::make('client_name')
                            ->required()
                            ->label('Client Name'),
                        
                        TextInput::make('project_title')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (Get $get, Set $set, ?string $state) {
                                if (!$get('slug')) {
                                    $set('slug', Str::slug($state));
                                }
                            })
                            ->label('Project Title'),

                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->label('Slug'),
                    ])->columns(3),

                Section::make('Hero Image')
                    ->description('Upload the primary banner/image for the case study.')
                    ->schema([
                        FileUpload::make('hero_image')
                            ->image()
                            ->directory('casestudies/images')
                            ->label('Hero Image'),
                    ]),

                Section::make('Challenge & Solution Description')
                    ->description('Describe the challenge and the solution provided.')
                    ->schema([
                        RichEditor::make('challenge_text')
                            ->required()
                            ->label('Challenge Text'),

                        RichEditor::make('solution_text')
                            ->required()
                            ->label('Solution Text'),
                    ]),

                Section::make('Project Metrics')
                    ->description('Provide metrics achieved during this project.')
                    ->schema([
                        KeyValue::make('metrics')
                            ->keyLabel('Metric')
                            ->valueLabel('Value')
                            ->keyPlaceholder('e.g. Conversion Rate')
                            ->valuePlaceholder('e.g. +150%')
                            ->columnSpanFull()
                            ->label('Metrics'),
                    ]),
            ]);
    }
}
