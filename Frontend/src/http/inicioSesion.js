export async function obtenerUsuarioGuardado() {
    return new Promise((resolve, reject) => {
        try {
            let usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
            resolve(usuarioGuardado);
        } catch (error) {
            reject(error);
        }
    });
}

export async function inicioSesion(datos) {
    let bodyContent = JSON.stringify({
        "correo": datos.correo,
        "password": datos.password,
    });

    let headersList = {
        "Content-Type": "application/json",
    };

    try {
        let response = await fetch("http://127.0.0.1:8000/api/inicioSesion", {
            method: "POST",
            body: bodyContent,
            headers: headersList,
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}