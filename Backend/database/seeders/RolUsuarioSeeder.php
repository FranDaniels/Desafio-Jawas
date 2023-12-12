<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolUsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\rol_usuario::create([
            'id_rol' => '1',
            'id_usuario' => '1'
        ]);
        \App\Models\rol_usuario::create([
            'id_rol' => '2',
            'id_usuario' => '1'
        ]);

        \App\Models\rol_usuario::create([
            'id_rol' => '3',
            'id_usuario' => '1'
        ]);

        \App\Models\rol_usuario::create([
            'id_rol' => '4',
            'id_usuario' => '1'
        ]);

        \App\Models\rol_usuario::create([
            'id_rol' => '3',
            'id_usuario' => '2'
        ]);

        \App\Models\rol_usuario::create([
            'id_rol' => '4',
            'id_usuario' => '2'
        ]);

        \App\Models\rol_usuario::create([
            'id_rol' => '2',
            'id_usuario' => '3'
        ]);

        \App\Models\rol_usuario::create([
            'id_rol' => '4',
            'id_usuario' => '3'
        ]);
    }
}
