export function logicalOperator() {
    // logical operator -> &&, ||, !
    // && -> and, || -> or, ! -> not
    // ??= -> nullish coalescing operator: operador de coalescción nula (ternario), es un operador de asignación nula
    // console.log(true && true); // true -> evalua desde la izquierda, donde si hay un false, no evalua el resto
    // console.log(true && false); // false
    // console.log(false && true); // false
    // console.log(false && false); // false

    // console.log(true || true); // true -> evalua desde la izquierda, donde si hay un true, no evalua el resto
    // console.log(true || false); // true
    // console.log(false || true); // true
    // console.log(false || false); // false 

    // console.log(!true); // false
    // console.log(!false); // true 

    // - ?? -> nullish coalescing operator (operador de coalescción nula) evalua desde la izquierda, 
    // donde si hay un true, no evalua el resto, pero si hay un undefined o null, evalua el resto
    // console.log(1 ?? 2); // 1 -> evalua desde la izquierda, donde si hay un true, no evalua el resto
    // console.log(null ?? 2); // 2 
    // console.log(undefined ?? 2); // 2
    // console.log(null ?? undefined ?? 2); // 2
    // console.log(null ?? 1 ?? undefined ?? 2); // 1
    // console.log(1 ?? null ?? undefined ?? 2); // 1
    // console.log(1 ?? undefined ?? null ?? 2); // 1
    // console.log(undefined ?? 1 ?? null ?? 2); // 1
    // console.log(undefined ?? null ?? 1 ?? 2); // 1

    // let initialCounter = 0; // 0 -> falsy
    // initialCounter = initialCounter || 25; // 25, no se recomienda ya que or evalua el cero como false y no lo toma en cuenta
    // initialCounter = initialCounter ?? 25; // 0, se recomienda ya que ?? evalua el cero como true y lo toma en cuenta, evalua como falso los valores nulos y undefined
    // initialCounter ??= 25; // 0, ??= una forma más limpia y corta de hacer initialCounter = initialCounter ?? 25

    // ?? toma como nulo los valores null y undefined
    let contadorA = 0;
    contadorA = contadorA ?? 25; // 0
    contadorA ??= 25; // 0
    console.group('operador ??');
    console.log(`null ?? 25: `, null ?? 25); // 25
    console.log(`undefined ?? 25: `, undefined ?? 25); // 25
    console.log(`false ?? 25: `, false ?? 25); // false
    console.log(`0 ?? 25: `, 0 ?? 25); // 0
    console.log(`contadorA: `, contadorA); // 0
    console.groupEnd();

    // && toma como falsy los valores null, undefined, false y 0
    let contadorB = 0;
    contadorB = contadorB && 25; // 0
    contadorB &&= 25; // 0
    console.group('operador &&');
    console.log(`null && 25: `, null && 25); // null
    console.log(`undefined && 25: `, undefined && 25); // undefined
    console.log(`false && 25: `, false && 25); // false
    console.log(`0 && 25: `, 0 && 25); // 0
    console.log(`contadorB: `, contadorB); // 0
    console.groupEnd();

    // || toma como falsy los valores null, undefined, false y 0
    let contadorC = 0;
    contadorC = contadorC || 25; // 25
    console.group('operador ||');
    console.log(`null || 25: `, null || 25); // 25
    console.log(`undefined || 25: `, undefined || 25); // 25
    console.log(`false || 25: `, false || 25); // 25
    console.log(`0 || 25: `, 0 || 25); // 25
    console.log(`'' || 25: `, '' || 25); // 
    console.log(`1 || 25: `, 1 || 25); // 1
    console.log(`{} || 25: `, {} || 25); // 1
    console.log(`contadorC: `, contadorC); // 25
    contadorC ||= 30; // 25
    console.log(`contadorC: `, contadorC); // 25

    console.groupEnd();
}

