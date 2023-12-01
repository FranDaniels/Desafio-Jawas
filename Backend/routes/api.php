<?php

use App\Http\Controllers\controllerAdministrador;
use App\Http\Controllers\controllerClasificador;
use App\Http\Controllers\controllerInicioSesion;
use App\Http\Controllers\controllerUsuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('inicioSesion', [controllerUsuario::class, 'inicioSesion']);
Route::put('modificarPass',[controllerUsuario::class,'modificarPassword']);
Route::put('modificarDatos',[controllerUsuario::class,'modificarDatos']);

//Lotes
Route::post('donar',[controllerUsuario::class,'donar']);

//Clasificador
Route::get('clasificador/listarLotesNombre',[controllerClasificador::class,'listarLoteNombreUsu']);
Route::get('clasificador/listarLotes',[controllerClasificador::class,'listarLotes']);
Route::get('clasificador/listarLote',[controllerClasificador::class,'listarLote']);
Route::post('clasificador/componente',[controllerClasificador::class,'crearComponente']);
Route::post('clasificador/inventario',[controllerClasificador::class,'addInventario']);
Route::post('clasificador/asignarLote',[controllerClasificador::class,'asignarLote']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
