import { obtenerRecetas, obtenerNombreJoya, obtenerNombreComponente } from "../http/receta.js";

import { seleccionCabecera } from "../utils/componentes.js";

seleccionCabecera();
var token=sessionStorage.getItem("token")

var tokenSinComillas = token.replace(/^"(.*)"$/, '$1');

async function mostrarRecetas() {
    try {
        const response = await obtenerRecetas(tokenSinComillas);

        if (!response || !response.mens || !Array.isArray(response.mens)) {
            console.error('La respuesta del servidor no tiene la estructura esperada.');
            return;
        }

        const recetas = response.mens;
        const contenedorRecetas = document.getElementById('contenedorRecetas');

        if (!contenedorRecetas) {
            console.error('No se encontró el contenedor de recetas.');
            return;
        }

        for (const receta of recetas) {
            const cardReceta = await crearCardReceta(receta);
            contenedorRecetas.appendChild(cardReceta);
        }

    } catch (error) {
        console.error('Error al obtener las recetas:', error);
    }
}

async function crearCardReceta(receta) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    const nombreJoya = await obtenerNombreJoya(receta.id_joya,tokenSinComillas);

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Ver Receta';
    button.addEventListener('click', () => verReceta(receta, card));

    const divReceta = document.createElement('div');
    divReceta.id = `receta-${receta.id}`;
    divReceta.style.display = 'none';

    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${nombreJoya}</h5>
        </div>
    `;

    card.querySelector('.card-body').appendChild(button);
    card.appendChild(divReceta);

    return card;
}

async function verReceta(receta, card) {
    const divReceta = card.querySelector(`#receta-${receta.id}`);
    const btnVerReceta = card.querySelector('.btn-primary');

    if (receta) {
        const nombreComponente = await obtenerNombreComponente(receta.id_componente,tokenSinComillas);

        divReceta.innerHTML = `
            <p>Componente: ${nombreComponente}</p>
            <p>Cantidad: ${receta.cantidad}</p>
            <button class="btn btn-secondary" id="cerrarRecetaBtn-${receta.id}">Cerrar Receta</button>
        `;
        divReceta.style.display = 'block';

        btnVerReceta.style.display = 'none';

        const cerrarRecetaBtn = document.getElementById(`cerrarRecetaBtn-${receta.id}`);
        cerrarRecetaBtn.addEventListener('click', () => cerrarReceta(receta.id, card));
    } else {
        console.error('Receta no válida.');
    }
}

async function cerrarReceta(idReceta, card) {
    const divReceta = card.querySelector(`#receta-${idReceta}`);
    const btnVerReceta = card.querySelector('.btn-primary');

    if (divReceta && btnVerReceta) {
        divReceta.innerHTML = '';
        divReceta.style.display = 'none';
        btnVerReceta.style.display = 'block';
    }
}

mostrarRecetas();