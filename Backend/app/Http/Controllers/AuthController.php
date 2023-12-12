<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Facades\DB;


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

                $roles=DB::select('SELECT r.id_rol FROM rol_usuario r WHERE r.id_usuario=?',[$usuario->id_rol]);

                $i=0;
                $array=[];  

                while ($i < count($roles)) {
                    array_push($array,$roles[$i]->id_rol);
                    $i++;
                }

                $success['token'] = $usuario->createToken('access_token',$array)->plainTextToken;
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