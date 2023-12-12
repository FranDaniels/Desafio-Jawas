<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
/**
 * @author Francisco Álvarez Bellón
 */
class LoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Lote::create([
            'descripcion' => 'Lote 1',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '1',
            'clasificado'=>'0',
            'id_usuario' => '3'
        ]);

        \App\Models\Lote::create([
            'descripcion' => 'Lote 2',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'clasificado'=>'0',
            'id_usuario' => '4'
        ]);

        \App\Models\Lote::create([
            'descripcion' => 'Lote 3',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'clasificado'=>'0',
            'id_usuario' => '1'
        ]);

        \App\Models\Lote::create([
            'descripcion' => 'Lote 4',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'En camino',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'clasificado'=>'0',
            'id_usuario' => '2'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 5',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'En camino',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'clasificado'=>'0',
            'id_usuario' => '2'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 6',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '1',
            'clasificado'=>'0',
            'id_usuario' => '2'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 7',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'En camino',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'clasificado'=>'0',
            'id_usuario' => '2'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 8',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '1',
            'clasificado'=>'0',
            'id_usuario' => '2'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 9',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'En camino',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'clasificado'=>'0',
            'id_usuario' => '2'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 10',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '1',
            'clasificado'=>'0',
            'id_usuario' => '3'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 11',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'En camino',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '0',
            'clasificado'=>'0',
            'id_usuario' => '3'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 12',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '1',
            'clasificado'=>'0',
            'id_usuario' => '3'
        ]);
        \App\Models\Lote::create([
            'descripcion' => 'Lote 13',
            'latitud' => '38.69296294925023',
            'longitud'=> '-4.1086506843566895',
            'estado' => 'Entregado',
            'fecha_entrega' => '2023-12-01 12:01:27',
            'disponible' => '1',
            'clasificado'=>'0',
            'id_usuario' => '3'
        ]);
    }
}
