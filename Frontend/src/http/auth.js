const configAuth = {
    rutasProtegidas: [
        '/rolUsuario/rolUsuario.html', 
        '/receta/receta.html',
        '/perfil/perfil.html',
        '/loteClasificador/loteClasificador.html',
        '/joya/joya.html',
        '/inicio/inicio.html',
        '/donar/donar.html',
        '/clasificador/clasificador.html',
        '/clasificacion/clasificacion.html',
        '/adminLote/adminLote.html',
        '/admin/admin.html'
    ],
    rutaRegistro: '/registro/registro.html',
};

function estasRegistrado() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));

    if (usuario.token) {
        return true;
    } else {
        return false;
    }
}

export function protegerRutas(config) {
    const rutaActual = window.location.pathname;

    const esRutaProtegida = config.rutasProtegidas.includes(rutaActual);

    const usuarioAutenticado = estasRegistrado();

    if (esRutaProtegida && !usuarioAutenticado) {
        window.location.href = config.rutaLogin;
    }
}
