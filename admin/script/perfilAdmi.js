
document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
const listaAdministradores = JSON.parse(localStorage.getItem("usuario"));
console.log(listaAdministradores)
//cuadros de informacion

let cuadroFPerfil = document.getElementById("fotoPerfil");



//creacion de sistema de informacion 
    //link api respuesta completa 

  // Funciones de Fetch

    try {

        cuadroFPerfil.innerHTML = `
          <div><img class="fp" src="${listaAdministradores.foto}" width="200" style="border-radius: 50%;" ">
          </div>
          
          <div>
            <p> Nombre: ${listaAdministradores.nombre} </p>
            <p> Usuario: ${listaAdministradores.usuario} </p>
            <p> Rol: ${listaAdministradores.rol}</p>
          </div>
        `;


      
    } catch (error) {
      console.error("Error al traer usuarios:", error);
    
    }

});






