<?php

namespace App\Http\Controllers;

use App\Models\Lote;
use Illuminate\Http\Request;
use App\Models\rol_usuario;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class controllerUsuario extends Controller
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

            $idRolSeleccionado = $request->input('seleccionRol');

            $rolU = new rol_usuario;
            $rolU->id_rol = $idRolSeleccionado;
            $rolU->id_usuario=$id;
            $rolU->save();
        } catch (Exception $e) {
            $msg = $e;
            $cod=404;
        }
        return response()->json(['mens' => $msg],$cod);
    }

    public function modificarPassword(Request $request){
        try {
            $id=$request->get('id');

            $usuarioEncontrado=User::find($id);

            $usuarioEncontrado->password=$request->get('password');

            $usuarioEncontrado->save();
            $msg="Password cambiada correctamente";
            $cod=200;
            

        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function modificarDatos(Request $request){
        try {
            $id=$request->get('id');

            $usuarioEncontrado=User::find($id);

            $usuarioEncontrado->nombre=$request->get('nombre');
            $usuarioEncontrado->apellido=$request->get('apellido');
            $usuarioEncontrado->correo=$request->get('correo');

            $usuarioEncontrado->save();
            $msg=$usuarioEncontrado;
            $cod=200;
            

        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function donar(Request $request){
        try {
            $lote=new Lote;

            $lote->descripcion=$request->get('descripcion');
            $lote->latitud=$request->get('latitud');
            $lote->longitud=$request->get('longitud');
            $lote->estado='En camino';
            $lote->fecha_entrega=now();
            $lote->disponible=0;
            $lote->clasificado=0;
            $lote->id_usuario=$request->get('idUsuario');

            $msg=$lote;
            $cod=200;

            $lote->save();
        } catch (Exception $e) {
            $msg = $e;
            $cod=404;
        }
        return response()->json(['mens' => $msg],$cod);
    }

    public function obtenerIdUsu($id){
        try {

            $usuario=User::find($id);

            $msg=$usuario;
            $cod=200;

        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }
}
