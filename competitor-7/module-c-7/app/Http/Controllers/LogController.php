<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;

class LogController extends Controller
{
    function pin(Request $request)
    {
        $user = User::where('pin', $request->pin)->where('role', 'WAITER')->first();
        if (!$user){
            return response(null,401);
        }

        $user->update([
           'token' => md5($user->username)
        ]);
        return response([
            'token' => $user->token
        ],200);

    }



    function login(Request $request)
    {
        $user = User::where('username', $request->username)->where('password', $request->password)->where('role', 'ADMIN')->first();
        if (!$user){
            return response(null);
        }
        $user->update([
            'token' => md5($user->username)
        ]);

        return response([
            'token' => $user->token
        ],200);
    }
    function logout(Request $request)
    {
        $user = User::where('token', $request->bearerToken())->first();
        if (!$user){
            return response(null);
        }
        $user->update([
            'token' => null
        ]);

        return response('Logged out', 200);

    }

}
