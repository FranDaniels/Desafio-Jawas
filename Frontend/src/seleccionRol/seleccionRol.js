import { obtenerRoles, asignarRol } from '../http/rolSeleccion.js';

const btnConfirmar = document.getElementById('btnConfirmar');
const seleccionRol = document.getElementById('seleccionRol');

async function mostrarRoles() {
    try {
        const response = await obtenerRoles();
        const roles = response.roles;

        seleccionRol.innerHTML = '';

        if (Array.isArray(roles)) {
            roles.forEach((rol) => {
                const opcion = document.createElement('option');
                opcion.value = rol.id;
                opcion.textContent = rol.nombre;
                seleccionRol.appendChild(opcion);
            });
        }
    } catch (error) {
        console.error('Error al obtener roles:', error);
    }
}


btnConfirmar.addEventListener('click', async function () {
    let selectedRol = seleccionRol.value;
    let correoUsuario = JSON.parse(sessionStorage.getItem('usuario')).correo;

    let datos = {
        correoUsuario: correoUsuario,
        nombreRol: selectedRol
    };

    await asignarRol(datos);
    window.location.href = '../inicio/inicio.html';

});

mostrarRoles();