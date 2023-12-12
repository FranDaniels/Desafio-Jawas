import { obtenerRolUsuario, obtenerIdRolPorNombre, modificarRolUsuario } from '../http/rolUsuario.js';

async function mostrarRolesUsuario() {
    try {
        const rolesUsuario = await obtenerRolUsuario();

        const contenedorRoles = document.getElementById('contenedorRoles');

        contenedorRoles.innerHTML = '';

        if (Array.isArray(rolesUsuario) && rolesUsuario.length > 0) {
            rolesUsuario.forEach(async (rol) => {
                const botonRol = document.createElement('button');
                botonRol.className = 'btn btn-primary me-2';
                botonRol.textContent = rol.nombre;

                botonRol.addEventListener('click', async () => {
                    try {
                        const idRol = await obtenerIdRolPorNombre(rol.nombre);
                        const usuarioActualizado = await modificarRolUsuario(idRol);

                        usuarioActualizado.idRol = idRol;
                        usuarioActualizado.nombreRol = rol.nombre;

                        sessionStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
                        sessionStorage.setItem('token', usuarioActualizado.token);

                        window.location.href = '../inicio/inicio.html';
                    } catch (error) {
                        console.error('Error al obtener los datos del usuario:', error);
                    }
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