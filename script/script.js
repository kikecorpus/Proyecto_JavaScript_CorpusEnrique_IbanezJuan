//creacion de sistema de informacion 

async function fetchLogin(){


const respuesta = await fetch("https://68a35617c5a31eb7bb1ff133.mockapi.io/Academiaswbar400/usuarios", {method: "GET",
"headers": {
    "Content-Type": "application/json"
}
});

let dataLogin = await respuesta.json();
return dataLogin
}

async function usuarios() {
    
    let dataLogin = await fetchLogin()
console.log(dataLogin)

let listaEstudiantes = dataLogin.filter(usuario => usuario.tipo === "estudiante")

console.log(listaEstudiantes)


let listaDocentes = dataLogin.filter(usuario => usuario.tipo === "docente")
console.log(listaDocentes)

let listaAdministradores = dataLogin.filter(usuario => usuario.tipo === "administrador")
console.log(listaAdministradores)

}





//algoritmo
usuarios()


