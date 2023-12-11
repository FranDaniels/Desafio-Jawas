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

export function footer() {
  document.getElementById("footer").innerHTML =
      `
<footer class="text-center bg-body-tertiary text-muted">
  <section class="container text-center text-md-start mt-5">
    <div class="row mt-3">
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
          Productos
        </h6>
        <p>Collares</p>
        <p>Pulseras</p>
        <p>Pines</p>
        <p>Pendientes</p>
        <p>LLaveros</p>
      </div>
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold mb-4">
          Enlaces de la página
        </h6>
        <p><a class="nav-link" href="../inicio/inicio.html">Inicio</a></p>
        <p><a class="nav-link" href="../joya/joya.html">Joyas</a></p>
        <p><a class="nav-link" href="../receta/receta.html">Recetas</a></p>
        <p><a class="nav-link" href="../donar/donar.html">Donar</a></p>
      </div>
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
        <p class="fas fa-home me-3">Paseo de San Gregorio, 82-84. 13500. Puertollano.</p>
        <p class="fas fa-envelope me-3">info@example.com</p>
        <p class="fas fa-phone me-3">+34 123 45 67 89</p>
        <p class="fas fa-print me-3">+34 123 45 67 89</p>
      </div>
    </div>
  </section>

  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2023 Derechos de autor: Francisco Álvarez y Marina Laguna
  </div>
</footer>
  `;
}