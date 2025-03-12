const listaUsuariosJSON = `[
    { "nombre": "Juan", "edad": 25, "activo": true },
    { "nombre": "Ana", "edad": 30, "activo": false },
    { "nombre": "Luis", "edad": 22, "activo": true },
    { "nombre": "Marta", "edad": 35, "activo": false }
]`;

const listaUsuarios = JSON.parse(listaUsuariosJSON);

console.log('listaUsuariosJSON:', listaUsuariosJSON);
console.log('listaUsuarios:', listaUsuarios);

const validar = (valor, tipoDato, mensaje, esPrimitivo) => {
    if (typeof esPrimitivo !== 'undefined' && esPrimitivo) {
        if (typeof valor !== tipoDato) {
            console.error(`Error: debes ingresar ${mensaje} valido(a)`)
            return false;
        }
    } else {
        if (!(valor instanceof (tipoDato === 'array' ? Array : Object))) {
            console.error(`Error: debes ingresar ${mensaje} valido(a)`);
            return false;
        }
    }
    return true;
}

const obtenerUsuariosActivos = listaUsuarios => {
    // if (!(listaUsuarios instanceof Array)) return console.error('Error: debes ingresar una lista de usuarios valida');
    if (!validar(listaUsuarios, 'array', 'una lista de usuarios activos', false)) return;
    
    return listaUsuarios.filter(el => el.activo);
}
const formatearInformacionUsuarioActivos = usuariosActivos => {
    // if (!(usuariosActivos instanceof Array)) return console.error('Error: debes ingresar una lista de usuarios activos valida');
    if (!validar(usuariosActivos, 'array', 'una lista de usuarios activos', false)) return;

    return usuariosActivos.map(el => `${el.nombre} (${el.edad} años)`)
}

console.log('usuarios activos:', obtenerUsuariosActivos({}));
console.log('usuarios activos formateado:', formatearInformacionUsuarioActivos(obtenerUsuariosActivos(listaUsuarios)));

