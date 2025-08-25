
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let estudiante = [];
//cuadros de informacion

let cuadroFPerfil = document.getElementById("fotoPerfil");



//creacion de sistema de informacion 
    //link api respuesta completa 

  // Funciones de Fetch

  const params = new URLSearchParams(window.location.search);
  let docenteId = params.get("id");

  let docenteId = docente.id

  async function fetchAdmin() {
        const res = await fetch(`https://68aab3e1909a5835049ccc4f.mockapi.io/administradores/${docenteId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        listaAdministradores = await res.json();

        console.log(listaAdministradores)
       
    } 

 

  await fetchEstudiantes();

    try {

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
      
    } catch (error) {
      console.error("Error al traer usuarios:", error);
    }
  










});






