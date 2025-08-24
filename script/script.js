

document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
let data= []
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
  
  //login 

async function login(){

    if (listaEstudiantes.length === 0) {
      await cargarUsuarios();
    }

    perfil = inputTipoUsuario.value;
    let usuario = inputUsuario.value;
    let contrasena = inputContrasena.value;


    if (perfil === "1") {
      usuarioEncontrado = listaAdministradores.find(u => u.usuario === usuario && u.contrasena === contrasena);
    
        //validacion
        if (usuarioEncontrado) {
        console.log("credenciales incorrecta")
        window.location.href = "../admin/panel.html";
            console.log("ingreso exitoso")
        }
        else {
        console.log("Credenciales incorrectas");
        };
    }
    
    else if (perfil === "2") { 
      usuarioEncontrado = listaDocentes.find(u => u.usuario === usuario && u.contrasena === contrasena);

      //validacion
    if (usuarioEncontrado) {
    console.log("credenciales incorrecta")
    window.location.href = "../pages/panel.html";
        console.log("ingreso exitoso")
    }
     else {
      console.log("Credenciales incorrectas");
    };


    } 
    
    else if (perfil === "3") { 
      usuarioEncontrado = listaEstudiantes.find(u => u.usuario === usuario && u.contrasena === contrasena);

      //validacion
    if (usuarioEncontrado) {
    console.log("credenciales incorrecta")
    window.location.href = "../pages/panel.html";
        console.log("ingreso exitoso")
    }
     else {
      console.log("Credenciales incorrectas");
    };
    };

 }

//algoritmo

await fetchData();
botonIngresar.addEventListener("click",login)

});






