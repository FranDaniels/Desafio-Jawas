import { obtenerJoyas } from '../http/joyas.js';
import './joya.css';

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

        function crearTarjeta(joya) {
            let tarjeta = document.createElement('div');
            tarjeta.classList.add('col-md-4', 'mb-4');

            tarjeta.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <img src = ../imagenes/joyas/${joya.imagen}>
                        <h5 class="card-title">${joya.nombre}</h5>
                        <p class="card-text">${joya.descripcion}</p>
                    </div>
                </div>
            `;

            return tarjeta;
        }

        function crearItemLista(joya) {
            let listItem = document.createElement('div');
            listItem.classList.add('list-group-item', 'mb-2', 'border-bottom');

            listItem.innerHTML = `
                <h5 class="mb-1">${joya.nombre}</h5>
                <p class="mb-1">${joya.descripcion}</p>
            `;

            return listItem;
        }

        joyas.forEach((joya) => {
            contenedorJoyas.appendChild(crearTarjeta(joya));
        });

        let cambiarVistaBtn = document.getElementById('cambiarVista');

        if (cambiarVistaBtn) {
            cambiarVistaBtn.addEventListener('click', () => {
                contenedorJoyas.classList.toggle('list-group');

                let imagenBoton = cambiarVistaBtn.querySelector('img');
                if (contenedorJoyas.classList.contains('list-group')) {
                    imagenBoton.src = '../imagenes/vista_cuadricula.png';
                } else {
                    imagenBoton.src = '../imagenes/vista_lista.png';
                }

                contenedorJoyas.innerHTML = '';

                joyas.forEach((joya) => {
                    if (contenedorJoyas.classList.contains('list-group')) {
                        contenedorJoyas.appendChild(crearItemLista(joya));
                    } else {
                        contenedorJoyas.appendChild(crearTarjeta(joya));
                    }
                });
            });
        }
    } catch (error) {
        console.error('Error al obtener las joyas:', error);
    }
}

mostrarJoyas();