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
            'width' => 'required|integer|min:1',
            'height' => 'required|integer|min:1',
            'depth' => 'required|integer|min:1',
            'need_transport' => 'required|boolean',
            'area' => 'required|string|max:255',
            'contact_whatsapp' => 'required_without:contact_email|numeric',
            'contact_email' => 'required_without:contact_whatsapp|email|max:120',
            'images' => 'required|array|min:1|max:3',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,jpeg,gif,heic,webp|max:8192',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'El nombre es obligatorio.',
            'name.string' => 'El nombre debe ser una cadena de texto.',
            'name.max' => 'El nombre no puede tener más de :max caracteres.',
            'description.required' => 'La descripción es obligatoria.',
            'description.string' => 'La descripción debe ser una cadena de texto.',
            'category_id.required' => 'La categoría es obligatoria.',
            'category_id.exists' => 'La categoría seleccionada no es válida.',
            'width.integer' => 'El ancho debe ser un número entero.',
            'width.min' => 'El ancho debe ser al menos :min.',
            'height.integer' => 'La altura debe ser un número entero.',
            'height.min' => 'La altura debe ser al menos :min.',
            'depth.integer' => 'La profundidad debe ser un número entero.',
            'depth.min' => 'La profundidad debe ser al menos :min.',
            'need_transport.required' => 'Debes indicar si necesitas transporte.',
            'need_transport.boolean' => 'El campo de necesidad de transporte debe ser verdadero o falso.',
            'street_address.required' => 'La dirección es obligatoria.',
            'street_address.string' => 'La dirección debe ser una cadena de texto.',
            'street_address.max' => 'La dirección no puede tener más de :max caracteres.',
            'contact_channel.required' => 'Debes seleccionar un canal de contacto.',
            'images.required' => 'Debes subir al menos una imagen.',
            'images.array' => 'Las imágenes deben ser un array.',
            'images.min' => 'Debes subir al menos :min imagen.',
            'images.max' => 'No puedes subir más de :max imágenes.',
            'images.*.required' => 'Cada imagen es obligatoria.',
            'images.*.image' => 'Los archivos deben ser imágenes.',
            'images.*.mimes' => 'Las imágenes deben ser de tipo: jpeg, png, jpg, gif, heic o webp.',
            'images.*.max' => 'Cada imagen no debe pesar más de 8 MB.',
            'contact_whatsapp.required_without' => 'Debes introducir un número de teléfono o un correo electrónico.',
            'contact_email.required_without' => 'Debes introducir un número de teléfono o un correo electrónico.',
            'contact_whatsapp.numeric' => 'El número de teléfono debe ser un número.',
            'contact_email.email' => 'El correo electrónico debe ser un correo electrónico válido.',
            'contact_email.max' => 'El correo electrónico no puede tener más de :max caracteres.',
            'area.required' => 'Debes introducir un área.',
        ];
    }
}
