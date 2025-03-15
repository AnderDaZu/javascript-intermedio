console.log(`Nodos - Elementos - Selectores`);

console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('nombre'));

// los más usados
console.log(document.getElementById('menu')); // si se busca elemento por id, este es más optimo
console.log(document.querySelector('#menu')); // si se busca elemento por id, este es menor optimo
console.log(document.querySelector('a')); // si hay más de una etiqueta a, solo trae la primera que encuentra
console.log(document.querySelectorAll('a')); // trae todas las etiquetas a
console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[2]); // trae el tercer elemento de todos los elementos que tienen la clase .card
console.log(document.querySelectorAll('#menu li')); // trae todos los li que están dentro de menú