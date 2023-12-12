import { obtenerRolUsuario } from '../http/rolUsuario.js';

const mostrarRolElement = document.getElementById('mostrarRol');
const btnSeleccionar = document.getElementById('btnSeleccionar');

async function mostrarRolesUsuario() {
    try {
        const rolesUsuario = await obtenerRolUsuario();

        const contenedorRoles = document.getElementById('contenedorRoles');

        contenedorRoles.innerHTML = '';

        if (Array.isArray(rolesUsuario) && rolesUsuario.length > 0) {
            rolesUsuario.forEach((rol) => {
                const botonRol = document.createElement('button');
                botonRol.className = 'btn btn-primary me-2';
                botonRol.textContent = rol.nombre;

                //Terminar de rellenar
                botonRol.addEventListener('click', () => {
                    console.log(`Accediendo con el rol: ${rol.nombre}`);
                });

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

botonRol.addEventListener('click', () =>{
    console.log(`Accediendo con el rol: ${rol.nombre}`);

    sessionStorage.setItem('rol', rol.nombre);
});