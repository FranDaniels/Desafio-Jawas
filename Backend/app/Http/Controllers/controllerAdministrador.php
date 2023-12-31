<?php

namespace App\Http\Controllers;

use App\Models\Componente;
use App\Models\Lote;
use App\Models\lote_usuario;
use App\Models\Rol;
use App\Models\rol_usuario;
use App\Models\User;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

/**
 * @author Francisco Álvarez Bellón
 */
class controllerAdministrador extends Controller
{
    public function listarUsuarios(){

        try {
            $usuarios=DB::select('
            SELECT
                u.id, u.nombre,u.apellido,u.correo,r.nombre AS nombre_rol,u.usuarioActivo
            FROM
                users u
            JOIN
                rol r ON r.id = u.id_rol
            ORDER BY
                u.id
            ');

            $msg=$usuarios;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }

    public function listarUsuario(Request $request){

        try {
            $id=$request->get('id');

            $usuario=User::find($id);

            $msg=$usuario;
            $cod=200;

        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function crearUsuario(Request $request){
        $usuario=new User;

        $usuario->nombre=$request->get('nombre');
        $usuario->apellido=$request->get('apellido');
        $usuario->correo=$request->get('correo');
        $usuario->password=$request->get('password');
        $usuario->img='https://proyectodualiza.s3.amazonaws.com/perfiles/obiwanKenobi.jpeg';
        $usuario->id_rol=$request->get('rol');
        $usuario->usuarioActivo="1";

        $msg=$usuario;
        $cod=200;

        try {
            $usuario->save();
            $user=$usuario;
            $rolU=new rol_usuario;
            $rolU->id_rol=$user->id_rol;
            $rolU->id_usuario=$user->id;
            $rolU->save();
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function listarRoles($id){
        try {

            $roles = DB::table('rol')
            ->select('id','nombre')
            ->whereNotExists(function ($query) use ($id) {
                $query->select(DB::raw(1))
                      ->from('rol_usuario')
                      ->where('id_usuario', '=', $id)
                      ->whereColumn('id_rol', '=', 'rol.id');
            })
            ->get();
            
            $msg=$roles;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }

    public function modificarUsuario(Request $request){

        try {
            $id=$request->get('id');

            $usuarioEncontrado=User::find($id);

            $usuarioEncontrado->nombre=$request->get('nombre');
            $usuarioEncontrado->apellido=$request->get('apellido');

            $usuarioEncontrado->save();

            $msg=$usuarioEncontrado;
            $cod=200;
            

        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function modificarPasswordUsuario(Request $request){
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

    public function addRolUsuario(Request $request){
        try {
            $rol=new rol_usuario;

            $rol->id_rol=$request->get('idRol');
            $rol->id_usuario=$request->get('idUsuario');

            $rol->save();
            $msg=$rol;
            $cod=200;
            
        } catch (Exception $e) {
            $msg='Error al crear el rol_usuario';
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function darAlta($id){

        try {

            $usuario=User::find($id);

            $usuario->usuarioActivo=1;

            $usuario->save();
            $msg='Usuario dado de alta correctamente';
            $cod=200;
            
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function darBaja($id){

        try {

            $usuario=User::find($id);

            $usuario->usuarioActivo=0;
            
            $usuario->save();
            $msg='Usuario dado de baja correctamente';
            $cod=200;
            
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function listarTodosLosLotes(){
        try {
            $lotes = DB::select('
            SELECT
                l.id AS lote_id,
                l.descripcion AS lote_descripcion,
                l.latitud AS lote_latitud,
                l.longitud AS lote_longitud,
                l.estado AS lote_estado,
                l.fecha_entrega AS lote_fecha_entrega,
                u.nombre AS usuario_nombre
            FROM
                lote l
            JOIN
                users u ON l.id_usuario = u.id
            ORDER BY
                l.id
            ');

        $msg=$lotes;
        $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }
        
        return response()->json($msg,$cod);
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

    public function loteEntregado($idLote){
        try {
        $loteEncontrado=Lote::find($idLote);

        $loteEncontrado->estado="Entregado";

        $loteEncontrado->save();

        $msg=$loteEncontrado;
        $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }
        
        return response()->json($msg,$cod);
    }

    public function cargarComponentes(){
        try {
            $componentes=DB::select('
            SELECT
                c.nombre,c.tipo,c.descripcion
            FROM
                componente c
            ORDER BY
                c.id
            ');

            $msg=$componentes;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }

    public function crearComponente(Request $request){
        try {
            $componente=new Componente;

            $componente->nombre=$request->get('nombre');
            $componente->tipo=$request->get('tipo');
            $componente->descripcion=$request->get('descripcion');

            $componente->save();

            $msg=$componente;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }
}
