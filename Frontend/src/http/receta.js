export async function obtenerRecetas(token) {
    try {
        let headersList={
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        }

        let response = await fetch('http://127.0.0.1:8000/api/diseñador/mostrarRecetas',{
            method: "GET",    
            headers:headersList
        });

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

export async function obtenerNombreJoya(id_joya,token) {
    try {
        let headersList={
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        }

        let response = await fetch(`http://127.0.0.1:8000/api/diseñador/obtenerNombreJoya/${id_joya}`,{
            method: "GET",    
            headers:headersList
        });
        let resultado = await response.json();
        return resultado.mens;
    } catch (error) {
        console.error('Error al obtener el nombre de la joya:', error);
        throw error;
    }
}   

export async function obtenerNombreComponente(id_componente,token){
    try{
        let headersList={
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        }
        
        let response = await fetch(`http://127.0.0.1:8000/api/diseñador/obtenerNombreComponente/${id_componente}`,{
            method: "GET",    
            headers:headersList
        });
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
