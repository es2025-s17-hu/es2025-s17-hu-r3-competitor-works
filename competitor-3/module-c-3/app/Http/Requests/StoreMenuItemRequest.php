<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMenuItemRequest extends FormRequest
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
            'name' => 'required',
            'type' => 'required|in:FOOD,DRINK,OTHER',
            'menuCategoryId' => 'required|exists:MenuCategory,id',
            'price' => 'required',
        ];
    }

    public function messages()
    {
        return [
            '*.required' => 'One of the mandatory fields is missing',
            'menuCategoryId.exists' => 'Menucard category with the given ID does not exist',
            'type.in' => 'Value of the type field is invalid'
        ];
    }
}
