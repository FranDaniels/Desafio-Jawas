import { obtenerRolUsuario } from '../http/rolUsuario.js';
import { cabecera, footer } from "../utils/componentes.js";

cabecera();
footer();
const mostrarRolElement = document.getElementById('mostrarRol');
const btnCerrar = document.getElementById('btnCerrar');

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

function cerrarVentanaEmergente() {
    // Cierra la ventana emergente actual
    window.close();
}

if (btnCerrar) {
    btnCerrar.addEventListener('click', cerrarVentanaEmergente);
} else {
    console.error('No se encontró el botón de confirmar');
}