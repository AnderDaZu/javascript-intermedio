console.log(`Atributos y Data-Attributes`);

console.group('Obtener valores de atributos')
// OBTENER VALORES DE ATRIBUTOS DE ELEMENTOS DEL DOM (ETIQUETAS)
console.log(`Lenguaje de html:`, document.documentElement.lang);
console.log(`Lenguaje de html:`, document.documentElement.getAttribute('lang'));

// trae url completa no como tal el valor de href -> http://127.0.0.1:5500/views/dom.html
console.log(`a - hfre:`, document.querySelector('.link-dom').href);
// si trae el valor como tal que tiene href -> ./dom.html
console.log(`a - getAttribute::`, document.querySelector('.link-dom').getAttribute('href')); 
console.groupEnd();

console.group('Establecer valores a atributos parte 1')
// ESTABLECER VALORES A ATRIBUTOS DE ELEMENTOS DEL DOM (ETIQUETAS)
document.documentElement.lang = 'es';
console.log(`Lenguaje de html cambiado a:`, document.documentElement.lang);
document.documentElement.setAttribute('lang', 'es-CO');
console.log(`Lenguaje de html cambiado a:`, document.documentElement.lang);
console.groupEnd();

// se usa $ en nombre de variables para indicar la selección de elemento del dom
const $linkDOM = document.querySelector('.link-dom');
const $documenEle = document.documentElement;

console.group('Establecer valores a atributos parte 2');
console.log(`link - href:`, $linkDOM.getAttribute('href'));
$linkDOM.setAttribute('href', 'https://driv.pro');
console.log(`link - cambio href a:`, $linkDOM.getAttribute('href'));
$linkDOM.href = './dom.html';
console.log(`link - cambio href a:`, $linkDOM.getAttribute('href'));
$linkDOM.setAttribute('target', '_blank');
$linkDOM.setAttribute('rel', 'noopener');
console.log(`link - se agrego atributo target:`, $linkDOM.getAttribute('target'));
console.log(`link - se agrego atributo rel:`, $linkDOM.getAttribute('target'));
console.groupEnd();

console.group('Validar existencia y eliminar atributos');
console.log(`link: tiene atributo rel`, $linkDOM.hasAttribute('rel'));
$linkDOM.removeAttribute('rel');
console.log(`link: tiene atributo rel`, $linkDOM.hasAttribute('rel'));
console.groupEnd();

// DATA-ATTRIBUTE
console.group('Data-Atribute');
console.log(`Obtener atributos cstm:`, $linkDOM.dataset);
console.log(`Obtener atributo cstm data-description:`, $linkDOM.dataset.description);
console.log(`Obtener atributo cstm data-description:`, $linkDOM.getAttribute('data-description'));
$linkDOM.setAttribute('data-description', 'Modelo de Objeto del DOM');
console.log(`Obtener atributo cstm actualizado data-description:`, $linkDOM.getAttribute('data-description'));
$linkDOM.dataset.description = 'Suscribete a mi canal...';
console.log(`Obtener atributo cstm actualizado data-description:`, $linkDOM.getAttribute('data-description'));
console.log(`Validar si existe atributo cstm data-description:`, $linkDOM.hasAttribute('data-description'));
$linkDOM.removeAttribute('data-description');
console.log(`Validar si existe atributo cstm data-description:`, $linkDOM.hasAttribute('data-description'));

console.groupEnd();

/*
📌 Atributo target
Este atributo controla cómo se abre el enlace cuando el usuario hace clic en él.

🔹 Valores más comunes:

_self → (Por defecto) Abre el enlace en la misma pestaña o ventana.
_blank → Abre el enlace en una nueva pestaña o ventana.
_parent → Abre el enlace en el marco padre (cuando se usa dentro de iframes).
_top → Abre el enlace en la ventana principal, saliendo de todos los iframes.

📌 Atributo rel
Este atributo define la relación entre la página actual y la URL del enlace. Es especialmente útil por razones de seguridad y SEO.

🔹 Valores más utilizados:

noopener → Evita que la página enlazada tenga acceso a window.opener (previene ataques de phishing).
noreferrer → No envía información de referencia (referer) al sitio de destino.
nofollow → Indica a los motores de búsqueda que NO sigan el enlace (útil para enlaces patrocinados o de afiliados).
noopener noreferrer → Combina ambas protecciones de seguridad.
ugc → Indica que el enlace es generado por un usuario (por ejemplo, en comentarios de un blog).
sponsored → Especifica que el enlace es parte de un patrocinio o publicidad.

🔥 Conclusión
Si usas target="_blank", siempre debes agregar rel="noopener noreferrer" por seguridad.
Si haces marketing de afiliados o vendes enlaces, usa rel="nofollow sponsored" para cumplir con las reglas de SEO.
*/