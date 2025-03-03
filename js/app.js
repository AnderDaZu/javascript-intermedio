console.log('Se cargo archivo de modulo...');

// 01 temporizadores
// import {timer, interval} from './01_temporizadores.js';

// timer;
// interval;
// clearTimeout(timer); // Elimina el temporizador timer
// clearInterval(interval); // Elimina el intervalo interval
// setTimeout(() => { clearInterval(interval) }, 5000);

// 02 callbacks
import {saludar, cuadradoCallback} from './02_callbacks.js';

saludar('Ander', () => {
    console.log('Saliendo...');
});
saludar('Mircha', () => {
    console.log('Ingresando...');
});

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
cuadradoCallback(0, (value) => {
    console.log(`EL cuadrado de ${value} es: ${value**2}`);
    cuadradoCallback(1, (value) => {
        console.log(`EL cuadrado de ${value} es: ${value**2}`);
        cuadradoCallback(2, (value) => {
            console.log(`EL cuadrado de ${value} es: ${value**2}`);
            cuadradoCallback(3, (value) => {
                console.log(`EL cuadrado de ${value} es: ${value**2}`);
                cuadradoCallback(4, (value) => {
                    console.log(`EL cuadrado de ${value} es: ${value**2}`);
                });
            });
        });
    });
});
