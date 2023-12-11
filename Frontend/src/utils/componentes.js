export function cabecera() {
  document.getElementById("cabecera").innerHTML =
      `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Joyería Jawas</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="../inicio/inicio.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../joya/joya.html">Joyas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../receta/receta.html">Recetas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../donar/donar.html">Donar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../perfil/perfil.html">
              <img src="../imagenes/icono_perfil.png" alt="Perfil" width="30" height="30">
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `;
}
