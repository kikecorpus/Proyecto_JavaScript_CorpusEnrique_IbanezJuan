

document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data

let listaEstudiantes = [];

    //tablas
let tablaEstudiante = document.getElementById("tablaEstudiantes");
    //grafica panel
const canvas = document.getElementById("grafica");
let  contexto2D = canvas.getContext("2d");

//creacion de sistema de informacion 
    //link api respuesta completa 


  // Funciones de Fetch
async function fetchEstudiantes() {
        const res = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/usuarios", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        listaEstudiantes = await res.json();

        console.log(listaEstudiantes)
       
    }  

function estudiantesInscritos(){

    try {
     
      listaEstudiantes.forEach((usuario, index) => {
    const filaEstudiante = document.createElement("tr");

        filaEstudiante.innerHTML = `
          <td> ${index + 1}</td>
          <td><img src="${usuario.foto}" width="30"></td>
           <td>${usuario.nombre}</td>
          <td>${usuario.identificacion}</td>
          <td>Estudiante</td>
          <td>${usuario.usuario}</td>
        `;

        tablaEstudiante.appendChild(filaEstudiante);
      });
    } catch (error) {
      console.error("Error al traer usuarios:", error);
    }
  
}

//graficas
function verGrafica(){

    const inscripciones = [3, 5, 7, 15];
    const meses = ["May", "Jun",  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const ancho = canvas.width;
    const alto = canvas.height;
    const grosorDeBarra = ancho / inscripciones.length - 5;

    inscripciones.forEach((valor, i) => {
      let  x = i * (grosorDeBarra + 5);
      let  h = valor * 5;
      let  y = alto - h;

    contexto2D.fillStyle = "#777272ff";
    contexto2D.fillRect(x, y, grosorDeBarra, h);

    contexto2D.fillStyle = "#ffffffff";
    contexto2D.font = "10px Arial";
    contexto2D.fillText(meses[i], x + grosorDeBarra / 4, alto - 5);

    contexto2D.fillStyle = "#f3c548ff";
    contexto2D.fillText(valor, x + ancho / 10, y -5);
  })
}


function modalCrearCurso(){

 

 let botonCrear = document.getElementById("crearCurso");
 let modal = document.getElementById("dashboard");

 botonCrear.addEventListener("click", (e) => { 

  console.log(botonCrear)
  
console.log(e)

botonCrear.disabled= true; 


  modal.innerHTML= `
  
<!-- Modal -->

<h1 class="display-6 text-center mb-4">Registro de Curso</h1>

<form id="formRegistroCurso" class="container">
  <div class="row g-3">

    <!-- Nombre -->
    <div class="col-md-12">
      <label for="nombreCurso" class="form-label">Nombre del curso</label>
      <input type="text" id="nombreCurso" class="form-control" placeholder="Ej: Calistenia" required />
    </div>

    <!-- Categoría -->
    <div class="col-md-12">
      <label for="categoriaCurso" class="form-label">Categoría</label>
      <input type="text" id="categoriaCurso" class="form-control" placeholder="Ej: Fundamentos" required />
    </div>

    <!-- Docente -->
    <div class="col-md-12">
      <label for="docenteCurso" class="form-label">Docente a cargo</label>
      <input type="text" id="docenteCurso" class="form-control" placeholder="Ej: Enrique Corpus" required />
    </div>

    <!-- Duración -->
    <div class="col-md-6">
      <label for="duracionCurso" class="form-label">Duración (horas)</label>
      <input type="number" id="duracionCurso" class="form-control" min="1" required />
    </div>

    <!-- Etiqueta -->
    <div class="col-md-6">
      <label for="etiquetaCurso" class="form-label">Etiqueta</label>
      <input type="text" id="etiquetaCurso" class="form-control" placeholder="Ej: Ciencia del Deporte" />
    </div>

    <!-- Descripción -->
    <div class="col-md-12">
      <label for="descripcionCurso" class="form-label">Descripción</label>
      <textarea id="descripcionCurso" class="form-control" rows="3" placeholder="Breve descripción del curso" required></textarea>
    </div>

    <!-- Foto -->
    <div class="col-md-12">
      <label for="fotoCurso" class="form-label">Foto (URL)</label>
      <input type="url" id="fotoCurso" class="form-control" placeholder="https://..." />
    </div>

    <!-- Botones -->
    <div class="col-12 d-flex justify-content-between mt-4">
      <button type="reset" class="btn btn-secondary">Cancelar</button>
      <button type="submit" class="btn btn-warning">Registrar</button>
    </div>
  </div>
</form>


  `
  
const form = document.getElementById("formRegistroCurso");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // 1. Capturar datos
      const nuevoCurso = {
        nombre: document.getElementById("nombreCurso").value,
        categoria: document.getElementById("categoriaCurso").value,
        docente: document.getElementById("docenteCurso").value,
        duracion: document.getElementById("duracionCurso").value,
        etiqueta: document.getElementById("etiquetaCurso").value,
        descripcion: document.getElementById("descripcionCurso").value,
        foto: document.getElementById("fotoCurso").value || "https://via.placeholder.com/300", // default si no pone foto
        fechaInicio: new Date().toISOString().split("T")[0], // fecha de hoy
        estado: "activo",
        estudiantes: 0,
        modulos: [] // arranca vacío
      };

      try {
        // 2. Enviar a la API
        const response = await fetch("https://68aab3e1909a5835049ccc4f.mockapi.io/cursos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(nuevoCurso)
        });

        if (response.ok) {
          alert("Curso creado con éxito ");
          form.reset();
          // Opcional: redirigir al listado
          window.location.href = "./cursos.html";
        } else {
          alert("Error al registrar curso ");
        }
      } catch (error) {
        console.error("Error en el registro:", error);
        alert("No se pudo conectar con el servidor ");
      }
    });
  });

}


function modalCrearEstudiantes(){

 

 let botonCrear = document.getElementById("crearEstudiante");
 let modal = document.getElementById("dashboard");

 botonCrear.addEventListener("click", (e) => { 

  console.log(botonCrear)
  
console.log(e)

botonCrear.disabled= true; 


  modal.innerHTML= `
  
<!-- Modal -->

<h1 class="display-6 text-center mb-4">Inscripción estudiante</h1>

<form id="formInscripcionEstudiante" class="container">
  <div class="row g-3">
    
    <!-- nommbre -->
    <div class="col-md-12">
      <label for="nombre" class="form-label">Nombre del estudiante</label>
      <input 
        type="text" 
        id="nombre" 
        name="nombre" 
        class="form-control" 
        placeholder="Ingrese nombre completo" 
        required
      />
    </div>

    <!-- correo -->
    <div class="col-md-12">
      <label for="correo" class="form-label">Correo electrónico</label>
      <input 
        type="email" 
        id="correo" 
        name="correo" 
        class="form-control" 
        placeholder="correo@ejemplo.com" 
        required
      />
    </div>

    <!-- identificación -->
    <div class="col-md-12">
      <label for="identificacion" class="form-label">Cédula/Tarjeta de identidad</label>
      <input 
        type="text" 
        id="identificacion" 
        name="identificacion" 
        class="form-control" 
        placeholder="Número de documento" 
        required
      />
    </div>

    <!-- contraseña -->
    <div class="col-md-12">
      <label for="contrasena" class="form-label">Contraseña</label>
      <input 
        type="password" 
        id="contrasena" 
        name="contrasena" 
        class="form-control" 
        placeholder="Cree una contraseña" 
        required
      />
    </div>

    <!-- foto -->
    <div class="col-md-12">
      <label for="foto" class="form-label">Foto (URL)</label>
      <input 
        type="url" 
        id="foto" 
        name="foto" 
        class="form-control" 
        placeholder="https://..."
      />
    </div>

    <!-- botoness -->
    <div class="col-12 d-flex justify-content-between mt-4">
      <button type="reset" class="btn btn-secondary">Cancelar</button>
      <button type="submit" class="btn btn-warning">Aceptar</button>
    </div>
  </div>
</form>



    
  `

  const formularioEstudiante = document.getElementById("formInscripcionEstudiante");

  formularioEstudiante.addEventListener("submit", async (e) => {
    e.preventDefault();

    //formulario
    const nuevoUsuario = {
      nombre: document.getElementById("nombre").value,
      usuario: document.getElementById("correo").value,
      contrasena: document.getElementById("contrasena").value,
      foto: document.getElementById("foto").value || "https://randomuser.me/api/portraits/lego/1.jpg",
      identificacion: document.getElementById("identificacion").value,
      cursosInscritos: [],
      cursosCompletados: []
    };

    try {
      const res = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario)
      });

      const data = await res.json();
      alert("Estudiante registrado con éxito: " + data.nombre);

      formularioEstudiante.reset(); 
    } catch (err) {
      console.error("Error:", err);
      alert("Ocurrió un error al registrar el estudiante");
    }
  })
 });

}

function modalCrearDocente(){

 

 let botonCrear = document.getElementById("crearDocente");
 let modal = document.getElementById("dashboard");

 botonCrear.addEventListener("click", (e) => { 

  console.log(botonCrear)
  
console.log(e)

botonCrear.disabled= true; 


  modal.innerHTML= `
  
<!-- Modal -->

<form id="formRegistroDocente" class="container">
  <div class="row g-3">

    <!-- Nombre -->
    <div class="col-md-12">
      <label for="nombreDocente" class="form-label">Nombre del docente</label>
      <input type="text" id="nombreDocente" name="nombreDocente" class="form-control" placeholder="Ingrese nombre completo" required />
    </div>

    <!-- Correo -->
    <div class="col-md-12">
      <label for="correoDocente" class="form-label">Correo electrónico</label>
      <input type="email" id="correoDocente" name="correoDocente" class="form-control" placeholder="correo@ejemplo.com" required />
    </div>

    <!-- Contraseña -->
    <div class="col-md-12">
      <label for="contrasenaDocente" class="form-label">Contraseña</label>
      <input type="password" id="contrasenaDocente" name="contrasenaDocente" class="form-control" placeholder="Cree una contraseña" required />
    </div>

    <!-- Foto -->
    <div class="col-md-12">
      <label for="fotoDocente" class="form-label">Foto (URL)</label>
      <input type="url" id="fotoDocente" name="fotoDocente" class="form-control" placeholder="https://..." />
    </div>

    <!-- Cursos a cargo -->
    <div class="col-md-12">
      <label for="cursosACargo" class="form-label">Cursos a cargo</label>
      <input type="text" id="cursosACargo" name="cursosACargo" class="form-control" placeholder="Ej: Calistenia, Yoga, Pilates" />
      <small class="text-muted">Escribe los cursos separados por coma</small>
    </div>

    <!-- Botones -->
    <div class="col-12 d-flex justify-content-between mt-4">
      <button type="reset" class="btn btn-secondary">Cancelar</button>
      <button type="submit" class="btn btn-warning">Registrar</button>
    </div>
  </div>
</form>

  `

  const formDocente = document.getElementById("formRegistroDocente");

  formDocente.addEventListener("submit", async (e) => {
    e.preventDefault();

    const hoy = new Date();
    const fechaInicio = `${String(hoy.getDate()).padStart(2, "0")}/${String(hoy.getMonth() + 1).padStart(2, "0")}/${hoy.getFullYear()}`;

    const nuevoDocente = {
      nombre: document.getElementById("nombreDocente").value,
      usuario: document.getElementById("correoDocente").value,
      contrasena: document.getElementById("contrasenaDocente").value,
      foto: document.getElementById("fotoDocente").value || "https://randomuser.me/api/portraits/men/44.jpg",
      cursosACargo: document.getElementById("cursosACargo").value.split(",").map(c => c.trim()).filter(c => c !== ""),
      url: "./perfilDocente.html",   
      fechaInicio: fechaInicio,   
      estado: "activo"              
    };

    try {
      const res = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/docentes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoDocente)
      });


      const data = await res.json();
      alert(" Docente registrado con éxito: " + data.nombre);

      formDocente.reset();
    } catch (err) {
      console.error(" Error:", err);
      alert("Ocurrió un error al registrar el docente");
    }
  });

 });

}


let modoOscuro = document.getElementById("modoOscuro");
let modoClaro = document.getElementById("modoClaro");


modoOscuro.addEventListener("click", () => {
  document.body.classList.add("modoOscuro"); 
  modoOscuro.style.opacity = "0";
  modoClaro.style.display = "block";
});

modoClaro.addEventListener("click", () => {
  document.body.classList.remove("modoOscuro"); 
  modoOscuro.style.opacity = "1";
  modoClaro.style.display = "none";
});


//algoritmo

await fetchEstudiantes(); 
estudiantesInscritos()
verGrafica();
modalCrearCurso();
modalCrearEstudiantes();
modalCrearDocente()

});






