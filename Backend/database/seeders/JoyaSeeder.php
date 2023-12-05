<?php

use Illuminate\Database\Seeder;
use App\Models\Joya;
use App\Models\Receta;
use App\Models\Componente;

class JoyaSeeder extends Seeder
{
    public function run()
    {
        $joya = Joya::create([
            'nombre' => 'Pulsera de placa base',
            'descripcion' => 'Una elegante pulsera con detalles de placa base',
            'id_usuario' => 1,
        ]);

        $componente = Componente::where('nombre', 'Tarjeta Madre')->first();
        Receta::create([
            'id_joya' => $joya->id,
            'id_componente' => $componente->id,
            'cantidad' => 1,
        ]);

        $joya2 = Joya::create([
            'nombre' => 'Pendiente de disco duro',
            'descripcion' => 'Un pendiente único con un disco duro y un osito en su interior',
            'id_usuario' => 2,
        ]);

        $componente2 = Componente::where('nombre', 'Almacenamiento')->first();
        Receta::create([
            'id_joya' => $joya2->id,
            'id_componente' => $componente2->id,
            'cantidad' => 1,
        ]);

        $componente3 = Componente::where('nombre', 'Pantalla de video')->first();
        Receta::create([
            'id_joya' => $joya2->id,
            'id_componente' => $componente3->id,
            'cantidad' => 1,
        ]);
    }
}