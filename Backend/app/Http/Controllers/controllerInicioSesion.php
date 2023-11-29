<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class controllerInicioSesion extends Controller
{
    public function iniciarSesion(Request $request){
        $request->validate([
            'correo' => 'required|email',
            'password' => 'required',
        ]); 

        $usuario = User::where('correo', $request->input('correo'))->first();
        if ($usuario && Hash::check($request->input('password'), $usuario->password)) {
            return response()->json(['mensaje' => 'Inicio de sesión exitoso'], 200);
        } else {
            return response()->json(['mensaje' => 'Correo o contraseña incorrectos'], 401);
        }
    }
}
