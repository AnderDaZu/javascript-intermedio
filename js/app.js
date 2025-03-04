console.log('Se cargo archivo de modulo...');

// 01 temporizadores
// import {timer, interval} from './01_temporizadores.js';

// timer;
// interval;
// clearTimeout(timer); // Elimina el temporizador timer
// clearInterval(interval); // Elimina el intervalo interval
// setTimeout(() => { clearInterval(interval) }, 5000);

// 02 callbacks
// import {saludar, cuadradoCallback} from './02_callbacks.js';

// saludar('Ander', () => {
//     console.log('Saliendo...');
// });
// saludar('Mircha', () => {
//     console.log('Ingresando...');
// });

// cuadradoCallback(0, (value, result) => {
//     console.log(`El cuadrado de ${value} es: ` + result);
//     cuadradoCallback(1, (value, result) => {
//         console.log(`El cuadrado de ${value} es: ` + result);
//         cuadradoCallback(2, (value, result) => {
//             console.log(`El cuadrado de ${value} es: ` + result);
//             cuadradoCallback(3, (value, result) => {
//                 console.log(`El cuadrado de ${value} es: ` + result);
//                 cuadradoCallback(4, (value, result) => {
//                     console.log(`El cuadrado de ${value} es: ` + result);
//                 });
//             });
//         });
//     });
// });
// cuadradoCallback(0, (value) => {
//     console.log(`EL cuadrado de ${value} es: ${value**2}`);
//     cuadradoCallback(1, (value) => {
//         console.log(`EL cuadrado de ${value} es: ${value**2}`);
//         cuadradoCallback(2, (value) => {
//             console.log(`EL cuadrado de ${value} es: ${value**2}`);
//             cuadradoCallback(3, (value) => {
//                 console.log(`EL cuadrado de ${value} es: ${value**2}`);
//                 cuadradoCallback(4, (value) => {
//                     console.log(`EL cuadrado de ${value} es: ${value**2}`);
//                 });
//             });
//         });
//     });
// });

// 03 promesas
// import {cuadradoPromise, usuarioAutenticado} from './03_promesas.js';

// cuadradoPromise(0)
//     .then((value) => {
//         console.log(`El cuadrado de ${value} es: ${value**2}`);
//         return cuadradoPromise(1);
//     })
//     .then((value) => {
//         console.log(`El cuadrado de ${value} es: ${value**2}`);
//         return cuadradoPromise(2);
//     })
//     .then((value) => {
//         console.log(`El cuadrado de ${value} es: ${value**2}`);
//         return cuadradoPromise(3);
//     })
//     .then((value) => {
//         console.log(`El cuadrado de ${value} es: ${value**2}`);
//         return cuadradoPromise(4);
//     })
//     .then((value) => {
//         console.log(`El cuadrado de ${value} es: ${value**2}`);
//     })
//     .catch((err) => console.error(err));

// usuarioAutenticado()
//     .then((res) => {
//         console.log('Respuesta:', res);
//     })
//     .catch(res => {
//         console.error(res);
//     });

// 04 Async - Await
// import {cuadradoPromise, descargaNuevosClientes} from './04_async_await.js';

// async function funcionAsyncDeclarada() {
//     try {
//         console.log(`Inicio de Async Function Declarada`);
        
//         let obj = await cuadradoPromise(0);
//         console.log(`Async Funtion: ${obj.valor} | ${obj.result}`);
        
//         obj = await cuadradoPromise(1);
//         console.log(`Async Funtion: ${obj.valor} | ${obj.result}`);
        
//         obj = await cuadradoPromise(2);
//         console.log(`Async Funtion: ${obj.valor} | ${obj.result}`);
        
//         obj = await cuadradoPromise(3);
//         console.log(`Async Funtion: ${obj.valor} | ${obj.result}`);
//     } catch (error) {
//         console.error(error);
//     }
// }
// const funcionAsyncExpresada = async () => {
//     try {
//         console.log(`Inicio de Async Function Expresada`);

//         let obj = await cuadradoPromise(4);
//         console.log(`Asyn Function Expresada: ${obj.valor} | ${obj.result}`);
        
//         obj = await cuadradoPromise(5);
//         console.log(`Asyn Function Expresada: ${obj.valor} | ${obj.result}`);
        
//         obj = await cuadradoPromise(6);
//         console.log(`Asyn Function Expresada: ${obj.valor} | ${obj.result}`);

//     } catch (error) {
//         console.error(error);
//     }
// }

// funcionAsyncDeclarada();
// funcionAsyncExpresada();

// async function app () {
//     try {
//         const response = await descargaNuevosClientes();
//         console.log(response);
//         console.log(`Este código si se bloquea...`);
//     } catch (error) {
//         console.error(error);
//     }
// }

// app();

// console.log(`Este código no se bloquea...`);

import {tipoDatoSymbol} from './05_symbol.js';
tipoDatoSymbol();
