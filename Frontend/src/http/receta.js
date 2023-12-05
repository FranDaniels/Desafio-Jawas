export async function obtenerRecetas() {
    try {
        let response = await fetch('http://127.0.0.1:8000/api/mostrarRecetas');

        if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        let roles = await response.json();

        return roles;
    } catch (error) {
        console.error('Error al mostrar las recetas: ', error);
        throw error;
    }
}