<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;
use Exception;
use App\Models\User;

/**
 * @author Marina Laguna 
 */
class controllerRol extends Controller
{
    public function mostrarRol(){
        try {
            $roles = Rol::all();
    
            return response()->json(['roles' => $roles], 200);
        } catch (Exception $e) {
            return response()->json(['No se han encontrado los roles'], 500);
        }
    }

    public function asignarRol(Request $request) {
        try {
            $correoUsuario = $request->input('correo');
            $nombreRolSeleccionado = $request->input('nombreRol');
     
            $usuario = User::where('correo', $correoUsuario)->first();
     
            if (!$usuario) {
                throw new Exception('Usuario no encontrado para el correo proporcionado: ' . $correoUsuario);
            }
     
            $rol = Rol::where('nombre', $nombreRolSeleccionado)->first();
     
            if (!$rol) {
                throw new Exception('Rol no encontrado para el nombre proporcionado: ' . $nombreRolSeleccionado);
            }
     
            $usuario->id_rol = $rol->id;
            $usuario->save();
     
            $msg = ['mensaje' => 'Rol asignado correctamente'];
            $cod = 200;
        } catch (Exception $e) {
            $msg = ['error' => 'Ha ocurrido un error en el servidor.'];
            $cod = 500;
        }
     
        return response()->json($msg, $cod);
    }
}