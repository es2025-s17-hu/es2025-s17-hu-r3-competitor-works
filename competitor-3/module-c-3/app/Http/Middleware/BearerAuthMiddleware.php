<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BearerAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Get the token
        $token = $request->bearerToken();
        if (!$token) {
            return \response('Unauthorized', 401);
        }

        // Try to find the user
        $user = User::where('token', $token)->first();
        if (!$user) {
            return \response('Unauthorized', 401);
        }

        // Set the request user
        $request->setUserResolver(fn() => $user);

        return $next($request);
    }
}
