/*
    Promesas
    Una promesa es un objeto que representa el resultado de una operación asíncrona y tiene 3 estados posibles:

    En los promesis hay 3 valores:
    - Pending: No se ha cumplido pero tampoco se ha rechazado
    - Resuelta: Ya se cumplio
    - Rechazada: Se ha rechazado o no se pudo cumplir
    
    - Se usa en asincronía, eventos, manipulación de arrays y llamadas a APIs.
    - El resultado de una promesa, los datos de entrada de otra posible función.
    - Las promesas mantienen un código más legible y mantenible que las callbacks, adiciona un mecanismo para la detección de errores (catch) que es posible usar en cualquier parte del flujo de datos.
    - Las promesas son un estandar de JavaScript que permite que se manejen de manera asíncrona y se usan en el desarrollo web moderno.
    - El resultado de una promesa, los datos de entrada de otra posible función.
*/

export function cuadradoPromise(value) {
    if (typeof value !== "number") return Promise.reject(`El valor ${value} no es un numero`);

    return new Promise((resolve, reject) => {
        // if (typeof value !== "number") reject(new Error(`El valor ${value} no es un numero`));
        resolve(value);
    });
}

export const usuarioAutenticado = () => {
    const auth = true;

    if (!auth) return Promise.reject('No se pudo autenticar el usuario');
    
    return new Promise((resolve, reject) => {
        if (auth) resolve("Usuario Autenticado");
    });
};