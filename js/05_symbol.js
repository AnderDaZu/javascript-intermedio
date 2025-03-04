/*
    En JavaScript, Symbol es un tipo de dato primitivo introducido en ES6 (ECMAScript 2015). 
    Se usa para crear valores únicos e inmutables.

    🔹 ¿Para qué sirve Symbol?
        Sirve principalmente para:
        1. Evitar colisiones en propiedades de objetos
        2. Crear identificadores únicos
        3. Definir propiedades privadas o semi-privadas en objetos

    🔹 Características principales:
        ✅ Único: Cada Symbol creado es diferente, incluso si tienen la misma descripción.
        ✅ Inmutable: No se puede cambiar una vez creado.
        ✅ No se accede directamente: No aparece en Object.keys() ni en un for...in, lo que ayuda a ocultar información.
*/

export function tipoDatoSymbol() {
    const NOMBRE = Symbol('nombre');
    const EDAD = Symbol('edad');
    const SALUDAR = Symbol('saludar');
    
    const persona = {
        [EDAD]: 28,
        saludar() {
            console.log(`Hola desde saludar normal...`);
        }
    }
    
    persona.apellido = 'Daza'; // manera de agregar nueva propiedad al objeto
    persona[NOMBRE] = 'Anderson'; // manera de agregar propiedad tipo Symbol a un objeto
    persona[SALUDAR] = function() { // manera de agregar método de tipo Symbol a un objeto
        console.log(`Hola desde saludar symbol...`);
    }
    
    console.log(persona);
    persona.saludar(); // manera de ejecutar método normal de objeto
    persona[SALUDAR](); // manera de ejecutar método creado a partir de Symbol

    // forma de trabajar con los symbols de un objeto
    console.log(Object.getOwnPropertySymbols(persona), Object.getOwnPropertySymbols(persona).includes(EDAD));  
}