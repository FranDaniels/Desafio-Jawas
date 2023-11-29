<?php

namespace App\Http\Controllers;

use App\Models\Componente;
use App\Models\Inventario;
use App\Models\Lote;
use Exception;
use Illuminate\Http\Request;

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

        return response()->json(['mens' => $msg],$cod);
    }

    public function listarLote(Request $request){
        try {
            $id=$request->get('idLote');

            $lote=Lote::find($id);

            $msg=$lote;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
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

    public function addInventario(Request $request){
        try {

            $inventario=new Inventario;

            $inventario->id_usuario=$request->get('idUsuario');
            $inventario->id_componente=$request->get('idComponente');
            $inventario->cantidad_disponible=$request->get('cantidad');

            $inventario->save();

            $msg=$inventario;
            $cod=200;
        } catch (Exception $e) {
            $msg=$e;
            $cod=404;
        }

        return response()->json(['mens' => $msg],$cod);
    }
   
}
