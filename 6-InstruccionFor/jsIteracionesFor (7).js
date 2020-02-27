function mostrar() {
    var rep = parseInt(prompt("Ingrese un numero de repeticiones."))
    var num;
    var contadorDiv = 0
    while (isNaN(rep) || rep < 0) {
        rep = parseInt(prompt("Ingrese el número de repeticiones nuevamente"));
    }
    for (num = 1; num <= rep; num++) {
        if(rep % num == 0){
            document.write(`${rep / num} </br>`)
            contadorDiv++
        }
    }
    document.write(`La cantidad de divisores encontrados es de: ${contadorDiv}`)
    }//FIN DE LA FUNCIÓN