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

    if (!rolesResponse.mens) {
      throw new Error('No se pudieron obtener los roles del usuario.');
    }

    let rolUsuario = rolesResponse.mens;

    console.log(rolUsuario);

    return rolUsuario;
  } catch (error) {
    console.error('Error al obtener el rol del usuario', error);
    throw error;
  }
}
