
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data

let listaDocentes = [];

//cuadros de informacion

let cuadroFPerfil = document.getElementById("fotoPerfil");

let cuadroInfoP = document.getElementById("infoPerfil")

const params = new URLSearchParams(window.location.search);
  let docenteId = params.get("id");

//creacion de sistema de informacion 
    //link api respuesta completa 

let url=  "https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/docentes";

  // Funciones de Fetch

  async function fetchDocente() {
        const res = await fetch(`${url}/${docenteId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        listaDocentes= await res.json();

        console.log(listaDocentes)

    }   

await fetchDocente();

    try {
         console.log(listaDocentes)
        cuadroFPerfil.innerHTML = `
          <div><img class="fp" src="${listaDocentes.foto}" width="200" style="border-radius: 50%;" ">
          </div>
          
          <div>
            <p> Nombre: ${listaDocentes.nombre} </p>
            <p> Usuario: ${listaDocentes.usuario} </p>
            <p> Fecha de inicio: ${listaDocentes.fechaInicio}</p>
            <p> Estado: ${listaDocentes.estado}</p>
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
             <td>${listaDocentes.cursosACargo[0]}, ${listaDocentes.cursosACargo[1]}</td>
              
              <td>30</td>
              <td>6</td>
                
            </tbody>
             
              
            </table>
         
        
        `

  
    } 
    
    catch (error) {
      console.error("Error al traer usuarios:", error);
    }


});






