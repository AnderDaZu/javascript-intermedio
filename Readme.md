# Asincronía

La asincronía es uno de los pilares fundamentales de Javascript, ya que es un lenguaje de programación
de un sólo subproceso o hilo (single thread), lo que significa que sólo puede ejecutar una cosa a la vez.

Si bien los idiomas de un sólo hilo simplifican la escritura de código porque no tiene que preocuparse 
por los problemas de concurrencia, esto también significa que no puede realizar operaciones largas como 
el acceso a la red sin bloquear el hilo principal.

Imagina que solicitas datos de una API. Dependiendo de la situación, el servidor puede tardar un tiempo 
en procesar la solicitud mientras bloquea el hilo principal y hace que la página web no responda.

Ahí es donde entra en juego la asincronía que permite realizar largas solicitudes de red sin bloquear el hilo principal.

JavaScript fue diseñado para ser ejecutado en navegadores, trabajar con peticiones sobre la red y procesar 
las interacciones de usuario, al tiempo que mantiene una interfaz fluida.

Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, 
(single thread) para operaciones de entrada y salida (input/output).

Gracias a esta solución, Javascript es áltamente concurrente a pesar de emplear un sólo hilo.

---
Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

Procesamiento Single thread (Hilo único) y Multi thread (Hilos múltples).
Operaciones de CPU y Operaciones de I/O (Entrada y Salida).
Operaciones Concurrentes y Paralelas.
Operaciones Bloqueantes y No Bloqueantes.
Operaciones Síncronas y Asíncronas.

## Single thread y Multi thread

Un hilo la unidad básica de ejecución de un proceso, cada que abres un programa como el navegador o tu editor
de código, se levanta un proceso en tu computadora e internamente este puede tener uno o varios hilos (threads) 
ejecutándose para que el proceso funcione.

## Operaciones de CPU y de Entrada y Salida

* Operaciones CPU: Aquellas que pasan el mayor tiempo consumiendo Procesos del CPU, por ejemplo, la escritura de ficheros.
* Operaciones de Entrada y Salida: Aquellas que pasan la mayor parte del tiempo esperando la respuesta de una 
petición o recurso, como la solicitud a una API o BD.

## Concurrencia y Paralelismo

* Concurrencia: cuando dos o más tareas progresan simultáneamente, pero en realidad se turnan para 
usar los recursos del sistema.
* Paralelismo: cuando dos o más tareas se ejecutan, al mismo tiempo en diferentes núcleos de CPU o hilos.

**Resumen**:
- ✅ Concurrencia = Alternancia rápida entre tareas (aunque solo una se ejecuta a la vez).
- ✅ Paralelismo = Ejecución simultánea de múltiples tareas en diferentes procesadores.

## Bloqueante y No Bloqueante

Se refiere a como la fase de espera de las operaciones afectan a nuestra aplicación:

* ***Bloqueante***: Son operaciones que no devuelven el control a nuestra aplicación hasta que se ha completado. 
Por tanto el thread queda bloqueado en estado de espera.
* ***No Bloqueante***: Son operaciones que devuelven inmediatamente el control a nuestra aplicación, independientemente
del resultado de esta. En caso de que se haya completado, devolverá los datos solicitados. En caso contrario 
(si la operación no ha podido ser satisfecha) podría devolver un código de error.

## Síncrono y Asíncrono
Se refiere a ¿cuándo tendrá lugar la respuesta?:

Síncrono: La respuesta sucede en el presente, una operación síncrona esperará el resultado.
Asíncrono: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.

Con lo anterior en JavaScript podemos tener:

Código síncrono y bloqueante o
Código asíncrono y no bloquenate

## JavaScript Síncrono

Cada operación se hace de una vez, bloqueando el flujo de ejecución, el hilo es bloqueado mientras espera la respuesta, 
cuando esta se procesa pasa a la siguiente operación y así sucesivamente al terminar todas las operaciones.

## JavaScript Asíncrono

Cada operación se ejecuta y devuelve inmediatamente el control al hilo, evitando el bloqueo, cuando cada operación termine 
se enviará una notificación de que ha terminado, es entonces cuando la respuesta se encolará para ser procesada.

---

## Mecanismos asíncronos en JavaScript

Para controlar la asincronía, JavaScript cuenta con algunos mecanismos:

* Callbacks.
* Promises.
* Async / Await.

### Callbacks

Una callback (llamada de vuelta) es una función que se ejecutará después de que otra lo haga.

Es un mecanismo para asegurar que cierto código no se ejecute hasta que otro haya terminado.

Al ser JavaScript un lenguaje orientado a eventos, las callbacks son una buena técnica para controlar la asíncronía,

La diferencia entre Call Stack y Callback Queue en JavaScript es clave para entender su modelo de concurrencia. 
Te lo explico de manera clara:

**Call Stack (Pila de llamadas)**:
Es una estructura LIFO (Last In, First Out) donde se almacenan las funciones que se están ejecutando en ese momento.
Cuando una función es llamada, se apila en el Call Stack. Cuando termina, se desapila.
Si una función llama a otra, la segunda se apila encima de la primera.

**Callback Queue (Cola de callbacks)**:
Es una lista de tareas que esperan ser ejecutadas cuando el Call Stack esté vacío.
Aquí van los callbacks de tareas asíncronas, como setTimeout, eventos del DOM o peticiones HTTP (fetch).
El Event Loop se encarga de mover los callbacks desde la Callback Queue al Call Stack cuando este último está vacío.

**Resumen rápido**:
- ✅ Call Stack → Ejecuta funciones sincrónicas inmediatamente.
- ✅ Callback Queue → Guarda tareas asíncronas para ejecutarlas después.

### Promises

Una promesa es un objeto que representa el resultado de una operación asíncrona y tiene 3 estados posibles:

* Pendiente.
* Resuelta.
* Rechazada.

Tienen la particularidad de que se pueden encadenar (then), siendo el resultado de una promesa, los datos de 
entrada de otra posible función.

Las promesas mantienen un código más legible y mantenible que las callbacks, además tienen un mecanismo para 
la detección de errores (catch) que es posible usar en cualquier parte del flujo de datos.

### Async Await

Las promesas fueron una gran mejora respecto a las callbacks para controlar la asincronía en JavaScript, sin 
embargo pueden llegar a ser muy verbosas a medida que se requieran más y más métodos .then().

Las funciones asíncronas (async / await) surgen para simplificar el manejo de las promesas.

La palabra async declara una función como asíncrona e indica que una promesa será automáticamente devuelta.

Podemos declarar como async funciones con nombre, anónimas o funciones flecha.

La palabra await debe ser usado siempre dentro de una función declarada como async y esperará de forma 
asíncrona y no bloqueante a que una promesa se resuelva o rechace.

```js
function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("3");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(8);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise("9");
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(10);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
};

funcionAsincronaExpresada();
```

---

# JSON

JSON (JavaScript Object Notation) es un formato ligero para intercambiar datos. Se basa en la sintaxis 
de los objetos de JavaScript, pero se usa ampliamente en distintos lenguajes de programación.

## 📌 ¿Para qué sirve JSON en JavaScript?

JSON se usa principalmente para:
- ✅ Enviar y recibir datos entre un servidor y un cliente (ejemplo: una API).
- ✅ Almacenar configuraciones o información estructurada.
- ✅ Compartir datos entre diferentes aplicaciones.

## 🚀 Cómo trabajar con JSON en JavaScript

1️⃣ Estructura de JSON
JSON está basado en pares clave-valor y usa:
- ✔️ Llaves {} para objetos
- ✔️ Corchetes [] para listas o arreglos

```js
{
  "nombre": "Juan",
  "edad": 25,
  "esEstudiante": true,
  "cursos": ["JavaScript", "HTML", "CSS"]
}
```

## 2️⃣ Convertir JSON a un objeto en JavaScript

Cuando recibimos un JSON en formato de texto (por ejemplo, desde una API), necesitamos 
convertirlo a un objeto para manipularlo en JavaScript. Para esto usamos JSON.parse().

```js
const jsonString = '{"nombre": "Juan", "edad": 25}';
const objetoJS = JSON.parse(jsonString); // Convierte JSON a objeto JavaScript

console.log(objetoJS.nombre); // "Juan"
console.log(objetoJS.edad);   // 25
```

## 3️⃣ Convertir un objeto de JavaScript a JSON

Si queremos enviar datos a un servidor, a menudo necesitamos convertir un objeto 
JavaScript a formato JSON. Para esto usamos JSON.stringify().

```js
const persona = {
  nombre: "María",
  edad: 30,
  ciudad: "Madrid"
};

const jsonData = JSON.stringify(persona); // Convierte objeto JS a JSON

console.log(jsonData);
// Resultado: '{"nombre":"María","edad":30,"ciudad":"Madrid"}'
```

## 4️⃣ JSON con Arrays y Objetos Anidados

Los valores en JSON pueden ser objetos anidados o arreglos.

```js
{
  "usuario": {
    "nombre": "Carlos",
    "email": "carlos@email.com"
  },
  "hobbies": ["fútbol", "lectura", "videojuegos"]
}
```

En JavaScript

```js
const data = `{
  "usuario": {
    "nombre": "Carlos",
    "email": "carlos@email.com"
  },
  "hobbies": ["fútbol", "lectura", "videojuegos"]
}`;

const obj = JSON.parse(data);
console.log(obj.usuario.nombre); // "Carlos"
console.log(obj.hobbies[1]); // "lectura"
```

## 💡 Resumen Final

- ✔️ JSON es un formato de intercambio de datos basado en texto.
- ✔️ Usa {} para objetos y [] para listas o arreglos.
- ✔️ JSON.parse() convierte JSON en un objeto de JavaScript.
- ✔️ JSON.stringify() convierte un objeto de JavaScript en JSON.

---

# Web API's

Las Web APIs (Application Programming Interfaces) en JavaScript son conjuntos de funciones y 
herramientas que los navegadores web proporcionan para que los desarrolladores puedan interactuar 
con diferentes características del navegador y del sistema.

En otras palabras, son funciones ya creadas que JavaScript puede usar para hacer tareas como:
✔️ Manipular el DOM (Document Object Model).
✔️ Hacer peticiones HTTP a servidores.
✔️ Guardar datos en el navegador.
✔️ Acceder a dispositivos como la cámara o el micrófono.

## 1. API del DOM

**¿Qué es?**
El DOM (Document Object Model) es la representación estructural del contenido HTML de una página web. La API 
del DOM permite acceder, modificar y manipular esta estructura, lo que es fundamental para crear interactividad.

```js
// Modificar el contenido de un elemento: Seleccionamos el elemento con id "miElemento" y cambiamos su contenido
document.getElementById("miElemento").innerText = "¡Hola, mundo!";

// Cambiar estilos dinámicamente: Al hacer clic en el botón, cambiaremos su color de fondo
document.getElementById("miBoton").addEventListener("click", function() {
    this.style.backgroundColor = "blue";
});
```

**Uso real:**
Imagina que tienes una lista de tareas y quieres actualizarla sin recargar la página. Usarías el DOM API 
para agregar o eliminar elementos de la lista conforme el usuario interactúa con la aplicación.

## 2. Fetch API

**¿Qué es?**
La Fetch API es la herramienta moderna para realizar peticiones HTTP desde el navegador. Permite 
comunicarse con servidores, obteniendo o enviando datos sin necesidad de recargar la página, 
utilizando promesas para gestionar las respuestas.

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) // Convertimos la respuesta a formato JSON
  .then(data => console.log(data))   // Mostramos los datos en consola
  .catch(error => console.error("Error:", error)); // Manejamos posibles errores
```

**Uso real:**
Puedes usarla para mostrar información actualizada en una aplicación de noticias, un panel 
de control o cualquier sistema que necesite datos en tiempo real.

## 3. Storage API: LocalStorage y SessionStorage

**¿Qué son?**
Estas APIs permiten almacenar datos en el navegador sin necesidad de un servidor.
- LocalStorage: Almacena datos de forma persistente, es decir, la información se mantiene incluso después 
de cerrar el navegador.
- SessionStorage: Guarda datos solo durante la sesión actual; al cerrar la pestaña o el navegador, los datos se eliminan.

```js
// Guardamos un dato en localStorage
localStorage.setItem("usuario", "Carlos");

// Recuperamos el dato almacenado
console.log(localStorage.getItem("usuario"));
```

**Uso real:**
Ideal para guardar configuraciones del usuario, como preferencias de tema (oscuro/claro) o 
información de formularios, sin necesidad de conectarse a una base de datos.

## 4. Geolocation API

**¿Qué es?**
Esta API permite acceder a la ubicación geográfica del usuario, siempre y cuando éste otorgue el permiso. 
Es muy útil para aplicaciones basadas en mapas, servicios de ubicación o aplicaciones del clima.

```js
navigator.geolocation.getCurrentPosition(position => {
  console.log("Latitud:", position.coords.latitude);
  console.log("Longitud:", position.coords.longitude);
});
```

**Uso real:**
Una aplicación de delivery o de recomendaciones locales puede usar la Geolocation API 
para personalizar la experiencia del usuario según su ubicación.

## 5. Notification API

**¿Qué es?**
La Notification API permite enviar notificaciones al usuario directamente desde el navegador. 
Esto es especialmente útil para alertar sobre eventos importantes o actualizaciones, 
incluso cuando el usuario no está en la pestaña de la aplicación.

```js
// Verificamos si ya se tiene permiso para mostrar notificaciones
if (Notification.permission === "granted") {
  new Notification("¡Hola! Tienes una nueva notificación.");
} else {
  // Si no se ha concedido el permiso, lo solicitamos
  Notification.requestPermission()
  .then(permission => {
    if (permission === "granted") {
      new Notification("¡Gracias! Ahora recibirás notificaciones.");
    }
  });
}
```

**Uso real:**
Ideal para aplicaciones de mensajería, recordatorios de eventos o cualquier sistema 
que requiera mantener al usuario informado en tiempo real.

## 6. Clipboard API

**¿Qué es?**
Esta API permite interactuar con el portapapeles del sistema, lo que facilita 
copiar o pegar texto de manera programática.

```js
navigator.clipboard.writeText("Texto copiado al portapapeles")
  .then(() => console.log("Texto copiado correctamente"))
  .catch(err => console.error("Error al copiar:", err));
```

**Uso real:**
Útil en aplicaciones donde se desee facilitar la copia de enlaces, códigos de descuento o 
información importante sin que el usuario tenga que hacerlo manualmente.

## 7. BOM (Browser Object Model)

**¿Qué es?**
El BOM (Browser Object Model) es un conjunto de objetos que permiten interactuar con el navegador. A diferencia del DOM, que solo maneja el contenido HTML, el BOM permite acceder a cosas como:

* ✔️ La URL actual.
* ✔️ Las ventanas y pestañas del navegador.
* ✔️ La consola y los alertas.
* ✔️ El historial de navegación.
* ✔️ La información sobre la pantalla y el dispositivo.

**💡 Ejemplos prácticos del BOM**

- **window** (El objeto principal del BOM): Todo en el BOM está dentro del objeto window, 
que representa la ventana del navegador.

```js
// 📌 Ejemplo: Mostrar una alerta en pantalla
window.alert("¡Hola! Esta es una alerta del BOM.");
// 📌 Ejemplo: Obtener el ancho y alto de la ventana
console.log("Ancho de la ventana:", window.innerWidth);
console.log("Alto de la ventana:", window.innerHeight);
```

- **location** (Información de la URL actual): El objeto window.location te permite obtener 
información sobre la URL y modificarla.

```js
// 📌 Ejemplo: Ver la URL actual
console.log("URL actual:", window.location.href);
// 📌 Ejemplo: Redirigir a otra página
window.location.href = "https://www.google.com";
// 📌 Ejemplo: Recargar la página
window.location.reload();
```

- **history** (Historial de navegación): El objeto window.history permite interactuar con el historial del navegador.

```js
// 📌 Ejemplo: Volver a la página anterior
window.history.back();
// 📌 Ejemplo: Ir a la página siguiente
window.history.forward();
// 📌 Ejemplo: Ir dos páginas atrás en el historial
window.history.go(-2);
```

- **navigator** (Información del navegador y el dispositivo): El objeto window.navigator permite 
obtener información sobre el navegador, el sistema operativo y la conexión del usuario.

```js
// 📌 Ejemplo: Saber qué navegador usa el usuario
console.log("Navegador:", window.navigator.userAgent);
// 📌 Ejemplo: Saber si el usuario está en línea o no
console.log("¿Está en línea?", window.navigator.onLine);
// 📌 Ejemplo: Saber el idioma del navegador
console.log("Idioma del navegador:", window.navigator.language);
```

# 8. CSSOM (CSS Object Model)

**¿Qué es?**
El CSSOM (CSS Object Model) es similar al DOM, pero en lugar de manejar el contenido HTML, 
se usa para interactuar y modificar los estilos CSS de una página.

- **Modificar estilos** con `style`: Puedes cambiar los estilos de un elemento dinámicamente usando .style.

```js
// 📌 Ejemplo: Cambiar el color de fondo de un botón
document.getElementById("miBoton").style.backgroundColor = "blue";
// 📌 Ejemplo: Ocultar un elemento
document.getElementById("miElemento").style.display = "none";
// 📌 Ejemplo: Cambiar el tamaño de la fuente de un párrafo
document.getElementById("miTexto").style.fontSize = "20px";
```

- **Obtener estilos calculados** con `getComputedStyle`: A veces, los estilos CSS están en una hoja de 
estilos externa y no en style. Para obtenerlos, usamos getComputedStyle.

```js
// 📌 Ejemplo: Saber el color de un botón
let boton = document.getElementById("miBoton");
let estilos = window.getComputedStyle(boton);
console.log("Color del botón:", estilos.backgroundColor);
```

- **Agregar o quitar clases** con `classList`: Otra forma eficiente de manejar estilos es usando 
clases CSS en lugar de modificar style directamente.

```js
// 📌 Ejemplo: Agregar y quitar clases dinámicamente
document.getElementById("miCaja").classList.add("activo");  // Agregar una clase
document.getElementById("miCaja").classList.remove("activo"); // Quitar una clase
document.getElementById("miCaja").classList.toggle("activo"); // Alternar entre agregar/quitar
// 📌 Ejemplo: Verificar si un elemento tiene una clase
let tieneClase = document.getElementById("miCaja").classList.contains("activo");
console.log("¿Tiene la clase activo?", tieneClase);
```

---

**Resumen Práctico**

- DOM API: Permite actualizar y modificar el contenido de la página, como cambiar 
textos, estilos o crear elementos nuevos.
- BOM permite interactuar con la ventana del navegador, la URL, el historial y la información del usuario.
- CSSOM permite modificar y obtener los estilos CSS de los elementos de la página.
- Fetch API: Facilita la comunicación con servidores, permitiéndote obtener datos 
en tiempo real y actualizar la interfaz sin recargar la página.
- Storage API: Te ayuda a guardar datos localmente en el navegador, ya sea de forma 
persistente (LocalStorage) o temporal (SessionStorage).
- Geolocation API: Ofrece la posibilidad de obtener la ubicación del usuario, ideal 
para aplicaciones basadas en ubicación.
- Notification API: Permite enviar alertas y notificaciones al usuario, mejorando la 
comunicación en tiempo real.
- Clipboard API: Facilita operaciones con el portapapeles, mejorando la experiencia 
de copiar y pegar contenido.