
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let cursos = [];
let filaModulo = ""
let modulos =[]


  //tablas Street Workout
let tablaLeccionesSw = document.getElementById("tablaLeccionesSw");
let contenedorModulosSw = document.getElementById("contenedorModulosSw")



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

    //modulos y lecciones

 
    //streetWorkout
    function listadoModuloSW(){

      const calistenia = cursos[1];
      console.log(calistenia);
      modulos = calistenia.modulos;
      console.log(modulos); 
      modulos.forEach(modulo =>  {
       
        filaModulo = document.createElement("div");

        filaModulo.classList.add("nav-link")

        console.log(modulo);

        filaModulo.innerHTML = `
          
            <p>${modulo.nombre}</p>
        `;

        filaModulo.addEventListener("click", () => {
            listadoLeccionesSw(modulo);
        });

        contenedorModulosSw.appendChild(filaModulo);
        
      });

  
    }
        function listadoLeccionesSw(modulo) {

      tablaLeccionesSw.innerHTML = `
        <tr>
        
        </tr>
    `;

    modulo.lecciones.forEach((leccion, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${leccion.nombre}</td>
            <td>${leccion.fechaInicio}</td>
            <td>${leccion.fechaFin}</td>
        `;
        tablaLeccionesSw.appendChild(fila);
    });
}



//algoritmo

await fetchCursos();
listadoModuloSW(); 
;
});






