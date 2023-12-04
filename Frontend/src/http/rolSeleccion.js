export async function obtenerRoles() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/mostrarRol');
        
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const roles = await response.json();

        return roles;
    } catch (error) {
        console.error('Error al obtener roles:', error);
        throw error;
    }
}

export async function asignarRol(data) {
    const usuarioString = sessionStorage.getItem('usuario');

    if (!usuarioString) {
        console.error('Usuario no encontrado en el sessionStorage');
        return;
    };

    const usuario = JSON.parse(usuarioString);
    const correo = usuario.correo;

    if (!correo) {
        console.error('Correo de usuario no encontrado en el sessionStorage');
        return;
    }

    try {
        const response = await fetch('https://127.0.0.1:8000/api/asignarRol', {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                correo: correo,
                nombreRol: data.nombreRol,
            }),
        });

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

    } catch (error) {
        console.error('Error en la llamada:', error);
    }
}