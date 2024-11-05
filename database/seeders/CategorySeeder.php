<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Sillas',
            'Mesas',
            'Sofás',
            'Camas',
            'Escritorios',
            'Aparadores',
            'Muebles TV',
            'Cómodas',
            'Estanterías',
            'Textil de hogar',
            'Iluminación',
            'Electrodomésticos',
        ];

        foreach ($categories as $categoryName) {
            $category = Category::create([
                'name' => $categoryName,
                'slug' => Str::slug($categoryName),
                'parent_id' => null,
            ]);

            // foreach ($subcategories as $subcategoryName) {
            //     Category::create([
            //         'name' => $subcategoryName,
            //         'slug' => Str::slug($subcategoryName),
            //         'parent_id' => $category->id,
            //     ]);
            // }
        }
    }
}