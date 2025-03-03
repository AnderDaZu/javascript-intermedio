const listaDatosPrimitivos = [
    'string', 'number', 'boolean', 'NaN', 'null', 'undefined'
];

export const validarDatoPrimitivo = (valor, tipo) => {
    if (!listaDatosPrimitivos.includes(tipo)) {
        return {
            ejecutar: false, 
            mensaje: `Ingreso tipo de dato >${tipo}< debes ingresar valor valido para tipo de dato\n`, listaDatosPrimitivos,
        };
    }
    
    if (typeof valor !== tipo) {
        return {
            ejecutar: false, 
            mensaje: `Ingreso un valor tipo ${typeof valor}, debes ingresar un valor tipo ${tipo}`,
        };
    }
    
    return {
        ejecutar: true,
    };
}
