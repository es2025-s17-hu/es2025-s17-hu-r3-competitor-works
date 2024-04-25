<?php

namespace App\Http\Controllers;

use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
                'username' => 'required',
                'password' => 'required'
            ]
        );

        $user = User::where('username', $validated['username'])->where('password', $validated['password'])->first();

        if($user && $user->role == "ADMIN"){
            $user->tokens()->delete();
            $user->token = $user->createToken('admin_token');
            Auth::login($user);
            return response()->json([
                "message" => "Login successful",
                'token' => $user->token->plainTextToken
            ], 200);
        }else{
            return response()->json([
                "message" => "Unauthorised"
            ], 401);
        }
    }

    public function loginPin(Request $request)
    {
        $validated = $request->validate([
                'username' => 'required',
                'pin' => 'required'
            ]
        );

        $user = User::where('username', $validated['username'])->where('pin', $validated['pin'])->first();

        if($user && $user->role == "WAITER"){
            $user->tokens()->delete();
            $user->token = $user->createToken('waiter_token');
            Auth::login($user);
            return response()->json([
                "message" => "Login successful",
                'token' => $user->token->plainTextToken
            ], 200);
        }else{
            return response()->json([
                "message" => "Unauthorised"
            ], 401);
        }
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return response()->json([
           "message" => "Logged out successfully"
        ]);
    }
}
