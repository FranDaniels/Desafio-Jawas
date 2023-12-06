import { inicioSesion } from "../http/inicioSesion.js";

let btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
let errorContainer = document.getElementById('error');

async function realizarInicioSesion() {
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

        let respuestaServidor = await inicioSesion(datos);

        if (respuestaServidor.success && respuestaServidor.data) {
            let datosUsuario = respuestaServidor.data;
            sessionStorage.setItem('usuario', JSON.stringify(datosUsuario));
            localStorage.setItem('usuarioId', datosUsuario.id);
            redirigir();
        } else {
            mostrarError(respuestaServidor.message || "Inicio de sesión fallido.");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        mostrarError("Inicio de sesión fallido.");
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

function redirigir(){
    window.open('./seleccionRol/seleccionRol.html', 'Rol del Usuario', 'width=600,height=400');
    setTimeout(function(){
        window.location.href = './inicio/inicio.html';
    }, 3000);
}