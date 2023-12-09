export async function obtenerRecetas() {
    try {
        let response = await fetch('http://127.0.0.1:8000/api/mostrarRecetas');

        if (!response.ok){
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        let recetas = await response.json();
        console.log(recetas)

        return recetas;
    } catch (error){
        console.error('Error al mostrar las recetas disponibles: ', error);
        throw error;
    }
}

export async function obtenerNombreJoya(id_joya) {
    try {
        let response = await fetch(`http://127.0.0.1:8000/api/obtenerNombreJoya/${id_joya}`);
        let resultado = await response.json();
        return resultado.mens;
    } catch (error) {
        console.error('Error al obtener el nombre de la joya:', error);
        throw error;
    }
}   

export async function obtenerNombreComponente(id_componente){
    try{
        let response = await fetch(`http://127.0.0.1:8000/api/obtenerNombreComponente/${id_componente}`);
        let resultado = await response.json();
        return resultado.mens;
    }catch (error){
        console.error('Error al obtener el nombre del componente:', error);
        throw error;
    }
}

export async function obtenerRecetaPorId(idReceta) {
    try {
        let response = await fetch(`http://127.0.0.1:8000/api/obtenerRecetaPorId/${idReceta}`);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        let receta = await response.json();
        return receta;
    } catch (error) {
        console.error('Error al obtener la receta por ID:', error);
        throw error;
    }
}
