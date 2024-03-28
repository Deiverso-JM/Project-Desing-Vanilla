//Variables
const opcionOne = document.querySelector("#opcionOne");
const opcionTwo = document.querySelector("#opcionTwo");
const contenedor = document.querySelector("#contenedor");

//Texto
const texto =  document.querySelector('#textChange');


//Opciones
const rock = document.querySelector("#Piedra").id;
const paper = document.querySelector("#Papel").id;
const tijereichon = document.querySelector("#Tijera").id;



//Areglo - machine
const img = ["Piedra", "Papel", "Tijera"];

Eventos();

function Eventos() {
    contenedor.addEventListener("click", (e) => {
        e.preventDefault();
        if (
            e.target.id === "Piedra" ||
            e.target.id === "Papel" ||
            e.target.id === "Tijera"
        ) {
            agregarImagen(e.target.id);
        }
    });
}

function agregarImagen(id) {

    const selectOne = id;
    if (opcionOne.children.length === 0) {
        const opcion = document.createElement("img");
        opcion.setAttribute("id", `${id}`);
        opcion.classList.add("h-40");
        opcion.setAttribute("src", `./Img/${id}.png`);
        opcionOne.appendChild(opcion);
        texto.textContent = 'Maquina escogiendo...'
    }

    setTimeout(() => {
        if (opcionTwo.children.length === 0) {
            const number = Math.floor(Math.random() * 3);
            const opcion = document.createElement("img");
            opcion.setAttribute("id", `${id}`);
            opcion.classList.add("h-40");
            opcion.setAttribute("src", `./Img/${img[number]}.png`);
            opcionTwo.appendChild(opcion);
            Resul(selectOne, number);
        }
    }, 2500);



    // texto.textContent = 'Selecciona una opcion';
}

function clearChild() {
    let childOne = opcionOne.firstChild;
    if (childOne) {
        opcionOne.removeChild(childOne);
    }

    let childTwo = opcionTwo.firstChild;
    if (childTwo) {
        opcionTwo.removeChild(childTwo);
    }
}

function Resul(opcionOne, opcionTwo) {
    //Validaciones
    if (opcionOne == img[opcionTwo]) {
        Swal.fire("Empate!", "You clicked the button!", "info");
    } else if (opcionOne == "Tijera") {
        if (img[opcionTwo] == "Papel")
            Swal.fire("Ganaste!", "You clicked the button!", "success");
        if (img[opcionTwo] == "Piedra")
            Swal.fire("Perdiste!", "You clicked the button!", "error");
    } else if (opcionOne == "Papel") {
        if (img[opcionTwo] == "Tijera")
            Swal.fire("Perdiste!", "You clicked the button!", "error");
        if (img[opcionTwo] == "Piedra")
            Swal.fire("Ganaste!", "You clicked the button!", "success");
    } else if (opcionOne == "Piedra") {
        if (img[opcionTwo] == "Papel")
            Swal.fire("Perdiste!", "You clicked the button!", "error");

        if (img[opcionTwo] == "Tijera")
            Swal.fire("Ganaste!", "You clicked the button!", "success");
    }

    texto.textContent = 'Reseteando...'
    setTimeout(() => {
        clearChild();
        texto.textContent = 'Selecciona una opcion'
    }, 4000);
}
