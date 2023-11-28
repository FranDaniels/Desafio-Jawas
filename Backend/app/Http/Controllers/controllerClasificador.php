<?php

namespace App\Http\Controllers;

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
   
}
