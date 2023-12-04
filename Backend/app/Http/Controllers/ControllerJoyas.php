<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Joya;
use Exception;

/**
 * @author Marina Laguna
 */
class ControllerJoyas extends Controller
{
    public function listarJoyas(){
        try{
            $joya = Joya::all();

            $msg = $joya;
            $cod = 200;
        }catch (Exception $e){
            $mes = $e;
            $cod = 404;
        }
        return response() -> json(['mens' => $msg], $cod);
    }

    public function listarJoya(Request $request){
        try{
            $id = $request -> get('id');
            $joya = Joya::find($id);

            $mes = $joya;
            $cod = 200;
        }catch (Exception $e){
            $msg = $e;
            $cod =404;
        }
        return response() -> json (['mens' => $msg], $cod);
    }
    
    public function crearJoya(Request $request){
        $joya = new Joya;

        $joya -> id = $request -> get('id');
        $joya -> nombre = $request -> get('nombre');
        $joya -> descripcion = $request -> get('descripcion');
        $joya -> id_usuario = $request -> get('usuario');

        $msg = $joya;
        $cod = 200;

        try{
            $joya -> save();
        }catch (Exception $e){
            $msg = $e;
            $cod = 404;
        }
        return response() -> json(['mens' => $msg], $cod);
    }

    public function modificarJoya(Request $request){
        try{
            $id = $request -> get('id');

            $joyaEncontrada = Joya::find($id);

            $joyaEncontrada -> nombre = $request -> get('nombre');
            $joyaEncontrada -> descripcion = $request -> get('descripcion');

            $joyaEncontrada -> save();
            $msg = $joyaEncontrada;
            $cod = 200;
        } catch (Exception $e){
            $msg = $e;
            $cod = 404;
        }
        return response()->json(['mens' => $msg], $cod);
    }

    public function eliminarJoya(Request $request){
        try{
            $id = $request -> get('id');
            $joyaEliminada = Joya::where('id', $id) -> delete();

            if ($joyaEliminada == 0){
                $msg = "Joya no encontrada";
                $cod = 200;
            }else{
                $msg = "Joya eliminada correctamente";
                $cod = 200;
            }
        }catch (Exception $e){
            $msg=$e;
            $cod=404;
        }
        return response()->json(['mens' => $msg], $cod);
    }
}
