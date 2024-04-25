<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Login endpoint - username and password
     */
    public function login(Request $request)
    {
        // Try to find the user
        $user = User::where('username', $request->username)->where('password', $request->password)->where('role', 'ADMIN')->first();
        if(!$user) {
            return response('Unauthorized', 401);
        }

        // Create the token
        $token = md5($user->username);
        $user->update(['token' => $token]);
        return response()->json(['token' => $token]);
    }

    /**
     * Login endpoint - username and password
     */
    public function loginPin(Request $request)
    {
        // Try to find the user
        $user = User::where('pin', $request->pin)->where('role', 'WAITER')->first();
        if(!$user) {
            return response('Unauthorized', 401);
        }

        // Create the token
        $token = md5($user->username);
        $user->update(['token' => $token]);
        return response()->json(['token' => $token]);
    }

    /**
     * Logout route
     */
    public function logout(Request $request)
    {
        // Logout the user and return
        $request->user()->update(['token' => null]);
        return response('Logged out');
    }
}
