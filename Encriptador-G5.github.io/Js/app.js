//Variables

//Text area
const textoRecibido = document.querySelector("#encriptacion");
const mensajeTransformado = document.querySelector("#Desencriptar");

//Botones
const bottonEncriptar = document.querySelector(".btn_buttons_en");
const bottonDesencriptar = document.querySelector(".btn_buttons_des");
const bottonBorrar = document.querySelector(".btn_buttons_borrar");
const bottonCopiar = document.querySelector(".btn_buttons_copiar");




//Condiciones
const caracteresEncriptados = ["e", "i", "a", "o", "u"];
const caracteresSeleccinados = ["enter", "imes", "ai", "ober", "ufat"];

//Eventos
escuchadorEventos();

function escuchadorEventos() {
    bottonEncriptar.addEventListener("click", () => {
        nuevoTexto = textoRecibido.value.toLowerCase();
        encriptar(nuevoTexto);
    });

    bottonDesencriptar.addEventListener("click", () => {
        nuevoTexto = textoRecibido.value.toLowerCase();
        desencriptar(nuevoTexto);
    });

    bottonBorrar.addEventListener("click", () => {
        textoRecibido.value = "";
        mensajeTransformado.textContent = "";
    });

    
    bottonCopiar.addEventListener("click", copy);
}

//Funciones

function encriptar(texto) {
    let reemplazarTexto = texto;
    for (let i = 0; i < caracteresEncriptados.length; i++) {
        // const regex = new RegExp(caracteresEncriptados[i], "g");
        reemplazarTexto = reemplazarTexto.replaceAll(caracteresEncriptados[i],caracteresSeleccinados[i]);
    }

    Agregar(reemplazarTexto);
}

function desencriptar(texto) {
    let reemplazarTexto = texto;
    for (let i = 0; i < caracteresEncriptados.length; i++) {
        // const regex = new RegExp(caracteresSeleccinados[i], "g");
        reemplazarTexto = reemplazarTexto.replaceAll(caracteresSeleccinados[i],caracteresEncriptados[i]);
    }

    Agregar(reemplazarTexto);

    console.log(reemplazarTexto);
}

function Agregar(textoListo) {
    //Limpiamos primero
    mensajeTransformado.textContent = "";
    mensajeTransformado.textContent = textoListo;
}

function copy(){

    let copyText = document.getElementById("Desencriptar");
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");

};