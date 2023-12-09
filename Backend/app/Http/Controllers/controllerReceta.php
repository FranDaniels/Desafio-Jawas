<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Receta;
use Exception;
use Illuminate\Support\Facades\DB;

/**
 * @author Marina Laguna
 */
class controllerReceta extends Controller
{
    public function mostrarRecetas(){
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

    public function crearReceta(Request $request){
        $receta = new Receta;

        $receta -> id = $request -> get('id');
        $receta -> nombre = $request -> get('nombre');
        $receta -> cantidad = $request -> get('cantidad');
        $receta -> id_joya = $request -> get('joya');
        $receta -> id_componente = $request -> get('componente');

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
            $recetaEncontrada -> cantidad = $request -> get('cantidad');

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

    public function obtenerNombreComponente($id){
        try {
            $componente = DB::select('SELECT nombre FROM componente WHERE id = ?', [$id]);
    
            if (empty($componente)) {
                $msg = "Componente no encontrada";
                $cod = 404;
            } else {
                $msg = $componente[0]->nombre;
                $cod = 200;
            }
        } catch (Exception $e) {
            $msg = $e->getMessage();
            $cod = 500; 
        }
        return response()->json(['mens' => $msg], $cod);
    }

    public function obtenerRecetaPorId($id)
    {
        try {
            $receta = Receta::find($id);

            if (!$receta) {
                $msg = "Receta no encontrada";
                $cod = 404;
            } else {
                $msg = $receta;
                $cod = 200;
            }
        } catch (\Exception $e) {
            $msg = $e->getMessage();
            $cod = 500;
        }

        return response()->json(['mens' => $msg], $cod);
    }
}