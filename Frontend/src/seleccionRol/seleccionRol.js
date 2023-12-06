import { obtenerRolUsuario } from '../http/rolSeleccion.js';

const mostrarRolElement = document.getElementById('mostrarRol');

async function mostrarRolUsuario() {
    try {
        const rolUsuario = await obtenerRolUsuario();

        if (!rolUsuario.rol || !rolUsuario.rol.nombre) {
            throw new Error('No se pudo obtener el nombre del rol del usuario.');
        }

        mostrarRolElement.textContent = `${rolUsuario.rol.nombre}`;

    } catch (error) {
        console.error('Error al mostrar el rol del usuario:', error);
    }
}

mostrarRolUsuario();