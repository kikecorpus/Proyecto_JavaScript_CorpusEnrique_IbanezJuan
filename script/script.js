

document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let dataLogin = [];
let listaAdministradores = [];
let listaEstudiantes = [];
let listaDocentes = [];
let perfil = ""
let usuarioEncontrado = {}

    //login
let inputTipoUsuario = document.getElementById("floatingSelect");
let inputUsuario = document.getElementById("floatingInput");
let inputContrasena = document.getElementById("floatingPassword");
let botonIngresar = document.getElementById("ingresar");
    //tablas
let tablaEstudiante = document.getElementById("tablaEstudiantes");
    //grafica panel
const canvas = document.getElementById("grafica");
let  contexto2D = canvas.getContext("2d");

//creacion de sistema de informacion 
    //link api respuesta completa 

const mockApiBase =  "https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400";

  // --- Funciones de Fetch ---
  async function fetchEstudiantes() {
    const data = await fetch(`${mockApiBase}/estudiantes`);
    return await data.json();
  }

  async function fetchDocentes() {
    const data = await fetch(`${mockApiBase}/docentes`);
    return await data.json();
  }

  async function fetchAdministradores() {
    const data = await fetch(`${mockApiBase}/administradores`);
    return await data.json();
  }

  //login 
async function fetchLogin(){


const respuesta = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/usuarios", {method: "GET",
"headers": {
    "Content-Type": "application/json"
}
});

dataLogin = await respuesta.json();
return dataLogin;
};


async function login(){

    if (dataLogin.length === 0) {
        await usuarios();
    }

perfil = inputTipoUsuario.value;
let usuario = inputUsuario.value;
let contrasena = inputContrasena.value;


 if (perfil === "1") {
    
    usuarioEncontrado = listaAdministradores.find(u => (u.usuario === usuario) && (u.contrasena === contrasena) )
    
    if (usuarioEncontrado) {
    console.log("credenciales incorrecta")
    window.location.href = "../pages/panel.html";
        console.log("ingreso exitoso")
    }
    }

 }


function estudiantesInscritos(){

    try {
     
      listaEstudiantes.forEach((usuario, index) => {
    const filaEstudiante = document.createElement("tr");

        filaEstudiante.innerHTML = `
          <td> ${index + 1}</td>
          <td><img src="${usuario.foto}" width="30"></td>
           <td>${usuario.nombre}</td>
          <td>${usuario.identificacion}</td>
          <td>${usuario.tipo}</td>
          <td>${usuario.usuario}</td>
        `;

        tablaEstudiante.appendChild(filaEstudiante);
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

await usuarios();
estudiantesInscritos()
verGrafica()
botonIngresar.addEventListener("click",login)


});






