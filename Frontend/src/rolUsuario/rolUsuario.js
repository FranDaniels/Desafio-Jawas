import { obtenerRolUsuario } from '../http/rolUsuario.js';

const mostrarRolElement = document.getElementById('mostrarRol');
const btnCerrar = document.getElementById('btnCerrar');

async function mostrarRolUsuario() {
    try {
        const rolUsuario = await obtenerRolUsuario();

        if (!rolUsuario.rol || !rolUsuario.rol.nombre) {
            throw new Error('No se pudo obtener el nombre del rol del usuario.');
        }
        mostrarRolElement.textContent = rolSeleccionado;
    } catch (error) {
        console.error('Error al mostrar el rol del usuario:', error);
    }
}

mostrarRolUsuario();