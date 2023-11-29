import { inicioSesion } from "../http/inicioSesion.js";

let btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
let correoInput = document.querySelector('input[type="email"]');
let contrasenaInput = document.querySelector('input[type="password"]');
let errorContainer = document.getElementById('error');

btnIniciarSesion.addEventListener("click", async function () {
    let correo = correoInput.value;
    let contrasena = contrasenaInput.value;

    btnIniciarSesion.disabled = true;

    try {
        let usuarioGuardado = await inicioSesion({ correo, contrasena });
        if (!correo || !contrasena){
            mostrarError("Por favor ingresa tanto el correo como la contraseña.");
        }else if (!usuarioGuardado || usuarioGuardado.correo !== correo){
            mostrarError("Usuario no encontrado. Verifica tu correo electrónico.");
        }else if (usuarioGuardado.contrasena !== contrasena){
            mostrarError("La contraseña es incorrecta.");
        } else {
            sessionStorage.setItem('usuario', JSON.stringify(usuarioGuardado));
            window.location.href = "../inicio";
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