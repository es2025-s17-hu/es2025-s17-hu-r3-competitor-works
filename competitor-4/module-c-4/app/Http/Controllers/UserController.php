<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //

    /**
     * Login
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make([
            "username" => 'required|string',
            "password" => 'required|string',
        ], [
            'required' => 'Unauthorized',
            'string' => 'Unauthorized',
        ]);

        if ($validator->errors()->count() > 0) {
            return response('Unauthorized', 401);
        }

        $user = User::where("username", $request->username)->first();
        if ($user) {
            if ($user->password === $request->password) {
                if ($user->role === "ADMIN") {
                    $token = hash("md5", $request->username);
                    $user->token = $token;
                    $user->updatedAt = Carbon::now();
                    $user->save();
                    return response()->json([
                        "token" => $token
                    ], 200);
                } else {
                    return response('Unauthorized', 401);
                }
            } else {
                return response('Unauthorized', 401);
            }
        } else {
            return response('Unauthorized', 401);
        }
    }

    /**
     * Login with pin
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function loginPin(Request $request)
    {
        $validator = Validator::make([
            "pin" => 'required|integer',
        ], [
            'required' => 'Unauthorized',
            'string' => 'Unauthorized',
            'integer' => 'Unauthorized',
        ]);

        if ($validator->errors()->count() > 0) {
            return response('Unauthorized', 401);
        }

        $user = User::where("pin", $request->pin)->first();
        if ($user) {
            if ($user->role === "WAITER") {
                $token = hash("md5", $request->username);
                $user->token = $token;
                $user->updatedAt = Carbon::now();
                $user->save();
                return response()->json([
                    "token" => $token
                ], 200);
            } else {
                return response('Unauthorized', 401);
            }
        } else {
            return response('Unauthorized', 401);
        }
    }

    /**
     * Logout
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Foundation\Application|\Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $request->user->token = null;
        $request->user->updatedAt = Carbon::now();
        $request->user->save();
        return response("Logged out", 200);
    }
}
