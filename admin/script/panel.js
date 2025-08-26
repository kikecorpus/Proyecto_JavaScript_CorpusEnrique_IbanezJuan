

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

<h1 class="display-6">Inscripción de leccion</h1>
  
  
    <form id="formInscripcionLeccion">
    <div class="row g-2" style="margin-left: 12px; margin-right: 12px">
      
      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">Nombre de la leccion</label>
          <input type="text" class="form-control" placeholder="Ingrese nombre de la leccion" />
        </div>
      </div>



      <div class="col-md-1">
        <div class="mb-3">
          <label class="fechita">Fecha</label>
          <input type="date" class="form-control" placeholder="Ingrese su fecha" />
        </div>
      </div>
    
      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">Cédula</label>
          <input type="number" class="form-control" placeholder="Profesor a cargo" />
        </div>
      </div>


      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">Area a tratar</label>
          <input type="text" class="form-control" placeholder="Tema a tratar" />
        </div>
      </div>

      

      <!-- Botones -->
      <button class="btn btn-warning btn-buttom-left">Cancelar</button>
      <button type="submit" class="btn btn-warning btn-buttom-right">Aceptar</button>
    </div>
  </form>


  
    
  `
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

<h1 class="display-6">Inscripción estudiante</h1>
  
  
    <form id="formInscripcionEstudiante">
    <div class="row g-2" style="margin-left: 12px; margin-right: 12px">
      
      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">Nombre del estudiante</label>
          <input type="text" class="form-control" placeholder="Ingrese nombre completo" />
        </div>
      </div>



    
      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">correo</label>
          <input type="number" class="form-control" placeholder="correo electrónico" />
        </div>
      </div>

 

      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">cedula de ciudadnia/tarjeta de identidad</label>
          <input type="text" class="form-control" placeholder="cedula de ciudadnia/tarjeta de identidad" />
        </div>
      </div>

      

      <!-- Botones -->
      <button class="btn btn-warning btn-buttom-left">Cancelar</button>
      <button type="submit" class="btn btn-warning btn-buttom-right">Aceptar</button>
    </div>
  </form>



    
  `
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

<h1 class="display-6">Inscripción estudiante</h1>
  
  
    <form id="formInscripcionEstudiante">
    <div class="row g-2" style="margin-left: 12px; margin-right: 12px">
      
      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">Nombre del estudiante</label>
          <input type="text" class="form-control" placeholder="Ingrese nombre completo" />
        </div>
      </div>



    
      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">correo</label>
          <input type="number" class="form-control" placeholder="correo electrónico" />
        </div>
      </div>

 

      <div class="col-md-12">
        <div class="mb-3">
          <label class="form-label">cedula de ciudadnia/tarjeta de identidad</label>
          <input type="text" class="form-control" placeholder="cedula de ciudadnia/tarjeta de identidad" />
        </div>
      </div>

      

      <!-- Botones -->
      <button class="btn btn-warning btn-buttom-left">Cancelar</button>
      <button type="submit" class="btn btn-warning btn-buttom-right">Aceptar</button>
    </div>
  </form>



    
  `
 });

}



//algoritmo

await fetchEstudiantes(); 
estudiantesInscritos()
verGrafica();
modalCrearCurso();
modalCrearEstudiantes();
//modalCrearDocente()

});






