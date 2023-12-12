export async function obtenerRolUsuario() {
  try {
    let usuarioGuardado = sessionStorage.getItem('usuario');

    if (!usuarioGuardado) {
      throw new Error('No se pudo obtener la información del usuario.');
    }

    let usuario = JSON.parse(usuarioGuardado);
    let idUsuario = usuario.id;

    let response = await fetch(`http://127.0.0.1:8000/api/obtenerRol/${idUsuario}`);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }

    let rolesResponse = await response.json();

    if (!rolesResponse || !rolesResponse.mens || rolesResponse.mens.length === 0) {
      throw new Error('El usuario no tiene roles asignados o la respuesta del servidor no es válida.');
    }

    let rolesUsuario = rolesResponse.mens;

    return rolesUsuario;
  } catch (error) {
    console.error('Error al obtener los roles del usuario:', error);
    throw error;
  }
}

export async function modificarRolUsuario(idUsuario) {
  try {
    const nuevoRol = localStorage.getItem("nombreRol");

    if (!nuevoRol) {
      throw new Error('No se pudo obtener el nuevo rol almacenado.');
    }

    const idRol = await obtenerIdRolPorNombre(nuevoRol);

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_rol: idRol }),
    };

    const response = await fetch(`http://127.0.0.1:8000/api/modificarRol/${idUsuario}`, requestOptions);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }

    const respuestaServidor = await response.json();

    return respuestaServidor;
  } catch (error) {
    throw error;
  }
}

export async function obtenerIdRolPorNombre(nombreRol) {
  try {
    let response = await fetch(`http://127.0.0.1:8000/api/usuarios/${nombreRol}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }

    let idRolResponse = await response.json();

    if (!idRolResponse || !idRolResponse.mens) {
      throw new Error('No se pudo obtener el ID del rol desde el servidor.');
    }

    return idRolResponse.mens;
  } catch (error) {
    throw error;
  }
}
