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

                botonRol.addEventListener('click', async () => {
                    localStorage.setItem('nombreRol', rol.nombre);
                  
                    try {
                      const nombreRol = localStorage.getItem('nombreRol');
                  
                      const usuarioActualizado = await obtenerUsuario();
                  
                      usuarioActualizado.nombreRol = nombreRol;
                  
                      sessionStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
                      sessionStorage.setItem('token', usuarioActualizado.token);
                  
                      window.location.href = '../inicio/inicio.html';
                    } catch (error) {
                      console.error('Error al obtener los datos del usuario:', error);
                      mostrarError('Error al obtener los datos del usuario.');
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