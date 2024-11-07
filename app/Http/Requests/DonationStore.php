<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DonationStore extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'width' => 'nullable|integer|min:1',
            'height' => 'nullable|integer|min:1',
            'depth' => 'nullable|integer|min:1',
            'need_transport' => 'required|boolean',
            'street_address' => 'required|string|max:255',
            'contact_channel' => 'required|string|max:255',
            'contact_value' => 'required|string|max:255',
            'images' => 'required|array|min:1|max:3',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:4096',
        ];
    }
}
