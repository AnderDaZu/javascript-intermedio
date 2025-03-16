
const $linkDOM = document.querySelector('.link-dom');

console.groupCollapsed('estilos');
console.log('link-dom', $linkDOM);
console.log('link-dom estilos', $linkDOM.style);
console.log(`link-dom background:`, $linkDOM.style.backgroundColor);
console.log(`window getComputedStyle`, window.getComputedStyle($linkDOM));
console.log(`window getComputedStyle`, window.getComputedStyle($linkDOM).getPropertyValue('background-color'));
console.log(`window getComputedStyle`, getComputedStyle($linkDOM).getPropertyValue('background-color'));
console.log(`link-dom background:`, $linkDOM.style.backgroundColor);
$linkDOM.style.setProperty('background-color', '#f1f1f1');
console.log(`link-dom background:`, $linkDOM.style.backgroundColor);
$linkDOM.style.padding = '10px 20px';
$linkDOM.style.borderRadius = '10px';
console.log(`link-dom estilos`, $linkDOM.style);
console.log(`link-dom estilos`, $linkDOM.getAttribute('style'));
console.groupEnd();

// VARIABLES CSS - CSTM PROPERTIES CSS
const $html = document.documentElement;
const $body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
let varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');
console.log(varDarkColor, varYellowColor);

$body.style.background = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty('--dark-color', 'linear-gradient(to bottom, #f1f1f1 0%, #1098F7 100%)');
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');
// console.log(varDarkColor);
$body.style.backgroundImage = varDarkColor;
