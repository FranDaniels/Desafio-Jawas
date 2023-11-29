export async function inicioSesion(datos) {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/inicioSesion", {
            method: "POST",
            body: JSON.stringify({
                "correo": datos.correo,
                "password": datos.password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}