function mostrar()
{
    var rep = parseInt(prompt("Ingrese un nùmero"));
    var contadorPar = 0
    var num;
    while(isNaN(rep)||rep<0){
        rep = parseInt(prompt("Inngrese el número de repeticiones nuevamente"));
    }
    for (num = 1; num <= rep; num++) {
        if (num % 2 == 0) {
            document.write(`${num} </br>`);
            contadorPar++
        }
    }
    document.write(`La cantidad de nùmeros pares es: ${contadorPar}`)


}//FIN DE LA FUNCIÓN