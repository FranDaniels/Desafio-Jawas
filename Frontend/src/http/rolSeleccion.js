export async function obtenerRoles() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/mostrarRol');
        
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const roles = await response.json();

        return roles;
    } catch (error) {
        throw error;
    }
}

export async function asignarRol(data) {
    const idUsuario = sessionStorage.getItem('idUsuario');

    if (!idUsuario){
        console.error('ID de usuario no encontrado en el localStorage');
    } else {
        fetch('https://127.0.0.1:8000/api/asignarRol', {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
}