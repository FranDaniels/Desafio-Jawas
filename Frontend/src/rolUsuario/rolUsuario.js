import { obtenerRolUsuario } from '../http/rolUsuario.js';

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
                    localStorage.setItem('nombreRol', rol.nombre)
                });
                 
                
                contenedorRoles.appendChild(botonRol);
            });
        } else {
            console.error('La respuesta del servidor no contiene roles válidos.');
        }

    } catch (error) {
        console.error('Error al mostrar los roles del usuario:', error);
    }
}

mostrarRolesUsuario();