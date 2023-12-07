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

        function crearTarjeta(joya) {
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

        // Botón para cambiar entre vista de tarjetas y lista
        const cambiarVistaBtn = document.getElementById('cambiarVista');

        if (cambiarVistaBtn) {
            cambiarVistaBtn.addEventListener('click', () => {
                // Agrega o elimina la clase 'list-group' para cambiar la vista
                contenedorJoyas.classList.toggle('list-group');

                // Borra las tarjetas actuales
                contenedorJoyas.innerHTML = '';

                // Renderiza joyas en la nueva vista
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
