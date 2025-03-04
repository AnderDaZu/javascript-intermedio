/*
    El objeto Map en JavaScript es una estructura de datos que permite almacenar pares clave-valor, 
    donde las claves pueden ser de cualquier tipo (no solo strings, como en los objetos normales).

    Características principales:
    - Mantiene el orden de inserción de los elementos.
    - Las claves pueden ser cualquier tipo de dato (objetos, números, funciones, etc.).
    - Proporciona métodos útiles para manejar los datos, como .set(), .get(), .has(), .delete(), y .size.

    ¿Por qué usar Map en lugar de un objeto {}?
    - Permite claves de cualquier tipo.
    - Es más eficiente cuando trabajas con muchas inserciones y eliminaciones.
    - Mantiene el orden de las claves.
    - Tiene métodos específicos para manejar datos de forma más cómoda.
    - Es ideal cuando necesitas un diccionario más avanzado o trabajar con datos estructurados de forma eficiente. 🚀
*/

export function mapas() {
    const mapa1 = new Map();
    console.log('mapa 01', mapa1);

    mapa1.set('nombre', 'Anderson');
    console.log('mapa 01 set nombre\n', mapa1);
    console.log('mapa 01 get nombre\n', mapa1.get('nombre'));

    mapa1.set(true, 'validación');
    mapa1.set('saludar', function() {
        console.log(`Hola allá`);
    });
    console.log('mapa 01', mapa1);

    mapa1.get('saludar')(); // forma de ejecutar una función de Map
    
    console.log('mapa 01 delete saludar', mapa1.delete('saludar')); // retorna boolean si se elimina la propiedad solicitada
    console.log('mapa 01 has saludar', mapa1.has('saludar')); // retorna boolean dependiendo si encuentra la propiedad solicitada
    console.log('mapa 01 entries', mapa1.entries()); // 
    
    mapa1.forEach((elemento, indice) => {
        console.log(`mapa 01 forEach: ${indice} - ${elemento}`);
    })
    
    console.log('mapa 01 keys', mapa1.keys());
    console.log('mapa 01 values', mapa1.values());
    console.log('mapa 01 size', mapa1.size);
    console.log('mapa 01 typeof', typeof mapa1);
    
    console.log('mapa 01 clear', mapa1.clear()); // elimina todas las propiedades y valores del mapa retorna undefined
    console.log('mapa 01\n', mapa1);
}