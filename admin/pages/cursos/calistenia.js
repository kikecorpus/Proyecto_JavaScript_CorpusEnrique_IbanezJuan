
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let cursos = [];
let filaModulo = ""
let modulos =[]
    //tablas
let tablaLecciones = document.getElementById("tablaLecciones");
let contenedorModulos = document.getElementById("contenedorModulos")

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

    function listadoModulo(){

      const calistenia = cursos[0];
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
            listadoLecciones(modulo);
        });

        contenedorModulos.appendChild(filaModulo);
        
      });

  
    }

    function listadoLecciones(modulo) {
    // Limpiar tabla antes de actualizar
    tablaLecciones.innerHTML = `
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
        tablaLecciones.appendChild(fila);
    });
}
//algoritmo

await fetchCursos();
listadoModulo();

});






