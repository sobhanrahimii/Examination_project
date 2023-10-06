<?php

namespace App\Http\Requests\Api;

use App\Models\User;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UpdateUserRequest extends FormRequest
{
    public function __construct()
    {
        parent::__construct();
        request()->merge([
            'userId' => request()->route('userId')
        ]);

    }
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize($userId): bool
    {
        $userId = User::findOrFail($userId);
        $response = Gate::inspect('update', $userId);

        if ($response->allowed()) {
            return true;
        } else {
            throw new HttpResponseException(response()->json([
                "errors" => $response->message(),
            ], 401));
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            "errors" => $validator->errors()->all(),
        ], 422));
    }
}
