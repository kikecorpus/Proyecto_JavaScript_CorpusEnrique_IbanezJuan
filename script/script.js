

document.addEventListener('DOMContentLoaded', async() => {

//varibles globales
    //Data
    
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


  // Funciones de Fetch

  async function fetchEstudiantes() {
        const res = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/usuarios", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        listaEstudiantes = await res.json();

        console.log(listaEstudiantes)
       
    }   
  
  async function fetchDocentes() {
        const res = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/docentes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        listaDocentes = await res.json();

        console.log(listaDocentes)
       
    }   

    async function fetchAdmin() {
        const res = await fetch("https://68aab3e1909a5835049ccc4f.mockapi.io/administradores", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        listaAdministradores = await res.json();

        console.log(listaAdministradores)
       
    } 

  //login 

async function login(){

    if (listaEstudiantes.length === 0) {
      await fetchData();
    }

    perfil = inputTipoUsuario.value;
    let usuario = inputUsuario.value;
    let contrasena = inputContrasena.value;
    

    if (perfil === "1") {
      usuarioEncontrado = listaAdministradores.find(u => u.usuario === usuario && u.contrasena === contrasena);

    
        //validacion
        if (usuarioEncontrado) {

            localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
            window.location.href = `../admin/panel.html`; 
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
    window.location.href = '../pages/panel.html';
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
    }
    else if (perfil === "Selecciona Tipo de Usuario") {
    alert("Por favor selecciona un tipo de usuario");
    return;
}

 }

//algoritmo

await fetchEstudiantes();
await fetchAdmin();
await fetchDocentes();

botonIngresar.addEventListener("click",login)

});






