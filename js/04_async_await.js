/*
    Async - Await
*/

import {validarDatoPrimitivo} from './validar_datos.js';

export function cuadradoPromise(valor) {
    const validar = validarDatoPrimitivo(valor, 'number');
    if (!validar.ejecutar) return Promise.reject(validar.mensaje);

    return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve({
                valor,
                result: valor**2,
            });
        }, 0 | Math.random()*1000);
    });
}

export function descargaNuevosClientes() {
    console.log(`Inicio descarga nuevos clientes...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 0 | Math.random()*1000);
    });
}