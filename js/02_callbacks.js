/*
    Callbacks
    Una función que se pasa como argumento a otra función y se ejecuta dentro de la otra función al ser llamada.

    Resumen rápido:
    ✔ Un callback es una función que se pasa como argumento y se ejecuta después.
    ✔ Se usa en asincronía, eventos, manipulación de arrays y llamadas a APIs.
*/

export function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback();
}

export function cuadradoCallback(value, callback) {
    // callback(value, value**2);
    callback(value);
}