<?php

use App\Http\Controllers\controllerAdministrador;
use App\Http\Controllers\controllerClasificador;
use App\Http\Controllers\controllerInicioSesion;
use App\Http\Controllers\controllerReceta;
use App\Http\Controllers\controllerUsuario;
use App\Http\Controllers\controllerRol;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ControllerJoyas;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::middleware('auth:sanctum')->group( function () {
    //Añadir rutas para que no se puedan hacer si no se ha echo el registro ni el login
});

//Administrador
//Hay que añadirle un middleware
Route::get('admin/listarUsuarios',[controllerAdministrador::class,'listarUsuarios'])->middleware('admin');
Route::get('admin/listarUsuario',[controllerAdministrador::class,'listarUsuario'])->middleware('admin');
Route::post('admin/crearUsuario',[controllerAdministrador::class,'crearUsuario'])->middleware('admin');
Route::post('admin/rol',[controllerAdministrador::class,'crearRol'])->middleware('admin');
Route::post('admin/rolUsuario',[controllerAdministrador::class,'addRolUsuario'])->middleware('admin');
Route::put('admin/modificarUsuario',[controllerAdministrador::class,'modificarUsuario'])->middleware('admin');
Route::delete('admin/borrarUsuario',[controllerAdministrador::class,'borrarUsuario'])->middleware('admin');

//Usuario
Route::get('usuario/{id}',[controllerUsuario::class,'obtenerIdUsu']);
Route::post('registro',[controllerUsuario::class,'crearUsuario']);
Route::put('modificarPass',[controllerUsuario::class,'modificarPassword']);
Route::put('modificarDatos',[controllerUsuario::class,'modificarDatos']);

Route::post('inicioSesion', [AuthController::class, 'inicioSesion']);

Route::get('obtenerRol/{idUsuario}', [controllerRol::class, 'obtenerRolUsuario']);

//Lotes
Route::post('donar',[controllerUsuario::class,'donar']);

//Clasificador
Route::get('clasificador/componentes',[controllerClasificador::class,'listarComponentes']);
Route::get('clasificador/listarLotesNombre',[controllerClasificador::class,'listarLoteNombreUsu']);
Route::get('clasificador/listarLotes',[controllerClasificador::class,'listarLotes']);
Route::get('clasificador/listarLote/{id}',[controllerClasificador::class,'listarLote']);
Route::get('clasificador/listarMisLotes/{id}',[controllerClasificador::class,'listarMisLotes']);
Route::get('clasificador/listarComponente/{id}',[controllerClasificador::class,'listarComponente']);
Route::post('clasificador/despiece',[controllerClasificador::class,'realizarDespiece']);
Route::post('clasificador/componente',[controllerClasificador::class,'crearComponente']);
Route::post('clasificador/inventario',[controllerClasificador::class,'addInventario']);
Route::post('clasificador/asignarLote',[controllerClasificador::class,'asignarLote']);

//Recetas
Route::get('mostrarRecetas', [controllerReceta::class, 'mostrarRecetas']);

//Joyas
Route::get('mostrarJoyas', [ControllerJoyas::class, 'mostrarJoyas']);

Route::get('', function () {
    return response()->json("No autorizado",203);
})->name('nologin');
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
