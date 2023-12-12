<?php

use App\Http\Controllers\controllerAdministrador;
use App\Http\Controllers\controllerClasificador;
use App\Http\Controllers\controllerInicioSesion;
use App\Http\Controllers\controllerReceta;
use App\Http\Controllers\controllerUsuario;
use App\Http\Controllers\controllerRol;
use App\Http\Controllers\ControllerJoyas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

/**
 * @author Francisco Álvarez Bellón
 */
//Usuario
Route::post('subirImagen',[controllerUsuario::class,'subirImagen']);
Route::put('actualizarImagen',[controllerUsuario::class,'actualizarImagenUsuario']);
Route::post('donar',[controllerUsuario::class,'donar']);

if (app()->environment('local')) {
    Route::middleware(['AllowCors'])->group(function () {
        Route::post('inicioSesion', [controllerUsuario::class, 'inicioSesion']);
    });
} /*else {
    // tus rutas normales aquí
}*/

Route::middleware('cors')->group( function () {

Route::middleware('auth:sanctum')->group( function () {
    //Añadir rutas para que no se puedan hacer si no se ha echo el registro ni el login

/**
 * @author Francisco Álvarez Bellón
 */
//Administrador
Route::prefix('admin')->middleware('admin')->group(function(){
    Route::get('listarUsuarios',[controllerAdministrador::class,'listarUsuarios']);
    Route::get('listarUsuario',[controllerAdministrador::class,'listarUsuario']);
    Route::get('listarRoles/{id}',[controllerAdministrador::class,'listarRoles']);
    Route::get('listarTodosLotes',[controllerAdministrador::class,'listarTodosLosLotes']);
    Route::get('listarComponentes',[controllerAdministrador::class,'cargarComponentes']);
    Route::post('componente',[controllerAdministrador::class,'crearComponente']);
    Route::post('crearUsuario',[controllerAdministrador::class,'crearUsuario']);
    Route::post('rol',[controllerAdministrador::class,'crearRol']);
    Route::post('rolUsuario',[controllerAdministrador::class,'addRolUsuario']);
    Route::put('modificarUsuario',[controllerAdministrador::class,'modificarUsuario']);
    Route::put('modificarLote/{id}',[controllerAdministrador::class,'loteEntregado']);
    Route::put('modificarPassword',[controllerAdministrador::class,'modificarPasswordUsuario']);
    Route::put('darAlta/{id}',[controllerAdministrador::class,'darAlta']);
    Route::put('darBaja/{id}',[controllerAdministrador::class,'darBaja']);
});

/**
 * @author Francisco Álvarez Bellón
 */
//Usuario
Route::get('usuario/{id}',[controllerUsuario::class,'obtenerIdUsu'])->middleware('colaborador');
Route::put('modificarPass',[controllerUsuario::class,'modificarPassword'])->middleware('colaborador');
Route::put('modificarDatos',[controllerUsuario::class,'modificarDatos'])->middleware('colaborador');

/**
 * @author Francisco Álvarez Bellón
 */
//Clasificador
Route::prefix('clasificador')->middleware('clasificador')->group(function(){
    Route::get('componentes',[controllerClasificador::class,'listarComponentes']);
    Route::get('listarLotesNombre',[controllerClasificador::class,'listarLoteNombreUsu']);
    Route::get('listarLotes',[controllerClasificador::class,'listarLotes']);
    Route::get('listarLote/{id}',[controllerClasificador::class,'listarLote']);
    Route::get('listarMisLotes/{id}',[controllerClasificador::class,'listarMisLotes']);
    Route::get('listarComponente/{id}',[controllerClasificador::class,'listarComponente']);
    Route::post('despiece',[controllerClasificador::class,'realizarDespiece']);
    Route::post('inventario',[controllerClasificador::class,'addInventario']);
    Route::post('asignarLote',[controllerClasificador::class,'asignarLote']);
});

//Recetas
Route::prefix('diseñador')->middleware('diseñador')->group(function(){
    Route::get('mostrarRecetas', [controllerReceta::class, 'mostrarRecetas']);
    Route::get('obtenerNombreJoya/{id}', [ControllerJoyas::class, 'obtenerNombreJoya']);
    Route::get('obtenerNombreComponente/{id}',[controllerReceta::class,'obtenerNombreComponente']);
    Route::get('obtenerRecetaPorId/{id}', [controllerReceta::class, 'obtenerRecetaPorId']);
});

//Joyas
Route::get('mostrarJoyas', [ControllerJoyas::class, 'mostrarJoyas']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

});
/**
 * @author Francisco Álvarez Bellón
 */
Route::post('registro',[controllerUsuario::class,'crearUsuario']);

Route::post('inicioSesion', [AuthController::class, 'inicioSesion']);

Route::get('obtenerRol/{idUsuario}', [controllerRol::class, 'obtenerRolUsuario']);

Route::get('', function () {
    return response()->json("Unauthorized", 401);
})->name('nologin');
});
