function generarTarjetas() {
    const contenedorTarjetas = document.getElementById('contenedorTarjetas');

    joyas.forEach(joya => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('col', 'col-md-4');

        tarjeta.innerHTML = `
            <div class="card h-100">
                <img src="${joya.imagen}" class="card-img-top" alt="${joya.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${joya.nombre}</h5>
                    <p class="card-text">Precio: ${joya.precio}</p>
                    <!-- Puedes agregar más información aquí -->
                </div>
            </div>
        `;

        contenedorTarjetas.appendChild(tarjeta);
    });
}
