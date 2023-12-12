import { obtenerRolUsuario } from '../http/rolUsuario.js';

const mostrarRolElement = document.getElementById('mostrarRol');
const btnSeleccionar = document.getElementById('btnSeleccionar');

async function mostrarRolesUsuario() {
    try {
        const rolesUsuario = await obtenerRolUsuario();

        // Obtén el contenedor de roles
        const contenedorRoles = document.getElementById('contenedorRoles');

        // Limpiar el contenedor antes de agregar nuevos roles
        contenedorRoles.innerHTML = '';

        // Verifica si rolesUsuario es un array válido
        if (Array.isArray(rolesUsuario) && rolesUsuario.length > 0) {
            // Iterar sobre los roles y crear botones
            rolesUsuario.forEach((rol) => {
                const botonRol = document.createElement('button');
                botonRol.className = 'btn btn-primary me-2';
                botonRol.textContent = rol.nombre;

                // Agregar un evento al botón (puedes redirigir a la página correspondiente)
                botonRol.addEventListener('click', () => {
                    console.log(`Accediendo con el rol: ${rol.nombre}`);
                    // Puedes redirigir o realizar acciones específicas aquí
                });

                // Agregar el botón al contenedor
                contenedorRoles.appendChild(botonRol);
            });
        } else {
            console.warn('La respuesta del servidor no contiene roles válidos.');
        }

    } catch (error) {
        console.error('Error al mostrar los roles del usuario:', error);
    }
}

mostrarRolesUsuario();