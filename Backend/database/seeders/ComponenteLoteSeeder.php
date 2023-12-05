<?php

use Illuminate\Database\Seeder;
use App\Models\Componente_lote;
use App\Models\Componente;
use App\Models\Lote;

class ComponenteLoteSeeder extends Seeder
{
    public function run()
    {
        $componente = Componente::find(1);

        $lote = Lote::find(1);

        Componente_lote::create([
            'id_componente' => $componente->id,
            'id_lote' => $lote->id,
            'cantidad' => 10,
        ]);
    }
}