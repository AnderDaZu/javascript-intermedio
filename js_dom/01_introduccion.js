console.log(`Introducción al DOM`);

console.log('document', document); // muestra todo el html incluyendo el tipo
console.log('html', document.documentElement); // muestra todo el html sin el tipo
console.log('head', document.head);
console.log('body', document.body);
console.log('titulo', document.title); // Práctica de Fundamentos JavaScript
console.log('links/enlaces', document.links); // HTMLCollection []
console.log('imagenes', document.images); // HTMLCollection []
console.log('styleSheets', document.styleSheets); // StyleSheetList {0: CSSStyleSheet, length: 1}
console.log('scripts', document.scripts); // HTMLCollection [script]

setTimeout(() => {
    console.log('obtener una selección del dom', document.getSelection().toString());
}, 3000);

document.writeln('<h2>Hola desde WriteIn</h2>')