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
        Schema::create('componente_lote', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_componente');
            $table->unsignedBigInteger('id_lote');
            $table->timestamps();

            $table->foreign('id_componente')->references('id')->on('componente');
            $table->foreign('id_lote')->references('id')->on('lote');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('componente_lote');
    }
};
