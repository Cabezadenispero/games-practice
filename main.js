
// Replicar el juego de la memoria. El juego consiste en cartas o items ocultos dispuestos en una grilla 2d al azar. Por turno, la jugadora ingresa las coordenadas de dos items a descubrir. Esos items se muestran, si son iguales quedan descubiertos, sino se vuelven a ocultar (por lo tanto todo item tiene su par),y se pierde un intento. El juego termina cuando se descubren todos los items o se quedan sin intentos (5 por defecto).
// Se debe validar la jugada para ver si es una casilla válida, si no lo es aviasr y no contarlo como intento
// Se deben usar las coordenadas pidiendo (X, Y), y teniendo el punto de origen (1,1) abaja a la izquierda (3,2 significa 3er ítem a la derecha y 2do hacia arriba)

// Ejemplo:
// // Ingrese coordenadas de 2 items a descubrir: 1,1 | 3,2

const primerArray = []

for(let i = 0; i < 6; i++) {
let valor = Math.floor(Math.random() * (7 - 1) ) + 1;

    while(primerArray.includes(valor)) {
        valor = Math.floor(Math.random() * (7 - 1) ) + 1;
    }

primerArray.push(valor)
}

const segundoArray = []

for(let i = 0; i < 6; i++) {
    let valor = Math.floor(Math.random() * (7 - 1) ) + 1;
    
        while(segundoArray.includes(valor)) {
            valor = Math.floor(Math.random() * (7 - 1) ) + 1;
        }
    
    segundoArray.push(valor)
    }

const concatenacionArrays = primerArray.concat(segundoArray)

const grillaSecreta = []

for (let i = 0; i < 3; i++) {
    const arrayMini = concatenacionArrays.splice(0, 4)
    grillaSecreta.push(arrayMini)
} 

console.log(grillaSecreta)


const grillaAMostrar = [
    ["x","x","x","x"],
    ["x","x","x","x"],
    ["x","x","x","x"]
]

let cantidadDeIntentos = 5
let cantidadDeAciertos = 0

while(cantidadDeIntentos > 0 || cantidadDeAciertos < 6) {
    const coordenadas = prompt(`elija coordenadas\n ${grillaAMostrar[0].join(" ")}\n ${grillaAMostrar[1].join(" ")}\n ${grillaAMostrar[2].join(" ")}`)

    let arrayCoordenadas = coordenadas.split(" ") // 0 1 2 3
    let opcion1 = grillaSecreta[arrayCoordenadas[0]][arrayCoordenadas[1]]
    let opcion2 = grillaSecreta[arrayCoordenadas[2]][arrayCoordenadas[3]]

    const grillaTemporal = []

    for(let i = 0; i < grillaAMostrar.length; i++) {
        const filaGrillaTemporal = []
        for(let j = 0; j < grillaAMostrar[i].length; j++) {
            filaGrillaTemporal.push(grillaAMostrar[i][j])
        }
        grillaTemporal.push(filaGrillaTemporal)
    }
    
    grillaTemporal[arrayCoordenadas[0]].splice(arrayCoordenadas[1],1,opcion1)
    grillaTemporal[arrayCoordenadas[2]].splice(arrayCoordenadas[3],1,opcion2)

    alert(`${grillaTemporal[0].join(" ")}\n ${grillaTemporal[1].join(" ")}\n ${grillaTemporal[2].join(" ")}`)

    if (opcion1 === opcion2) {

        grillaAMostrar[arrayCoordenadas[0]].splice(arrayCoordenadas[1],1,opcion1)
        grillaAMostrar[arrayCoordenadas[2]].splice(arrayCoordenadas[3],1,opcion2)
        cantidadDeAciertos ++

    } else {
        cantidadDeIntentos--
    }
}

// to do : if comparacion, las coordenadas corregidas, guardar el array nuevo dps de la comparacion si es correcto., opcion de 5 intentos, ver de hacer bucles para ahorrar codigo

// let reemplazo1 = grillaAMostrar[arrayPrimero[0]][arrayPrimero[1]]
// let reemplazo2 = grillaAMostrar[arrayPrimero[2]][arrayPrimero[3]]

// console.log(grillaSecreta[arrayPrimero[0]][arrayPrimero[1]])
// console.log(grillaSecreta[arrayPrimero[2]][arrayPrimero[3]])

// //grillaX cambia la posicion reemplazo1 por opcion1
// //grillaX cambia la posicion reemplazo2 por opcion2