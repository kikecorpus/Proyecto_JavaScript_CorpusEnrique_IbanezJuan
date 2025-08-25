
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let data= []
let listaAdministradores = [];
let listaEstudiantes = [];
let listaDocentes = [];

//cuadros de informacion

let cuadroFPerfil = document.getElementById("fotoPerfil");

let cuadroInfoP = document.getElementById("infoPerfil")


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
     
      listaDocentes.forEach((docente) => {


        console.log(docente)
        cuadroFPerfil.innerHTML = `
          <div><img class="fp" src="${docente.foto}" width="200" style="border-radius: 50%;" ">
          </div>
          
          <div>
            <p> Nombre: ${docente.nombre} </p>
            <p> Usuario: ${docente.usuario} </p>
            <p> Fecha de inicio: ${docente.fechaInicio}</p>
            <p> Estado: ${docente.estado}</p>
          </div>


        
        `;

        cuadroInfoP.innerHTML= `
         <table class="table table-striped table-hover">
            
            <thead>
              <tr>
                <th>cursos</th>
                <th>Estudiantes</th>
                <th>Lecciones</th>
              </tr>
            </thead>

            <tbody id="tablaCursos">
             <td>${docente.cursosACargo[0]}, ${docente.cursosACargo[1]}</td>
              
              <td>30</td>
              <td>6</td>
                
            </tbody>
             
              
            </table>
         
        
        `
        
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



//algoritmo

await fetchData();
listadoDocentes()
verGrafica()

});






