export async function obtenerJoyas(token) {
    try {
        let headersList={
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        }

        let response = await fetch('http://127.0.0.1:8000/api/diseñador/mostrarJoyas',{
            method: "GET",    
            headers:headersList
        });

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