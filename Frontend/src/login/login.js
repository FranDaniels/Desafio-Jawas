function btnIniciarSesion(){
    window.location.href = "../inicio/inicio.html";
}

function validarInicio(){
    const correo = document.querySelector('input[type = "email"]').value;
    const contrasena = document.querySelector('input[type = "password"]').value;

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
    var error = document.getElementById('error');

    if (!correo || !contrasena){
        error.textContent = "Por favor ingresa tanto el correo electrónico como la contraseña.";
        setTimeout(function(){
            error.textContent = "";
        }, 3500);
    }else{
        if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contrasena === contrasena) {
            Object.assign(usuario, usuarioGuardado);
            btnIniciarSesion();
        } else {
            error.textContent = "Correo electrónico o contraseña incorrecta. Vuelve a intentarlo.";
            setTimeout(function(){
                error.textContent = "";
            }, 3500);
        }
        return false;
    }
}

window.validarInicio = validarInicio;

const botonIniciarSesion = document.getElementById('iniciarSesion');
botonIniciarSesion.addEventListener('click', validarInicio);

const botonRegistrarNav = document.getElementById('btnRegistrar');
botonRegistrarNav.addEventListener('click', btnRegistrarNav);

const correoInput = document.querySelector('input[type="email"]');
correoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.querySelector('input[type="password"]').focus();
    }
});

const contrasenaInput = document.querySelector('input[type="password"]');
contrasenaInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validarInicio();
    }
});