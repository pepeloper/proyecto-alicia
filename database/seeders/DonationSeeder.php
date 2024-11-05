<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Donation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DonationSeeder extends Seeder
{
    public function run(): void
    {
        $donations = [
            [
                'category' => 'Mesas',
                'name' => 'Mesa de comedor',
                'description' => 'Mesa de madera maciza, extensible hasta 8 personas. Incluye 6 sillas.',
                'dimensions' => [60, 85, 180],
                'address' => [
                    'street_address' => 'Calle Colón, 50',
                    'city' => 'Valencia',
                    'postal_code' => '46004',
                    'state' => 'Valencia',
                    'country' => 'Spain',
                ],
                'contact_channel' => 'whatsapp',
                'contact_value' => '+34600000000',
            ],
            [
                'category' => 'Ropa',
                'name' => 'Camiseta',
                'description' => 'Camiseta de algodón, talla M, color azul',
                'dimensions' => [35, 5, 25],
                'address' => [
                    'street_address' => 'Avenida del Puerto, 100',
                    'city' => 'Valencia',
                    'postal_code' => '46021',
                    'state' => 'Valencia',
                    'country' => 'Spain',
                ],
                'contact_channel' => 'email',
                'contact_value' => 'usuarioprueba@example.com',
            ],
            [
                'category' => 'Almacenaje',
                'name' => 'Caja de cartón',
                'description' => 'Caja de cartón, tamaño grande, para almacenar libros',
                'dimensions' => [45, 30, 30],
                'address' => [
                    'street_address' => 'Calle de Ruzafa, 25',
                    'city' => 'Valencia',
                    'postal_code' => '46006',
                    'state' => 'Valencia',
                    'country' => 'Spain',
                ],
                'contact_channel' => 'whatsapp',
                'contact_value' => '+34611111111',
            ],
        ];

        foreach ($donations as $donationData) {
            $category = Category::where('name', $donationData['category'])->first();

            Donation::create([
                'uuid' => (string) Str::ulid(),
                'category_id' => $category->id,
                'name' => $donationData['name'],
                'description' => $donationData['description'],
                'width' => $donationData['dimensions'][0],
                'height' => $donationData['dimensions'][1],
                'depth' => $donationData['dimensions'][2],
                'need_transport' => rand(0, 1),
                'street_address' => $donationData['address']['street_address'],
                'city' => $donationData['address']['city'],
                'postal_code' => $donationData['address']['postal_code'],
                'state' => $donationData['address']['state'],
                'country' => $donationData['address']['country'],
                'contact_channel' => $donationData['contact_channel'],
                'contact_value' => $donationData['contact_value'],
            ]);
        }
    }
}