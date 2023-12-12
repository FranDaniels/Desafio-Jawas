<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rol;
use Exception;
use App\Models\Rol_usuario;
use Illuminate\Support\Facades\DB; 

/**
 * @author Marina Laguna 
 */
class controllerRol extends Controller
{
    public function obtenerRolUsuario($idUsuario) {
        try {
            $rolesUsuario = DB::table('rol_usuario')
                ->where('id_usuario', $idUsuario)
                ->join('rol', 'rol_usuario.id_rol', '=', 'rol.id')
                ->select('rol_usuario.*', 'rol.nombre as nombre')
                ->get();
    
            if ($rolesUsuario->isEmpty()) {
                throw new Exception('Roles de usuario no encontrados');
            }
    
            $msg = $rolesUsuario;
            $cod = 200;
    
        } catch (Exception $e) {
            $msg = $e->getMessage();
            $cod = 404;
        }
    
        return response()->json(['mens' => $msg], $cod);
    }

    public function modificarRolUsuario(Request $request, $idUsuario)
    {
        try {
            $nuevoRol = $request->input('rol');
            DB::table('rol_usuario')
                ->where('id_usuario', $idUsuario)
                ->update(['id_rol' => $nuevoRol]);

            $msg = 'Rol de usuario modificado exitosamente';
            $cod = 200;
        } catch (Exception $e) {
            $msg = $e->getMessage();
            $cod = 404;
        }

        return response()->json(['mens' => $msg], $cod);
    }

    function obtenerIdRolPorNombre($nombreRol) {
        try {
            $rol = DB::table('rol')->where('nombre', $nombreRol)->first();
    
            if ($rol) {
                $msg = $rol->id;
                $cod = 200;
            } else {
                throw new Exception('No se encontró el rol con el nombre especificado');
            }
        } catch (Exception $e) {
            $msg = $e->getMessage();
            $cod = 404;
        }
        return response()->json(['mens' => $msg], $cod);
    }
}