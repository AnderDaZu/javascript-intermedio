import {timer, interval} from './01_temporizadores.js';

console.log('Se cargo archivo de modulo...');

// 01 temporizadores
timer;
interval;
clearTimeout(timer); // Elimina el temporizador timer
clearInterval(interval); // Elimina el intervalo interval
// setTimeout(() => { clearInterval(interval) }, 5000);
