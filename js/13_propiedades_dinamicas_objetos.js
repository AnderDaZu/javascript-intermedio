/*
    📌 ¿Qué son las propiedades dinámicas en objetos en JavaScript?
    Las propiedades dinámicas en objetos en JavaScript permiten crear, modificar 
    o acceder a propiedades de un objeto de manera dinámica en tiempo de ejecución. 
    En lugar de definir las propiedades de un objeto de manera estática, podemos utilizar 
    variables o expresiones para establecer sus nombres y valores.

    🛠 Casos de uso en desarrollo
    
    🚀 1. Generación dinámica de objetos (API Responses)
    En muchas aplicaciones, los datos vienen desde una API y no sabemos de antemano cuáles 
    serán las claves del objeto. Las propiedades dinámicas nos ayudan a manejar esta incertidumbre.

    ⚛️ 2. Uso en React para manejar formularios dinámicos
    En React, los formularios suelen manejar múltiples entradas con un solo useState. Las propiedades 
    dinámicas permiten actualizar el estado sin escribir una función por cada campo.

        import { useState } from "react";
        function Formulario() {
        const [formData, setFormData] = useState({});
        const handleChange = (e) => {
            setFormData({
            ...formData,
            [e.target.name]: e.target.value // Propiedad dinámica
            });
        };
        return (
            <form>
            <input name="nombre" onChange={handleChange} placeholder="Nombre" />
            <input name="email" onChange={handleChange} placeholder="Email" />
            <p>{JSON.stringify(formData)}</p>
            </form>
        );
        }
        export default Formulario;

    🛒 3. Creación de objetos de configuración en e-commerce
    En tiendas en línea, los productos tienen atributos dinámicos. Por ejemplo, 
    un administrador podría definir propiedades como color, talla, stock, etc., y 
    queremos que se agreguen automáticamente al objeto del producto.

        function agregarPropiedad(objeto, clave, valor) {
        objeto[clave] = valor;
        }
        const producto = { nombre: "Camiseta" };
        agregarPropiedad(producto, "color", "rojo");
        agregarPropiedad(producto, "talla", "M");
        console.log(producto); // { nombre: "Camiseta", color: "rojo", talla: "M" }

    🎯 Conclusión
    Las propiedades dinámicas en JavaScript nos permiten hacer que los objetos sean 
    más flexibles y adaptables. Son especialmente útiles cuando trabajamos con datos 
    externos (APIs), formularios en React, configuraciones dinámicas y muchas otras 
    situaciones donde las claves de los objetos pueden cambiar en tiempo de ejecución. 🚀
*/

export function propiedadesDinamicasObjetos() {
    
    console.log(`Clase de propiedades dinamicas...`);

    const personas = {};
    const nombres = ['Anderson', 'Lizdayne', 'Luis', 'María', 'Karen'];

    const numeroAleatorio = Math.floor(Math.random() * 100);
    personas[`id_${numeroAleatorio}`] = 'Nelson';

    nombres.forEach((nombre, indice) => { personas[`id_${indice}`] = nombre; }); // personas['id_0'] = 'Anderson'

    console.log('nombres: \n', nombres, '\npersonas:', personas);

}
