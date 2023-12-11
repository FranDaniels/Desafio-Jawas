export function cabecera() {
    document.getElementById("cabecera").innerHTML =
        `
        <header>
            <a href="../inicio/inicio.html">Inicio</a>
            <a href="../joya/joya.html"><p>Joyas</p></a>
            <a href="../receta/receta.html"><p>Recetas</p></a>
            <a href="../donar/donar.html"><p>Donar</p></a>
            <a href="../perfil/perfil.html"><p>Perfil</p></a>
        </header>
    `;
}

export function formProfile() {
    let newProfile = document.createElement("div");
  
    newProfile.innerHTML = `<form class="row g-3">
      <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="name" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Apellidos</label>
    <input type="text" class="form-control" id="surname" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Nickname</label>
    <div class="input-group">
        <span class="input-group-text" id="nickname">@</span>
        <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
      </div>
  </div>
  <div class="col-md-6">
      <label for="validationDefault03" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" required>
  </div>
  <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
  </form>`;
    document.body.appendChild(newProfile);
  }