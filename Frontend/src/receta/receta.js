import { obtenerRecetas } from '../http/receta.js';

async function mostrarRecetas() {
    try {
        let response = await obtenerRecetas();
        let roles = response.roles;

        seleccionRol.innerHTML = '';

        if (Array.isArray(roles)) {
            roles.forEach((rol) => {
                let opcion = document.createElement('option');
                opcion.value = rol.id;
                opcion.textContent = rol.nombre;
                seleccionRol.appendChild(opcion);
            });
        } else {
            console.error('La propiedad roles en la respuesta de la API no es un array:', roles);
        }
    } catch (error) {
        console.error('Error al obtener las recetas:', error);
    }
}
mostrarRecetas();