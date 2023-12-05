<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Receta;
use Exception;

/**
 * @author Marina Laguna
 */
class controllerReceta extends Controller
{
    public function listarRecetas(){
        try{
            $receta = Receta::all();

            $msg = $receta;
            $cod = 200;
        } catch (Exception $e){
            $msg = $e;
            $cod = 404;
        }
        return response() -> json(['mens' => $msg], $cod);
    }

    public function listarReceta(Request $request){
        try{
            $id = $request -> get('id');
            $receta = Receta::find($id);

            $msg = $receta;
            $cod = 200;
        } catch (Exception $e){
            $msg = $e;
            $cod = 404;
        }
        return response() -> json(['mens' => $msg], $cod);
    }

    public function crearReceta(Request $request){
        $receta = new Receta;

        $receta -> id = $request -> get('id');
        $receta -> nombre = $request -> get('nombre');
        $receta -> descripcion = $request -> get('descripcion');
        $receta -> id_joya = $request -> get('joya');

        $msg = $receta;
        $cod = 200;

        try{
            $receta -> save();
        } catch (Exception $e){
            $msg = $e;
            $cod = 404;
        }
        return response() -> json(['mens' => $msg], $cod);
    }

    public function modificarReceta(Request $request){
        try{
            $id = $request -> get('id');

            $recetaEncontrada = Receta::find($id);
            $recetaEncontrada -> nombre = $request -> get ('nombre');
            $recetaEncontrada -> descripcion = $request -> get('descripcion');

            $recetaEncontrada -> save();
            $msg = $recetaEncontrada;
            $cod = 200;
        } catch (exception $e){
            $msg = $e;
            $cod = 404;
        }
        return response() -> json(['mens' => $msg], $cod);
    }

    public function eliminarJoya(Request $request){
        try{
            $id = $request -> get('id');
            $recetaEliminada = Receta::where('id', $id) -> delete();

            if ($recetaEliminada == 0){
                $msg = "Receta no encontrada";
                $cod = 200;
            }else{
                $msg = "Receta eliminada correctamente";
                $cod = 200;
            }
        } catch (Exception $e){
            $msg = $e;
            $cod = 404;
        }
        return response() -> json(['mens' => $msg], $cod);
    } 
}