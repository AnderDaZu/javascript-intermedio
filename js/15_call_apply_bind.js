/*
    call, apply y bind son métodos que pertenecen a las funciones en JavaScript y permiten cambiar 
    el valor de this cuando se ejecuta la función. Vamos a explicarlos con ejemplos claros.

    🔥 ¿Por qué existen call, apply y bind?
    En JavaScript, el valor de this dentro de una función depende de cómo se llama la función, 
    no de dónde está definida. A veces, queremos forzar que una función use un objeto específico 
    como this, y aquí es donde entran estos tres métodos.

    🔹 call()
    El método call() ejecuta la función inmediatamente y permite pasar argumentos uno por uno.

    🔹 apply()
    Funciona igual que call(), pero los argumentos se pasan en un array.

    🔹 bind()
    El método bind() NO ejecuta la función de inmediato, sino que devuelve una nueva función 
    con this ligado al objeto deseado.

    🚀 Resumen final:
    - call(obj, arg1, arg2, ...) → Llama la función cambiando this.
    - apply(obj, [arg1, arg2, ...]) → Igual que call, pero con argumentos en array.
    - bind(obj, arg1, arg2, ...) → Devuelve una nueva función con this ligado, para ejecutarla después.


*/

console.log(`Clase de call, apply y bind...`);

console.log('1.1', this); // Global 1.1 [object Window]
this.lugar = 'Contexto Global';
this.nombre = 'Window';

function saludar(mensaje, nombre) {
    // console.log(`1.2 ${this.lugar}`); // 1.2 Contexto Global
    console.log(`1.3 -> ${mensaje} ${nombre} desde ${this.lugar}`); // 1.3 -> Hola Anderson desde Contexto Objeto Persona
}

const persona = {
    lugar: 'Contexto Objeto Persona',
}

console.group('Call-Apply');

saludar('Hola', 'Anderson'); // 1.3 -> Hola Anderson desde Contexto Global
saludar.call(persona, 'Call: Hola', 'Anderson'); // 1.3 -> Call: Hola Anderson desde Contexto Objeto Persona
saludar.call(this, 'Call: Hola', 'Anderson'); // 1.3 -> Call: Hola Anderson desde Contexto Global
saludar.call(null, 'Call: Hola', 'Anderson'); // 1.3 -> Call: Hola Anderson desde Contexto Global
saludar.apply(persona, ['Apply: Hola', 'Liz']); // 1.3 -> Apply: Hola Liz desde Contexto Objeto Persona
saludar.apply(this, ['Apply: Hola', 'Liz']); // 1.3 -> Apply: Hola Liz desde Contexto Global
saludar.apply(null, ['Apply: Hola', 'Liz']); // 1.3 -> Apply: Hola Liz desde Contexto Global

console.groupEnd();

const Persona2 = {
    nombre: 'Persona 2',
    lugar: 'Contexto Objeto Persona 2',
    saludar() {
        console.log(`2.3 -> Hola ${this.nombre}`); // 2.3 -> Hola Persona 2
    }
}

const Persona3 = {
    saludar: Persona2.saludar.bind(this)
}

const Persona4 = {
    nombre: 'Persona 4',
    saludar: Persona2.saludar.bind(Persona2),
    saludar2: saludar.bind(Persona2, 'Bind: Hola', 'Anderson'),
}

console.group('Bind');

Persona2.saludar(); // 2.3 -> Hola Persona 2
Persona3.saludar(); // 2.3 -> Hola Window
Persona4.saludar(); // 2.3 -> Hola Persona 2
Persona4.saludar2(); // 2.3 -> Bind: Hola Anderson desde Contexto Objeto Persona 2

console.groupEnd();