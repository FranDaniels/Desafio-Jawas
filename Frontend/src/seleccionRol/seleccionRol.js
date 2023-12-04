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
        } else {
            console.error('La propiedad roles en la respuesta de la API no es un array:', roles);
        }
    } catch (error) {
        console.error('Error al obtener roles:', error);
    }
}

if (btnConfirmar) {
    btnConfirmar.addEventListener('click', async function () {
        try {
            const selectedRol = seleccionRol.value;

            if (!selectedRol) {
                console.error('No se ha seleccionado ningún rol.');
                return;
            }

            const correoUsuario = JSON.parse(sessionStorage.getItem('usuario')).correo;

            if (!correoUsuario) {
                console.error('Correo de usuario no encontrado en el sessionStorage');
                return;
            }
            
            await asignarRol({ correoUsuario, nombreRol: selectedRol });
            // window.location.href = '/ruta-de-redireccion';
        } catch (error) {
            console.error('Error en la llamada:', error);
        }
    });
}

mostrarRoles();
