export async function inicioSesion(datos) {
    const bodyContent = JSON.stringify({
        "correo": datos.correo,
        "password": datos.password,
    });

    const headersList = {
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/api/inicioSesion", {
            method: "POST",
            body: bodyContent,
            headers: headersList,
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}
