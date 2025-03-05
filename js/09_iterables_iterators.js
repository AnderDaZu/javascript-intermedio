/*
    En JavaScript, los conceptos de iterable e iterator son fundamentales para trabajar con 
    estructuras de datos que se pueden recorrer (como arrays, mapas, conjuntos, etc.).

    Un iterable es cualquier objeto que tiene un método especial llamado Symbol.iterator. 
    Este método devuelve un iterator, que nos permite recorrer sus elementos uno por uno.

    Ejemplos de iterables en JavaScript:
    - Arrays ([])
    - Strings ("")
    - Map (new Map())
    - Set (new Set())
    Estos objetos se pueden recorrer con un for...of, el operador spread (...), o con métodos como Array.from().

    ---

    Ejemplo de Iterable

    const miArray = [10, 20, 30];

    for (const numero of miArray) {
        console.log(numero);
    }

    Aquí miArray es iterable porque podemos recorrerlo con for...of.

    ---

    ¿Qué es un Iterator?
    Un iterator es un objeto que sigue el protocolo de iteración. Tiene un método llamado .next(), que devuelve un objeto con:
    value: el valor actual de la iteración.
    done: true si ya terminó la iteración, false si aún quedan valores.
    Podemos obtener un iterator llamando al método Symbol.iterator de un iterable.

    ---

    Ejemplo de un Iterador

    const miArray = [10, 20, 30];
    const iterador = miArray[Symbol.iterator]();

    console.log(iterador.next()); // { value: 10, done: false }
    console.log(iterador.next()); // { value: 20, done: false }
    console.log(iterador.next()); // { value: 30, done: false }
    console.log(iterador.next()); // { value: undefined, done: true }

    Aquí, iterador.next() nos da un valor cada vez que lo llamamos, hasta que done se vuelve true.

    La diferencia principal entre un iterador manual y los métodos for, forEach, o for...of es que 
    con un iterador controlamos manualmente el proceso de iteración, mientras que con los otros métodos 
    el lenguaje se encarga automáticamente de recorrer los elementos.

    ¿Cuándo usar un Iterator en lugar de for, forEach o for...of?
    
    ✅ Usa un iterador cuando:
    - Necesitas control manual sobre el proceso de iteración.
    - Quieres pausar la iteración y retomarla más tarde (por ejemplo, para procesamiento por partes).
    - Estás trabajando con generadores o datos que llegan de forma progresiva (como flujos de datos o archivos grandes).
    
    ❌ Usa for, forEach o for...of cuando:
    - Necesitas recorrer un array o iterable de manera rápida y sencilla.
    - No necesitas detener ni pausar la iteración.
    - Quieres que el código sea más legible y conciso.
*/

// Ejemplo Práctico en la Vida Real
// Supongamos que estamos mostrando productos de una tienda de manera manual y queremos 
// recorrerlos uno por uno con un iterator.
export function iterableIterator() {

    const productos = ["Laptop", "Mouse", "Teclado", "Monitor"]; // iterable
    const iteradorProductos = productos[Symbol.iterator](); // iterador
    let nextI = iteradorProductos.next();
    
    // console.log(iteradorProductos.next().value); // "Laptop"
    // console.log(iteradorProductos.next().value); // "Mouse"
    // console.log(iteradorProductos.next().value); // "Teclado"
    // console.log(iteradorProductos.next().value); // "Monitor"
    // console.log(iteradorProductos.next().value); // undefined (porque ya terminó)

    while(!nextI.done) {
        console.log(nextI.value);
        nextI = iteradorProductos.next();
    }
}

