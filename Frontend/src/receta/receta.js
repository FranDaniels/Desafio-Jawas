import { obtenerRecetas } from '../http/receta.js';

async function mostrarRecetas() {
    try {
        let response = await obtenerRecetas();
        let recetas = response.recetas;
 
        let listaRecetas = document.querySelector('.list-group');
 
        listaRecetas.innerHTML = '';
 
        if (Array.isArray(recetas)) {
            recetas.forEach((receta) => {
                let itemLista = document.createElement('li');
                itemLista.classList.add('list-group-item');
                itemLista.textContent = receta.nombre;
                listaRecetas.appendChild(itemLista);
            });
        }
    } catch (error) {
        console.error('Error al obtener recetas:', error);
    }
 }
 
 mostrarRecetas();