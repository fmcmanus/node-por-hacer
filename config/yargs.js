const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripión de la tarea por hacer '
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de la tarea', {
        descripcion,
        completado,
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion,
    })
    .help()
    .argv;

module.exports = {
    argv
}