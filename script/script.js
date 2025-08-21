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


let dataLogin = await fetchLogin()
console.log(dataLogin)