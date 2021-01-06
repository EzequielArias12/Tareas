let process = require('process') //modulo: "process" //este seria el Front end
let moduloTareas = require('./tareas');
let comando = process.argv[2];
switch (comando) {
    case 'listar':
        let tareas = moduloTareas.leerJSON();
        if (tareas.length === 0) {
            console.log("La lista de tareas está vacía")
        } else {
            console.log("----------------------------")
            console.log("Este es tu listado de tareas")
            console.log("----------------------------")
            for (let i = 0; i < tareas.length; i++) {
                console.log("Titulo de la tarea: " + tareas[i].titulo + ' - estado: ' + tareas[i].estado)
            }
        }
        break;
    case 'agregar':
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.escribirJSON(titulo,estado)
        break
    case 'deshacer' :
        moduloTareas.deshacer()
        break
    case 'buscar' :
        let resultado = moduloTareas.buscarTarea(process.argv[3])
        resultado.forEach(tarea => {
            console.log(tarea)
        });
        break
    default:
        break;
}