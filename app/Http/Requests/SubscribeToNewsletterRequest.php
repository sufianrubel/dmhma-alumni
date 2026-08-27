<?php

namespace App\Http\Requests;

use App\Models\NewsletterSubscriber;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SubscribeToNewsletterRequest extends FormRequest
{
    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'email' => $this->string('email')->trim()->lower()->toString(),
        ]);
    }

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
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => [
                'required',
                'string',
                'email:rfc',
                'max:254',
                Rule::unique(NewsletterSubscriber::class),
            ],
        ];
    }

    /**
     * Get the validation error messages.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'email.required' => 'Enter your email address to subscribe.',
            'email.email' => 'Enter a valid email address.',
            'email.unique' => 'This email address is already subscribed.',
        ];
    }
}
