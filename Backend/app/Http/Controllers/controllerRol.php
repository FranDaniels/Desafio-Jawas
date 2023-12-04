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
            return response()->json(['error' => $e->getMessage()], 500);
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
    
            return response()->json(['mensaje' => 'Rol asignado correctamente'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
