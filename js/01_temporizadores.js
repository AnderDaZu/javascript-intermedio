/*
    setTimeout(funcion, milisegundos)
    Ejecuta la función después de n milisegundos
*/
export const timer = setTimeout(() => {
    console.log('Ejecutando setTimeout...');
}, 1500);

/*
    setInterval(funcion, milisegundos)
    Ejecuta la función cada n milisegundos
*/
export const interval = setInterval(() => {
    console.log('Hora: ', new Date().toLocaleTimeString());
}, 1000);