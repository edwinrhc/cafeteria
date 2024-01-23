

function tarea(done){
    console.log('Mi primera tarea .... ');
    done(); // Aqui finaliza la tarea
}

//Exportamos y como vamos a mandar a llamar la tarea
exports.tarea = tarea;

// para llamar la primera tarea primero abrimos la consola y escribimos lo siguiente
// gulp tarea