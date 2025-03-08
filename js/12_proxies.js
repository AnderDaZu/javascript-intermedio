/*
    En JavaScript, un Proxy es un objeto especial que actúa como intermediario 
    entre otro objeto y las operaciones que se realizan sobre él. Con un Proxy, puedes 
    interceptar y modificar el comportamiento de las propiedades de un objeto, como 
    leer, escribir o borrar valores.

    📌 ¿Para qué sirven los Proxies?
    
    Los Proxies se usan para:
    - Validar datos antes de asignarlos a un objeto.
    - Registrar acciones cuando se accede o modifica un objeto.
    - Crear propiedades dinámicas o comportamientos personalizados.
    - Proteger objetos contra cambios inesperados.

    📌 Características principales

    ✅ Intercepta las operaciones de lectura, escritura y eliminación de propiedades de un objeto.
    ✅ Permite configurar el comportamiento de las propiedades de un objeto.
    ✅ Se usa principalmente para crear objetos con comportamientos personalizados o para validar datos 
        antes de asignarlos a un objeto.

    Handler (manejador):
    El handler es un objeto que contiene las funciones que se usan para interceptar las operaciones 
    de lectura, escritura y eliminación de propiedades de un objeto.

    En JavaScript, cuando usas un proxy con una trampa (trap) como set, esta trampa debe retornar 
    explícitamente true para indicar que la operación de asignación fue exitosa. Si la trampa no retorna
    true (o retorna un valor falsish), JavaScript lanza este error.
*/

export function proxies() {
    console.log(`Clase de proxies...`);

    const persona = {
        nombre: '',
        apellido: '',
        edad: 0,
    }

    const manejador = {
        get(obj, propiedad) { // se ejecuta cuando se accede a una propiedad del objeto
            if (Object.keys(obj).indexOf(propiedad) === -1) { // valida que la propiedad exista en el objeto original
                console.error(`La propiedad ${propiedad} no existe en el objeto`);
                return true;
            }
            return obj[propiedad];
        },
        set(obj, propiedad, valor) {
            if (!Object.keys(obj).includes(propiedad)) { // valida que la propiedad exista en el objeto original
                console.error(`La propiedad ${propiedad} no existe en el objeto`);
                return true;
            }
            if (!validarDatoPrimitivo(valor, typeof obj[propiedad])) { // valida que el valor sea de tipo primitivo
                console.error(`El valor de la propiedad ${propiedad} debe ser de tipo ${typeof obj[propiedad]}`);
                return true;
            }
            obj[propiedad] = valor;
            return true;
        }
    }

    const personaProxy = new Proxy(persona, manejador);
    console.log(personaProxy);
    personaProxy.nombre = 'Anderson';
    personaProxy.apellido = 'Dazu';
    personaProxy.edad = '28';
    personaProxy.edad2 = '28';
    console.log(personaProxy);
    console.log(persona);
    console.log(personaProxy.nombre);
    console.log(personaProxy.edad2);
}

function validarDatoPrimitivo (valor, tipo) {
    console.log(valor, tipo);
    if (typeof valor !== tipo) return false;

    return true;
}
