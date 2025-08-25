
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let data= []
let listaAdministradores = [];
let listaEstudiantes = [];
let listaDocentes = [];

    //tablas
let tablaCursos = document.getElementById("tablaCursos");
    //grafica panel
const canvas = document.getElementById("grafica");
let  contexto2D = canvas.getContext("2d");

//creacion de sistema de informacion 
    //link api respuesta completa 

const url=  "https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/usuarios";

  // Funciones de Fetch

  async function fetchData() {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        data = await res.json();

        console.log(data)


        listaAdministradores = data[0].administradores;
        console.log(listaAdministradores);

        listaDocentes = data[0].docentes;
        console.log(listaDocentes);

        listaEstudiantes = data[0].estudiantes;
        console.log(listaEstudiantes)
    }   

function listadoDocentes(){

    try {
     
      listaDocentes.forEach((docente, index) => {
    const filaCurso = document.createElement("tr");
        console.log(docente)
        filaCurso.innerHTML = `
          <td> ${index + 1}</td>
          <td><img src="${docente.foto}" width="30"></td>
           <td>${docente.nombre}</td>
          <td>${docente.usuario}</td>
          <td>${docente.cursosACargo[0]}, ${docente.cursosACargo[1]}</td>
          <td><img src="../../../recursos/img/componentes/arrow-right-square-fill.svg" alt="" class="botonFlecha"></td>
          
        `;
        
      const flecha = filaCurso.querySelector(".botonFlecha");
      flecha.addEventListener("click", () => {
        window.location.href = docente.url;
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

await fetchData();
listadoDocentes()
verGrafica()

});






