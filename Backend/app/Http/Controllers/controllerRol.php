<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;
use Exception;
use App\Models\Rol_usuario;

/**
 * @author Marina Laguna 
 */
class controllerRol extends Controller
{
    public function obtenerRolUsuario($idUsuario) {
        try {
            $rolUsuario = rol_usuario::where('id_usuario', $idUsuario)->first();
    
            if (!$rolUsuario) {
                throw new Exception('Rol de usuario no encontrado');
            }
    
            $rol = $rolUsuario->rol;
    
            $msg = $rolUsuario;
            $cod = 200;
    
        } catch (Exception $e) {
            $msg = $e->getMessage();
            $cod = 404;
        }
    
        return response()->json(['mens' => $msg], $cod);
    }
}