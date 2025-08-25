
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

function PerfilDocentes(){

    try {
     
      listaEstudiantes.forEach((estudiante) => {


        console.log(estudiante)
        cuadroFPerfil.innerHTML = `
          <div><img class="fp" src="${estudiante.foto}" width="200" style="border-radius: 50%;" ">
          </div>
          
          <div>
            <p> Nombre: ${estudiante.nombre} </p>
            <p> Usuario: ${estudiante.usuario} </p>
            <p> Fecha de inicio: ${estudiante.fechaInicio}</p>
            <p> Estado: ${estudiante.estado}</p>
          </div>
        `;

        cuadroInfoP.innerHTML= `
         <table class="table table-striped table-hover">
            
            <thead>
              <tr>
                <th>Cursos Inscritos</th>
                <th>Cursos Aprobados</th>
                <th>Lecciones</th>
              </tr>
            </thead>

            <tbody id="tablaCursos">
             <td>${estudiante.cursosInscritos}</td>
             <td>${estudiante.cursosCompletados}</td>
              <td>6</td>
              

                
            </tbody>
             
              
            </table>
         
        
        `
        
    


        tablaCursos.appendChild(filaCurso);
      });
    } catch (error) {
      console.error("Error al traer usuarios:", error);
    }
  
}



//algoritmo

await fetchData();
PerfilDocentes()
verGrafica()

});






