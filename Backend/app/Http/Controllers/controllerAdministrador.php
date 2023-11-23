<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use App\Models\rol_usuario;
use App\Models\User;
use Illuminate\Http\Request;
use Exception;

class controllerAdministrador extends Controller
{
    public function listarUsuarios(Request $request){
        $usuario=new User;

        $msg=$usuario;
        $cod=200;

        try {
            
        } catch (Exception $e) {
            
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function listarUsuario(Request $request){
        $usuario=new User;

        $msg=$usuario;
        $cod=200;

        try {
            
        } catch (Exception $e) {
            
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function crearUsuario(Request $request){
        $usuario=new User;

        $usuario->nombre=$request->get('nombre');
        $usuario->apellido=$request->get('apellido');
        $usuario->correo=$request->get('correo');
        $usuario->password=$request->get('password');
        $usuario->id_rol=$request->get('rol');

        $msg=$usuario;
        $cod=200;

        try {
            $usuario->save();
            $user=$usuario;
            $rolU=new rol_usuario;
            $rolU->id_rol=$user->id_rol;
            $rolU->id_usuario=$user->id;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }
        return response()->json(['mens' => $msg],$cod);
    }

    public function modificarUsuario(Request $request){
        $usuario=new User;

        $msg=$usuario;
        $cod=200;

        try {
            
        } catch (Exception $e) {
            
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function borrarUsuario(Request $request){
        $usuario=new User;

        $msg=$usuario;
        $cod=200;

        try {
            
        } catch (Exception $e) {
            
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
