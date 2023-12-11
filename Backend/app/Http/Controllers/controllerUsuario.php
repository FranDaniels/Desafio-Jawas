<?php

namespace App\Http\Controllers;

use App\Models\Lote;
use Illuminate\Http\Request;
use App\Models\rol_usuario;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
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
        $usuario->img='https://proyectodualiza.s3.amazonaws.com/perfiles/obiwanKenobi.jpeg';
        $usuario->id_rol="2";
        $usuario->usuarioActivo='1';

        $msg=$usuario;
        $cod=200;
        try {
            $usuario->save();
            $id = $usuario->id;

            $idRolSeleccionado = $usuario->id_rol;

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

    public function subirImagen(Request $request){
        $msg=['max'=>'El campo se excede del tamaño máximo'];
    
        $validator=Validator::make($request->all(),[
        'image'=>'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ],$msg);

    if ($validator->fails()) {
        return response()->json($validator->errors(),202);
    }

    if ($request->hasFile('image')) {
        $file=$request->file('image');

        $path=$file->store('perfiles','s3');
        // $path=$file->storeAs('perfiles',$file->getClientOriginalName(),'s3');
        
        $url=Storage::disk('s3')->url($path);
        return response()->json(['path'=>$path,'url'=>$url],202);
    }
    return response()->json(['error'=>'No se recibió ningún archivo.'],400);
    }

    public function actualizarImagenUsuario(Request $request){
        try {

            $id=$request->get('id');

            $usuario=User::find($id);

            $usuario->img=$request->get('img');
            
            $msg=$usuario;
            $cod=200;

        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }
}
