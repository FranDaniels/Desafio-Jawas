<?php

use App\Http\Controllers\controllerAdministrador;
use App\Http\Controllers\controllerRegistro;
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
Route::get('listarUsuarios',[controllerAdministrador::class,'listarUsuarios']);
Route::get('listarUsuario',[controllerAdministrador::class,'listarUsuario']);
Route::post('crearUsuario',[controllerAdministrador::class,'crearUsuario']);
Route::put('modificarUsuario',[controllerAdministrador::class,'modificarUsuario']);
Route::delete('borrarUsuario',[controllerAdministrador::class,'borrarUsuario']);


Route::post('registro',[controllerRegistro::class,'crearUsuario']);
Route::post('crearRol',[controllerRegistro::class,'crearRol']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
