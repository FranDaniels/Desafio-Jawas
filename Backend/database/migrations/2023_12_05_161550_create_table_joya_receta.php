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
        Schema::create('joya_receta', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_joya');
            $table->unsignedBigInteger('id_receta');
            $table->timestamps();

            $table->foreign('id_joya')->references('id')->on('joya');
            $table->foreign('id_receta')->references('id')->on('receta');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('joya_receta');
    }
};
