
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let cursos = [];

    //tablas
let tablaCursos = document.getElementById("tablaCursos");
    //grafica panel
const canvas = document.getElementById("grafica");
let  contexto2D = canvas.getContext("2d");

//creacion de sistema de informacion 
    //link api respuesta completa 

const url=  "https://68aab3e1909a5835049ccc4f.mockapi.io/cursos";

  // Funciones de Fetch

  async function fetchCursos() {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        cursos = await res.json();

        console.log(cursos);


    }   


function listadoCursos(){

    try {
     
      cursos.forEach((curso, index) => {
    const filaCurso = document.createElement("tr");
        console.log(curso)
        filaCurso.innerHTML = `
          <td> ${index + 1}</td>
          <td><img src="${curso.foto}" width="30"></td>
           <td>${curso.nombre}</td>
          <td>${curso.docente}</td>
          <td>${curso.categoria}</td>
          <td><img src="../../recursos/img/componentes/arrow-right-square-fill.svg" alt="" class="botonFlecha"></td>
          
        `;
        
      const flecha = filaCurso.querySelector(".botonFlecha");
      flecha.addEventListener("click", () => {
        window.location.href =  `./cursos/modeloC.html?id=${curso.id}`;
      });


        tablaCursos.appendChild(filaCurso);
      });
    } catch (error) {
      console.error("Error al traer usuarios:", error);
    }
  
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

//algoritmo

await fetchCursos();
listadoCursos();
verGrafica();
modalCrearCurso();

});






