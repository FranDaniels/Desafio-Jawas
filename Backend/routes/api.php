<?php

use App\Http\Controllers\controllerAdministrador;
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
Route::get('listarUsuarios',[controllerAdministrador::class,'listarUsuarios'])->middleware('admin');
Route::get('listarUsuario',[controllerAdministrador::class,'listarUsuario'])->middleware('admin');
Route::post('crearUsuario',[controllerAdministrador::class,'crearUsuario'])->middleware('admin');
Route::post('rol',[controllerAdministrador::class,'crearRol'])->middleware('admin');
Route::post('rolUsuario',[controllerAdministrador::class,'addRolUsuario'])->middleware('admin');
Route::put('modificarUsuario',[controllerAdministrador::class,'modificarUsuario'])->middleware('admin');
Route::delete('borrarUsuario',[controllerAdministrador::class,'borrarUsuario'])->middleware('admin');

//Usuario
Route::post('registro',[controllerUsuario::class,'crearUsuario']);
Route::put('modificarPass',[controllerUsuario::class,'modificarPassword']);
Route::put('modificarDatos',[controllerUsuario::class,'modificarDatos']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
