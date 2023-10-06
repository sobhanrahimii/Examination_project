<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Throwable;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $userId)
    {
        $user = User::findOrFail($userId);
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $userId)
    {
        try {
            $user = User::findOrFail($userId);
            $user->update($request->only("name", "email"));

            return response()->json([
                'message' => 'your information updated successfully',
                'user' => new UserResource($user),
            ], 200);
        } catch (Throwable $e) {
            return response()->json([
                'errors' => 'Error in updating'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $userId)
    {
        try {
            $user = User::findOrFail($userId);
            $user->delete();

            return response()->json([
                'message' => 'Your account deleted successfully',
            ], 200);
        } catch (Throwable $e) {
            return response()->json([
                'errors' => 'Error in deleting account'
            ], 500);
        }
    }
}
