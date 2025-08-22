

document.addEventListener('DOMContentLoaded', () => {

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
//creacion de sistema de informacion 
async function fetchLogin(){


const respuesta = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/usuarios", {method: "GET",
"headers": {
    "Content-Type": "application/json"
}
});

let dataLogin = await respuesta.json();
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

function login(){

perfil = inputTipoUsuario.value;
let usuario = inputUsuario.value;
let contrasena = inputContrasena.value;


 if (perfil === "1") {
    
    usuarioEncontrado = listaAdministradores.find(u => (u.usuario === usuario) && (u.contrasena === contrasena) )
    
    if (usuarioEncontrado) {

        console.log("ingreso exitoso")
    }

    else{
        console.log("credenciales incorrecta")
    }

 }

}

//algoritmo
usuarios();
botonIngresar.addEventListener("click",login)




});






