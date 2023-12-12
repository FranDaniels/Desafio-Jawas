<?php

namespace App\Http\Controllers;

use App\Models\despiece;
use App\Models\Inventario;
use App\Models\Lote;
use App\Models\lote_usuario;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
/**
 * @author Francisco Álvarez Bellón
 */
class controllerClasificador extends Controller
{
    public function listarLotes(){
        try {
            $lote=Lote::all();

            $msg=$lote;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }

    public function listarLote($id){
        try {

            $lote = DB::select('SELECT * FROM lote WHERE id = ?', [$id]);

            $msg=$lote;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function listarComponente($nombre){
        try {

            $componente=DB::select('
            SELECT
                id
            FROM
                componente
            WHERE
                tipo = ?
            ',[$nombre]);

            $msg=$componente;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function addInventario(Request $request){
        try {

            $inventario=new Inventario;

            $inventario->id_lote=$request->get('idLote');
            $inventario->id_componente=$request->get('idComponente');
            $inventario->cantidad_disponible=$request->get('cantidad');


            $lote=Lote::find($inventario->id_lote);

            $lote->clasificado=1;

            $inventario->save();
            $lote->save();

            $msg=$inventario;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }
   
    public function listarLoteNombreUsu(){
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
            WHERE
                l.disponible = 1 and l.estado = \'Entregado\'
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

    public function asignarLote(Request $request){
        try {
            $loteAsignado=new lote_usuario;

            $loteAsignado->id_usuario=$request->get('idUsuario');
            $loteAsignado->id_lote=$request->get('idLote');

            $id=$request->get('idLote');

            $loteEncontrado=Lote::find($id);
            
            $loteEncontrado->disponible=0;

            $loteEncontrado->save();
            $loteAsignado->save();

            $msg=$loteAsignado;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }

    public function listarMisLotes($id){
        try {
            $misLotes = DB::select('
            SELECT
                l.id,
                l.descripcion,
                l.latitud,
                l.longitud,
                l.estado,
                l.fecha_entrega,
                l.disponible,
                l.id_usuario
            FROM
                lote l
            JOIN
                lote_usuario lu ON l.id = lu.id_lote
            WHERE
                lu.id_usuario = ? and l.clasificado = 0
            ',[$id]);

            $msg=$misLotes;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }

    public function listarComponentes(){
        try {
            $componentes = DB::select('SELECT tipo FROM componente');

            $msg=$componentes;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }

    public function realizarDespiece(Request $request){
        try {
            $despiece = new despiece;

            $despiece->id_lote=$request->get('idLote');
            $despiece->id_usuario_clasificador=$request->get('idUsuario');
            $despiece->id_componente=$request->get('idComponente');
            $despiece->cantidad=$request->get('cantidad');

            $despiece->save();

            $msg=$despiece;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json($msg,$cod);
    }
}
