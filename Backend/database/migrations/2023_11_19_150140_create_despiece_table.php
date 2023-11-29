<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('despiece', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_lote')->constrained('lote');
            $table->foreignId('id_usuario_clasificador')->constrained('users');
            $table->foreignId('id_componente')->constrained('componente');
            $table->integer('cantidad');
            $table->text('descripcion');            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('despiece');
    }
};
