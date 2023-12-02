import { inicioSesion } from "../http/inicioSesion.js";

let btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
let errorContainer = document.getElementById('error');

async function realizarInicioSesion() {
    console.log("entro");
    let correo = document.getElementById('correoElectronico').value;
    let contrasena = document.getElementById('contrasena').value;

    if (!correo || !contrasena) {
        mostrarError('No se encontraron los campos de correo electrónico o contraseña');
        return;
    }

    try {
        let datos = {
            correo: correo,
            password: contrasena,
        };

        const usuarioGuardado = await inicioSesion(datos);

        if (usuarioGuardado && usuarioGuardado.usuario) {
            const datosUsuario = usuarioGuardado.usuario;
            sessionStorage.setItem('usuario', JSON.stringify(datosUsuario));
            window.location.href = "../seleccionRol/seleccionRol.html";
        } else {
            mostrarError("Inicio de sesión fallido.");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
};

if (btnIniciarSesion) {
    btnIniciarSesion.addEventListener('click', realizarInicioSesion);
} else {
    console.error('No se encontró el botón de inicio de sesión');
}

function mostrarError(mensaje) {
    errorContainer.textContent = mensaje;
    setTimeout(() => {
        errorContainer.textContent = "";
    }, 3500);
}
