
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
        window.location.href = curso.url;
      });


        tablaCursos.appendChild(filaCurso);
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

//algoritmo

await fetchCursos();
listadoCursos()
verGrafica()

});






