<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ComponenteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Componente::create([
            'nombre' => 'Unidad Central de Procesamiento',
            'tipo' => 'CPU',
            'descripcion' => 'Es el cerebro del ordenador y realiza la mayoría de las operaciones de procesamiento.'
        ]);

        \App\Models\Componente::create([
            'nombre' => 'Memoria de Acceso Aleatorio',
            'tipo' => 'RAM',
            'descripcion' => 'Almacena temporalmente datos y programas en uso para proporcionar acceso rápido a la CPU.'
        ]);

        \App\Models\Componente::create([
            'nombre' => 'Almacenamiento',
            'tipo' => 'SSD',
            'descripcion' => 'Ofrece un espacio de almacenamiento permanente para el sistema operativo, aplicaciones y datos.'
        ]);

        \App\Models\Componente::create([
            'nombre' => 'Tarjeta Madre',
            'tipo' => 'Placa Base',
            'descripcion' => 'Conecta y facilita la comunicación entre todos los componentes del ordenador.'
        ]);

        \App\Models\Componente::create([
            'nombre' => 'Tarjeta de video',
            'tipo' => 'GPU',
            'descripcion' => 'Procesa y genera imágenes para mostrar en el monitor. Es crucial para gráficos intensivos y aplicaciones 3D.'
        ]);

        \App\Models\Componente::create([
            'nombre' => 'Pantalla de video',
            'tipo' => 'Monitor',
            'descripcion' => '
            El monitor es un componente clave de un sistema de computadora que proporciona una interfaz visual para que los usuarios puedan interactuar con el sistema operativo, las aplicaciones y los datos.'
        ]);
    }
}
