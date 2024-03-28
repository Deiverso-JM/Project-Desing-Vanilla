//Variables
const entradaNumero = document.querySelector("#entrada");
const btnStart = document.querySelector("#Start");
const contenedorResultado = document.querySelector("#Resultado");
const contenedorPrincipal = document.querySelector("#principal");
const contenedorPrevio = document.querySelector("#previa");
const loading = document.querySelector("#loading");

//Utilidades
let elNumero;

//Funciones eventos
eventos();

function eventos() {
    btnStart.addEventListener("click", () => {
        contenedorPrevio.classList.add("hidden");
        loading.classList.remove("hidden");

        setTimeout(() => {
            loading.classList.add("hidden");
            contenedorPrincipal.classList.remove("hidden");
        }, 1500);
    });

    entradaNumero.addEventListener("blur", (e) => {
        if (entradaNumero.value === "") {
            mensaje("Debes ingresar un numero :D");
        }
        const numero = parseInt(entradaNumero.value);

        if (elNumero === undefined) {
            elNumero = 1 + Math.floor(Math.random() * 1000);
            return Resultado(numero, elNumero);
        } else {
            return Resultado(numero, elNumero);
        }
    });
}

//Funciones logica
function mensaje(texto) {
    const mensaje = document.createElement("p");
    mensaje.textContent = texto;
    mensaje.classList.add(
        "text-white",
        "text-base",
        "p-2",
        "font-semibold",
        "text-center",
        "rounded-xl",
        "mt-3",
        "bg-gradient-to-r",
        "from-emerald-400",
        "to-cyan-400"
    );
    contenedorResultado.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 1000);
}

function Resultado(numeroHuman, numeroMachine) {
    console.log(numeroMachine);
    if (numeroHuman === numeroMachine) {
        gifStatus("|GANASTE|", "https://giphy.com/embed/100QoSU9uTFU64");
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    } else {
        //Validaciones de menores
        if (numeroHuman < numeroMachine / 6)
            return gifStatus(
                "Estas muerto",
                "https://giphy.com/embed/xT9DPBMumj2Q0hlI3K"
            );
        if (numeroHuman < numeroMachine / 4)
            return gifStatus(
                "Estas Congelado",
                "https://giphy.com/embed/s4Bi420mMDRBK"
            );
        if (numeroHuman < numeroMachine / 2)
            return gifStatus(
                "Estas Tibio",
                "https://giphy.com/embed/WtP7eJgiLl3QP3lmVe"
            );

        if (numeroHuman < numeroMachine / 1.8)
            return gifStatus(
                "Estas un poco caliente",
                "https://giphy.com/embed/sEV69eqfIjvUOgRpZ0"
            );
        if (numeroHuman < numeroMachine / 1.4)
            return gifStatus(
                "Estas aun caliente",
                "https://giphy.com/embed/k4N5AuZzd9bmo"
            );
        if (numeroHuman < numeroMachine / 1.1)
            return gifStatus(
                "Estas bastante caliente",
                "https://giphy.com/embed/LRVnPYqM8DLag"
            );
        if (numeroHuman < numeroMachine)
            return gifStatus(
                "Estas caliente caliente",
                "https://giphy.com/embed/l4FATJpd4LWgeruTK"
            );

        //Validacion de mayor
        if (numeroHuman > numeroMachine)
            gifStatus(
                "Te quemaste",
                "https://giphy.com/embed/SWj2nF5Y28RzfV3TZa"
            );
    }
}

function gifStatus(texto, url) {
    const gif = document.createElement("iframe");
    const text = document.createElement("h2");
    text.textContent = `${texto}`;
    text.classList.add(
        "text-center",
        "mt-2",
        "font-extrabold",
        "text-transparent",
        "text-5xl",
        "bg-clip-text",
        "bg-gradient-to-r",
        "from-purple-400",
        "to-pink-600"
    );

    gif.classList.add(
        "mx-auto",
        "sm:w-auto",
        "sm:h-auto",
        "lg:w-[480px]",
        "lg:h-[452px]"
    );

    gif.setAttribute("src", url);
    console.log(contenedorResultado.children.length);
    if (contenedorResultado.children.length === 0) {
        contenedorResultado.appendChild(text);
        contenedorResultado.appendChild(gif);
    } else {
    }

    if (contenedorResultado.children.length > 0) {
        text.innerHTML = `${texto}`;
        console.log("Aqui");
        contenedorResultado.replaceChild(gif, contenedorResultado.firstChild);
        contenedorResultado.replaceChild(
            text,
            contenedorResultado.lastElementChild
        );
    }
}
