<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use App\Models\rol_usuario;
use App\Models\User;
use App\Models\Usuario;
use Exception;
use Illuminate\Http\Request;

class controllerRegistro extends Controller
{
    public function crearUsuario(Request $request){
        $usuario=new User;

        $usuario->nombre=$request->get('nombre');
        $usuario->apellido=$request->get('apellido');
        $usuario->correo=$request->get('correo');
        $usuario->password=$request->get('password');
        $usuario->id_rol=2;

        $msg=$usuario;
        $cod=200;
        try {
            $usuario->save();
            $id = $usuario->id;
            $rolU = new rol_usuario;
            $rolU->id_rol = 2;
            $rolU->id_usuario=$id;
            $rolU->save();
        } catch (Exception $e) {
            $msg = $e;
            $cod=404;
        }
        return response()->json(['mens' => $msg],$cod);
    }

    public function crearRol(Request $request){
        $rol=new Rol;

        $rol->nombre=$request->get('nombre');

        $msg=$rol;
        $cod=200;

        try {
            $rol->save();
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }
        return response()->json(['mens' => $msg],$cod);
    }

}


