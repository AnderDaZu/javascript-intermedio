/*
    Un generator en JavaScript es una función especial que puede pausarse y reanudarse. A diferencia de una función normal, 
    que se ejecuta de principio a fin en un solo paso, un generator devuelve valores poco a poco cada vez que se le pide.

    🔹 ¿Cómo funciona?
    Los generators se crean con function* y utilizan la palabra clave yield para devolver valores sin finalizar la ejecución.

    📌 Resumen:
    - Los generators permiten pausar y reanudar funciones.
    - Se usan con function* y yield.
    - Son útiles para generar IDs, paginar datos o manejar tareas paso a paso.
*/
function cuadradoBloquante(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value**2,
            });
        }, 0 | Math.random()*1000)
    });
}

async function* generatorCuadradadoBloqueante(){
    yield await cuadradoBloquante(0);
    yield await cuadradoBloquante(1);
    yield await cuadradoBloquante(2);
    yield await cuadradoBloquante(3);
    yield await cuadradoBloquante(4);
    yield await cuadradoBloquante(5);
}


export async function executeGeneratorBloqueante() {
    let iterableGenerator = generatorCuadradadoBloqueante();
    for await (const element of iterableGenerator) {
        console.log('generator async', element);
    }
}

const cuadradoGenerator = (value) => {
    setTimeout(() => {
        return console.log('generator normal', {
            value,
            result: value**2,
        });
    }, 0 | Math.random()*1000);
}

function* generatorCuadrado() {
    yield cuadradoGenerator(0);
    yield cuadradoGenerator(1);
    yield cuadradoGenerator(2);
    yield cuadradoGenerator(3);
    yield cuadradoGenerator(4);
    yield cuadradoGenerator(5);
}

export function excuteGenerator () {
    const generator = generatorCuadrado();
    for (const element of generator) {
        
    }
}

function* barraProgreso() {
    let progreso = 0;
    while (progreso < 100) {
        progreso += 20;
        yield `Cargando... ${progreso}%`;
    }
    return "Carga completa!";
}

export function status() {
    const progreso = barraProgreso();
    for (const element of progreso) {
        console.log('estado: ', element);
    }
}
