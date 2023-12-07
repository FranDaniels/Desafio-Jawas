import { obtenerJoyas } from '../http/joyas.js';

async function mostrarJoyas() {
    try {
        let response = await obtenerJoyas();

        if (!response || !response.mens || !Array.isArray(response.mens)) {
            console.error('La respuesta del servidor no tiene la estructura esperada.');
            return;
        }

        let joyas = response.mens;

        let contenedorJoyas = document.getElementById('contenedorJoyas');

        if (!contenedorJoyas) {
            console.error('No se encontró el contenedor de joyas.');
            return;
        }

        joyas.forEach((joya) => {
            let tarjeta = document.createElement('div');
            tarjeta.classList.add('col-md-4', 'mb-4');

            tarjeta.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${joya.nombre}</h5>
                        <p class="card-text">${joya.descripcion}</p>
                    </div>
                </div>
            `;

            contenedorJoyas.appendChild(tarjeta);
        });

    } catch (error) {
        console.error('Error al obtener las joyas:', error);
    }
}

mostrarJoyas();