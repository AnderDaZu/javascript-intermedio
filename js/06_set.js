/*
    El objeto Set en JavaScript se usa comúnmente en situaciones donde necesitas manejar valores 
    únicos o mejorar el rendimiento en ciertas operaciones. Aquí te dejo algunos usos frecuentes de Set:

    🔹 1. Eliminar duplicados de un array
    Uno de los usos más comunes de Set es remover elementos repetidos de un array.

    🔹 2. Verificar si un valor existe (más rápido que un array)
    El método has() de un Set es más eficiente que el método includes() de un Array, especialmente en conjuntos grandes.
    ✅ Útil cuando necesitas verificar la existencia de un elemento sin recorrer todo el array.

    🔹 3. Manejar listas de etiquetas o categorías únicas
    Si tienes una aplicación donde los usuarios pueden asignar tags o categorías, usar un Set evita duplicados automáticamente.
    ✅ Útil en aplicaciones como blogs, gestores de tareas o sistemas de etiquetado.

    🔹 4. Comparar dos conjuntos de datos
    Si necesitas encontrar valores únicos o comunes entre dos conjuntos, Set lo hace fácil.
    ✅ Útil en algoritmos de recomendación, filtros y análisis de datos.


    🚀 Conclusión
    Set es una herramienta poderosa en JavaScript cuando trabajas con valores únicos y necesitas mejorar el rendimiento
    en búsquedas y eliminaciones de duplicados. Si quieres trabajar con datos rápidos y eficientes, Set es una gran opción.
*/
export function seccionSet() {

    let numerosSet = new Set([1, 2, 3, 4, 5]);

    console.log('1: crear un set', numerosSet); // Set(6) {1, 2, 3, 4, 5, …}

    numerosSet.add(6); // .add -> agrega un elemento al set sin duplicados siempre y cuando no exista en el set actual.
    console.log('2: agregar el valor 6', numerosSet);

    numerosSet.delete(6); // .delete -> elimina el elemento del set siempre y cuando exista en el set actual.
    console.log('3: eliminar el valor 6', numerosSet);

    numerosSet.clear(); // .clear -> elimina todos los elementos del set.
    console.log('4: limpiar el set', numerosSet);

    numerosSet.add(2); // .add -> agrega un elemento al set sin duplicados siempre y cuando no exista en el set actual.
    numerosSet.add(4);
    numerosSet.add(6);
    numerosSet.add(8);
    numerosSet.add(10);

    console.log('5: obtener las claves y valores', numerosSet.entries()); // .entries -> devuelve un iterador de pares clave-valor.

    // numerosSet.forEach((value) => { // .forEach -> ejecuta la función indicada una vez por cada elemento del set.
    //     console.log(value);
    // });

    console.log(`6: buscar el valor 2: ${numerosSet.has(2)}`); // .has -> devuelve un booleano indicando si el set contiene el elemento indicado.

    console.log(`7: buscar el valor 9: ${numerosSet.has(9)}`);

    console.log('8: obtener los valores', numerosSet.values()); // .values -> devuelve un iterador con los valores del set.
    
    console.log('9: obtener las claves', numerosSet.keys()); // .keys -> devuelve un iterador con las claves del set.

    console.log('10: longitud del set', numerosSet.size); // .size -> devuelve el numero de elementos del set.

    console.log('11: convertir el set en un array opt1', Array.from(numerosSet)); // .from -> convierte un set en un array.
    
    console.log('12: convertir el set en un array opt2', [...numerosSet]); // .from -> convierte un set en un array.

    let valoresArray = [1, 2, 3, 'a', 'b', 'c', true, false, [1, 2], 1, 3, 'b', true, true, 'b'];
    
    let valoresSet = new Set(valoresArray);
    let valoresSetArray = Array.from(valoresSet);
    
    console.log('13: valores array', valoresArray);
    console.log('14: valores set', valoresSet);
    
    valoresArray = [...new Set(valoresArray)];

    console.log('15: nuevos valores array', valoresArray);
    console.log(`16: nuevos valores array desde set`, valoresSetArray);

    console.log(`17: método has saber si existe x elemento en objeto`, valoresSet.has('a'));

    let a = new Set([1, 2, 3, 4]);
    let b = new Set([3, 4, 5, 6]);

    // Intersección (valores en común)
    let interseccion = new Set([...a].filter(x => b.has(x)));

    console.log('18: intersección\n', a, b, interseccion); // Set(2) { 3, 4 }
    console.log('19: intersección\n', new Set([1,2,3,4].filter(x => !new Set([3,4,5,6]).has(x)))); // Set(2) { 1, 2 }
}