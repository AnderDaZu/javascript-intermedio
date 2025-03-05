/*
    1. WeakSet
    Un WeakSet es como un Set, pero solo puede almacenar objetos y los mantiene de manera "débil". 
    Esto significa que si un objeto dentro de un WeakSet deja de tener referencias en otro lugar del código, 
    será eliminado automáticamente por el Garbage Collector (el recolector de basura de JavaScript).

    Características:

    - Solo almacena objetos (no strings, números, ni otros tipos de datos primitivos).
    - No tiene métodos como .size o .forEach(), porque sus elementos pueden ser eliminados en cualquier momento.
    - Se usa principalmente para almacenar referencias temporales a objetos sin evitar que sean eliminados por el Garbage Collector.

    2. WeakMap
    Un WeakMap es como un Map, pero las claves solo pueden ser objetos y las referencias a ellos también son "débiles". 
    Si un objeto usado como clave en un WeakMap ya no es referenciado en otro lugar del código, se eliminará automáticamente.

    Características:

    - Las claves solo pueden ser objetos (no strings ni números).
    - No tiene .size, .keys(), .values() ni métodos que permitan iterarlo.
    - Se usa principalmente para almacenar datos privados asociados a objetos sin afectar su ciclo de vida.
*/

export function weakSetMap() {
    let ws = new WeakSet();
    let obj = { nombre: "Juan" };

    console.log('weakset:', ws);
    ws.add(obj);
    console.log('weakset:', ws);
    console.log('weakset has:', ws.has(obj)); // true

    obj = null; // Eliminamos la referencia
    // El objeto ahora puede ser eliminado por el Garbage Collector
    console.log('weakset has:', ws.has(obj)); // false (en algún momento será eliminado)

    let wm = new WeakMap();
    let user = { nombre: "Ana" };

    wm.set(user, "Información secreta");

    console.log('weakmap:', wm);
    console.log('weakmap has:', wm.has(user));
    console.log('weakmap get:', wm.get(user)); // "Información secreta"

    user = null; // Eliminamos la referencia
    // El objeto y su valor asociado serán eliminados por el Garbage Collector
    console.log('weakmap:', wm);
}