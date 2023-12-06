<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Exception;


class AuthController extends Controller
{
    public function inicioSesion(Request $request)
    {
        try {
            $request->validate([
                'correo' => 'required|exists:users,correo',
                'password' => 'required',
            ]); 
    
            if (Auth::attempt(['correo' => $request->input('correo'), 'password' => $request->input('password')])) {
                $usuario = Auth::user();
    
                $success['token'] = $usuario->createToken('LaravelSanctumAuth')->plainTextToken;
                $success['correo'] = $usuario->correo;
                $success['id'] = $usuario->id;
                $success['nombre'] = $usuario->nombre;
                $success['apellido'] = $usuario->apellido;
                $success['password'] = $usuario->password;
                $success['id_rol'] = $usuario->id_rol;
    
                return response()->json(["success" => true, "data" => $success, "message" => "User logged-in!"]);
            } else {
                return response()->json(['message' => 'Correo o contraseña incorrectos'], 401);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}