

document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let dataLogin = [];
let listaAdministradores = [];
let listaEstudiantes = [];
let listaDocentes = [];
let perfil = ""
let usuarioEncontrado = {}

    //elementos
let inputTipoUsuario = document.getElementById("floatingSelect");
let inputUsuario = document.getElementById("floatingInput");
let inputContrasena = document.getElementById("floatingPassword");
let botonIngresar = document.getElementById("ingresar");
let tablaEstudiante = document.getElementById("tablaEstudiantes");


//creacion de sistema de informacion 
async function fetchLogin(){


const respuesta = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/usuarios", {method: "GET",
"headers": {
    "Content-Type": "application/json"
}
});

dataLogin = await respuesta.json();
return dataLogin;
};

async function usuarios() {
    
dataLogin = await fetchLogin();
console.log(typeof(dataLogin) );

listaEstudiantes = dataLogin.filter(usuario => usuario.tipo === "estudiante");

console.log(listaEstudiantes);


listaDocentes = dataLogin.filter(usuario => usuario.tipo === "docente");
console.log(listaDocentes);

listaAdministradores = dataLogin.filter(usuario => usuario.tipo === "administrador");
console.log(listaAdministradores);

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

//algoritmo

await usuarios();
estudiantesInscritos()
botonIngresar.addEventListener("click",login)


});






