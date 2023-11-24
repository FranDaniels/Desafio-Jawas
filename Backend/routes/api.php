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

Route::get('listarUsuarios',[controllerAdministrador::class,'listarUsuarios'])->middleware('admin');
Route::get('listarUsuario',[controllerAdministrador::class,'listarUsuario'])->middleware('admin');
Route::post('crearUsuario',[controllerAdministrador::class,'crearUsuario'])->middleware('admin');
Route::post('crearRol',[controllerAdministrador::class,'crearRol'])->middleware('admin');
Route::put('modificarUsuario',[controllerAdministrador::class,'modificarUsuario'])->middleware('admin');
Route::put('modificarRol',[controllerAdministrador::class,'modificarRolUsuario'])->middleware('admin');
Route::delete('borrarUsuario',[controllerAdministrador::class,'borrarUsuario'])->middleware('admin');

//Usuario
Route::post('registro',[controllerRegistro::class,'crearUsuario']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
