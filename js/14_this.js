/*
    🚀 Reglas clave:

    ✅ Usa arrow functions en funciones constructoras para mantener el this correcto.
    ❌ No uses arrow functions como métodos de objetos, porque this no apuntará al objeto.
    ✅ Usa arrow functions en closures para evitar perder el contexto de this.
*/

console.log(`Clase de this...`);

console.log(this); // window
console.log(window); // window
console.log(this === window); // true

this.nombre = 'Contexto global';

console.log(this.nombre); // Contexto global

function imprimir() {
    console.log('Función imprimir:', this.nombre);
}

imprimir(); // Contexto global

const Persona = {
    nombre: 'Contexto objeto',
    imprimir: function() {
        console.log('Persona 1.1:', this.nombre); // Persona 1.1: Contexto objeto
    },
    // esta arrow function hereda el contexto donde esta definida en el objeto Persona
    // imprimir2: () => {
    //     console.log('Persona 1.2:', this.nombre); // Persona 1.2: Contexto global
    // },
    saludar() {
        console.log('Persona 1.3:', this.nombre); // Persona 1.3: Contexto objeto
    }
}

function Animal() {
    this.nombre = 'Contexto objeto';

    // esta función es un closure la cual crea un nuevo contexto/scope al estar dentro de una función
    // return function() {
    //     console.log('Animal 1.1', this.nombre); //Animal 1.1 Contexto global
    // }

    // esta arrow function hereda el contexto donde esta definida
    return () => console.log('Animal 1.2', this.nombre); // Animal 1.2 Contexto objeto
}

Persona.imprimir(); // Persona 1.1: Contexto objeto
// Persona.imprimir2(); // Persona 1.2: Contexto global

Persona.saludar(); // Persona 1.3: Contexto objeto

const animal = new Animal(); 
animal(); // Animal 1.2 Contexto objeto