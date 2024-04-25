<?php

namespace App\Http\Controllers;

use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
           'username' => 'required',
           'password' => 'required'
        ]);

        $user = User::where('username' , $credentials['username'])->where('password', $credentials['password'])->first();

        if($user && $user->role == "ADMIN"){
            Auth::login($user);
            return redirect('/dashboard');
        }else{
            return redirect('/login');
        }
    }


    public function logout(Request $request)
    {
        Auth::logout(Auth::user());
        return redirect('/');
    }
}
