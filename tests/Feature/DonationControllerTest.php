<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Donation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

class DonationControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_example(): void
    {
        $category = Category::create([
            'name' => 'Test Category',
            'slug' => 'test-category',
        ]);
        $payload = [
            'name' => 'Test Donation',
            'description' => 'Test Description',
            'category_id' => $category->id,
            'width' => 100,
            'height' => 100,
            'depth' => 100,
            'need_transport' => false,
            'street_address' => 'Carrer Benlliure, 23-1, València',
            'contact_channel' => 'whatsapp',
            'contact_value' => '1234567890',
        ];

        $response = $this->post('/donacion', $payload);

        $response->assertStatus(302);

        dd(Donation::all());
    }

    public function test_donation_creation_with_images(): void
    {
        Storage::fake('public');

        $category = Category::create([
            'name' => 'Test Category',
            'slug' => 'test-category',
        ]);

        $payload = [
            'name' => 'Test Donation',
            'description' => 'Test Description',
            'category_id' => $category->id,
            'width' => 100,
            'height' => 100,
            'depth' => 100,
            'need_transport' => false,
            'street_address' => 'Carrer Benlliure, 23-1, València',
            'contact_channel' => 'whatsapp',
            'contact_value' => '1234567890',
            'images' => [
                UploadedFile::fake()->image('donation1.jpg'),
                UploadedFile::fake()->image('donation2.jpg'),
            ],
        ];

        $response = $this->post('/donacion', $payload);

        $response->assertStatus(302);
        $response->assertRedirect(route('donations.index'));

        $this->assertDatabaseHas('donations', [
            'name' => 'Test Donation',
            'description' => 'Test Description',
        ]);

        $donation = Donation::where('name', 'Test Donation')->first();
        $this->assertNotNull($donation);

        $this->assertCount(2, $donation->images);

        foreach ($donation->images as $image) {
            $this->assertTrue(Storage::disk('public')->exists($image->url));
        }
    }
}
