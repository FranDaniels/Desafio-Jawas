export async function obtenerJoyas() {
    try {
        let response = await fetch('http://127.0.0.1:8000/api/mostrarJoyas');

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        let joyas = await response.json();

        return joyas;
    } catch (error){
        console.error('Error al mostrar las joyas disponibles: ', error);
        throw error;
    }
}