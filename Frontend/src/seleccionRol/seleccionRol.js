import { obtenerRoles } from '../http/rolSeleccion.js';

async function mostrarRoles() {
    try {
        const response = await obtenerRoles();

        const roles = response.roles;

        const seleccionRol = document.getElementById('seleccionRol');

        seleccionRol.innerHTML = '';

        if (Array.isArray(roles)) {
            roles.forEach((rol) => {
                const opcion = document.createElement('option');
                opcion.value = rol.id; 
                opcion.textContent = rol.nombre;
                seleccionRol.appendChild(opcion);
            });
        } else {
            console.error('La propiedad roles en la respuesta de la API no es un array:', roles);
        }

    } catch (error) {
        console.error('Error al obtener roles:', error);
    }
}



mostrarRoles();