<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Colaborador
{
    /**
 * @author Francisco Álvarez Bellón
 */
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user=$request->user();

        if ($user->tokenCan("2")) {
            return $next($request);
        }else{
            return response()->json('No tienes rol colaborador');
        }
    }
}
