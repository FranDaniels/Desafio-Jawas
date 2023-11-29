import { inicioSesion } from "../http/inicioSesion.js";

let btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
let correoInput = document.querySelector('input[type="email"]');
let contrasenaInput = document.querySelector('input[type="password"]');
let errorContainer = document.getElementById('error');

btnIniciarSesion.addEventListener("click", async function () {
    console.log("llegue")
    btnIniciarSesion.disabled = true;
    try {
        let correo = correoInput.value;
        let contrasena = contrasenaInput.value;
    
        let usuarioGuardado = await inicioSesion({ correo, contrasena });

        if (usuarioGuardado && usuarioGuardado.mensaje === 'Inicio de sesion exitoso'){
            sessionStorage.setItem('usuario', JSON.stringify(usuarioGuardado));
            window.location.href = "../inicio";
        } else {
            mostrarError("Inicio de sesión fallido. Mensaje: " + usuarioGuardado.mensaje);
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    } finally {
        btnIniciarSesion.disabled = false;
    }
});

correoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        contrasenaInput.focus();
    }
});

contrasenaInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        btnIniciarSesion.click();
    }
});

function mostrarError(mensaje) {
    errorContainer.textContent = mensaje;
    setTimeout(() => {
        errorContainer.textContent = "";
    }, 3500);
}