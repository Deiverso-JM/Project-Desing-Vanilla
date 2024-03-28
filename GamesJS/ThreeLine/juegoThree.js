//Variables
const contenedor = document.querySelector("#container");
const titulo = document.querySelector("#jugador");

//Seleccion de objeto
let selection = "X";
let cont = 0; //Solucion provicional

eventos();
function eventos() {
    document.addEventListener("DOMContentLoaded", () => {
        contenedor.addEventListener("click", (e) => {
            if (e.target.id <= 9 || e.target.id > 0) {
                cambioOpcion(e.target.id);
            } else {
                mensajeG("Seleciona un recuadro", "error");
            }
           
        });
    });
}

//CAMBIO DE OPCIONES
function cambioOpcion(id) {
    selection = selection === "X" ? "C" : "X";
    agregarElemento(selection, selection, id);
}

//AGREGAR ELEMENTOS
function agregarElemento(img, descripcion, id) {
    //Variables
    let cajaHija = document.getElementById(id);

    if (cajaHija.childElementCount > 0) {
        mensajeG("Casilla No disponible", "error");
        return;
    }

    //Elemento
    const simbol = document.createElement("img");

    //Atributos
    simbol.src = `./Img/${img}.png`;
    simbol.alt = descripcion;
    cajaHija.alt = descripcion;
    simbol.id = id;

    //Agregar elementos
    cajaHija.appendChild(simbol);

    //Validacion
    validarGanador(descripcion);
    titulo.textContent = titulo.textContent === "#1" ? "#2" : "#1";



}

//Funcion Mensaje;
function mensajeG(mensaje, estado) {
    const info = document.createElement("h2");
    info.textContent = mensaje;

    contenedor.after(info);

    if (estado === "error") {
        info.className =
            "text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center mt-4";
        setTimeout(() => {
            info.remove();
        }, 2500);
    } else if (estado === "win") {
        info.className =
            " p-2 text-center mt-2 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600";
    }
}



//     mensajeG("Empate", "error");
//     window.location.reload();
// }

function validarGanador(simbolo) {
    


    const lineasGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    for (const linea of lineasGanadoras) {
        const [a, b, c] = linea;
        if (
            contenedor.children[a].alt === simbolo &&
            contenedor.children[b].alt === simbolo &&
            contenedor.children[c].alt === simbolo
        ) {
            
            mensajeG(`Gana el jugador ${titulo.textContent}`, "win");
             setTimeout(() => {
                window.location.reload();
            }, 2500);

            return true;
            
        }

        
      
    }

    cont++;
    console.log(cont)
   if(cont === 9){
    mensajeG("Empate", 'error')
    return setTimeout(() => {
        window.location.reload();
    }, 2500);

   }

   
}

