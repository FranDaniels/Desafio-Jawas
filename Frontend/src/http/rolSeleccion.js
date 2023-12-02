export async function obtenerRoles() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/seleccionarRol');
        
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const roles = await response.json();

        return roles;
    } catch (error) {
        throw error;
    }
}