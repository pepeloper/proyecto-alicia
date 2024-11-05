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
            'Muebles' => [
                'Asientos',
                'Mesas',
                'Almacenaje',
                'Camas',
                'Muebles de Oficina',
            ],
            'Ropa' => [
                'Hombre',
                'Mujer',
                'Niños',
                'Zapatos',
                'Accesorios',
            ],
        ];

        foreach ($categories as $categoryName => $subcategories) {
            $category = Category::create([
                'name' => $categoryName,
                'slug' => Str::slug($categoryName),
                'parent_id' => null,
            ]);

            foreach ($subcategories as $subcategoryName) {
                Category::create([
                    'name' => $subcategoryName,
                    'slug' => Str::slug($subcategoryName),
                    'parent_id' => $category->id,
                ]);
            }
        }
    }
}