const arrayGrillaA = []

for(let i = 0; i < 6; i++) {
let valor = Math.floor(Math.random() * (7 - 1) ) + 1;

    while(arrayGrillaA.includes(valor)) {
        valor = Math.floor(Math.random() * (7 - 1) ) + 1;
    }

arrayGrillaA.push(valor)
}

const arrayGrillaB = []

for(let i = 0; i < 6; i++) {
    let valor = Math.floor(Math.random() * (7 - 1) ) + 1;
    
        while(arrayGrillaB.includes(valor)) {
            valor = Math.floor(Math.random() * (7 - 1) ) + 1;
        }
    
    arrayGrillaB.push(valor)
    }

const arrayGrillaSuma = arrayGrillaA.concat(arrayGrillaB)

const m = 3;
const n = 4;

const arrayGrilla = []

for (let i = 0; i < 3; i++) {
    const arrayMini = arrayGrillaSuma.splice(0, 4)
    arrayGrilla.push(arrayMini)
} 

console.log(arrayGrilla)


const grillaX = [["x","x","x","x"],["x","x","x","x"],["x","x","x","x"]]

let coordenadas = prompt(`elija coordenadas\n ${grillaX[0].join(" ")}\n ${grillaX[1].join(" ")}\n ${grillaX[2].join(" ")}`)

let arrayPrimero = coordenadas.split(" ") 
let opcion1 = arrayGrilla[arrayPrimero[0]][arrayPrimero[1]]
let opcion2 = arrayGrilla[arrayPrimero[2]][arrayPrimero[3]]

let reemplazo1 = grillaX[arrayPrimero[0]][arrayPrimero[1]]
let reemplazo2 = grillaX[arrayPrimero[2]][arrayPrimero[3]]

console.log(arrayGrilla[arrayPrimero[0]][arrayPrimero[1]])
console.log(arrayGrilla[arrayPrimero[2]][arrayPrimero[3]])



//grillaX cambia la posicion reemplazo1 por opcion1
//grillaX cambia la posicion reemplazo2 por opcion2

grillaX[arrayPrimero[0]].splice(arrayPrimero[1],1,opcion1)
grillaX[arrayPrimero[2]].splice(arrayPrimero[3],1,opcion2)
console.log(grillaX)



// to do : if comparacion, las coordenadas corregidas, guardar el array nuevo dps de la comparacion si es correcto., opcion de 5 intentos, ver de hacer bucles para ahorrar codigo