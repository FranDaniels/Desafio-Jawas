<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Joya;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

/**
 * @author Marina Laguna
 */
class ControllerJoyas extends Controller
{
    public function mostrarJoyas(){
        try{
            $joya = Joya::all();

            $msg = $joya;
            $cod = 200;
        }catch (Exception $e){
            $msg = $e;
            $cod = 404;
        }
        return response() -> json(['mens' => $msg], $cod);
    }

    public function obtenerNombreJoya($id){
        try {
            $joya = DB::select('SELECT nombre FROM joya WHERE id = ?', [$id]);
    
            if (empty($joya)) {
                $msg = "Joya no encontrada";
                $cod = 404;
            } else {
                $msg = $joya[0]->nombre;
                $cod = 200;
            }
        } catch (Exception $e) {
            $msg = $e->getMessage();
            $cod = 500; 
        }
    
        return response()->json(['mens' => $msg], $cod);
    }
    
    
    public function crearJoya(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|string',
                'descripcion' => 'required|string',
                'imagen' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
                'id_usuario' => 'required|exists:usuarios,id',
            ]);

            $imagenPath = $request->file('imagen')->store('imagenes/joyas', 'public');

            $imagen = Storage::url($imagenPath);

            $joya = Joya::create([
                'nombre' => $request->input('nombre'),
                'descripcion' => $request->input('descripcion'),
                'imagen' => $imagen,
                'id_usuario' => $request->input('id_usuario'),
            ]);

            $msg = ['message' => 'Joya creada exitosamente', 'joya' => $joya];
            $cod = 200;
        } catch (Exception $e) {
            $msg = ['error' => $e->getMessage()];
            $cod = 404;
        }

        return response()->json(['mens' => $msg], $cod);
    }

    public function modificarJoya(Request $request)
    {
        try {
            $request->validate([
                'id' => 'required|exists:joya,id',
                'nombre' => 'required|string',
                'descripcion' => 'required|string',
                'imagen' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048', // El campo imagen es opcional al modificar
            ]);

            $id = $request->input('id');

            $joyaEncontrada = Joya::find($id);

            if (!$joyaEncontrada) {
                throw new Exception('Joya no encontrada');
            }

            $joyaEncontrada->nombre = $request->input('nombre');
            $joyaEncontrada->descripcion = $request->input('descripcion');

            if ($request->hasFile('imagen')) {
                $imagenPath = $request->file('imagen')->store('imagenes/joyas', 'public');
                $imagen = Storage::url($imagenPath);
                $joyaEncontrada->imagen_url = $imagen;
            }

            $joyaEncontrada->save();

            $msg = ['message' => 'Joya modificada exitosamente', 'joya' => $joyaEncontrada];
            $cod = 200;
        } catch (Exception $e) {
            $msg = ['error' => $e->getMessage()];
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
