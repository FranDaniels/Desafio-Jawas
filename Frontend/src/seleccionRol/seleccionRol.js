import { obtenerRolUsuario } from '../http/rolSeleccion.js';

const mostrarRolElement = document.getElementById('mostrarRol');

async function mostrarRolUsuario() {
    try {
        const rolUsuario = await obtenerRolUsuario();

        mostrarRolElement.textContent = `Rol actual: ${rolUsuario.nombre}`;

    } catch (error) {
        console.error('Error al mostrar el rol del usuario:', error);
    }
}

mostrarRolUsuario();