<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use PHPUnit\Metadata\Uses;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('username', $request->username)->first();
        if(!$user) {
            return response('Unauthorized', 401);
        }

        if($user->role !== 'ADMIN') {
            return response('Unauthorized', 401);
        }

        $token = md5($user->username);
        $user->token = $token;
        $user->save();

        return response([
            'token' => $token
        ]);

    }

    public function pin(Request $request)
    {
        $request->validate([
            'pin' => 'required'
        ]);

        $user = User::where('pin', $request->pin)->first();
        if(!$user) {
            return response('Unauthorized', 401);
        }

        if($user->role !== 'WAITER') {
            return response('Unauthorized', 401);
        }

        $token = md5($user->username);
        $user->token = $token;
        $user->save();

        return response([
            'token' => $token
        ]);

    }

    public function logout(Request $request)
    {
        return response('Logout');
    }
}
