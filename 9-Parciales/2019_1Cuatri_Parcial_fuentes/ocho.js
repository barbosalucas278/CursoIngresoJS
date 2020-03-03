//Bienvenidos.
//Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y 
//un número entre -100 y 100 (validar) hasta que el usuario quiera e informar 
//al terminar el ingreso por document.write:
//a) La cantidad de números pares.
//b) La cantidad de números impares.
//c) La cantidad de ceros.
//d) El promedio de todos los números positivos ingresados.
//e) La suma de todos los números negativos.
//f) El número y la letra del máximo y el mínimo.

//Testeo con los siguientes datos
//( d , -150(mal) , -50(bien))
//( z , 0)
//( g , 20)
//( a , 150(mal) , 0(bien))
// ( b , 3)
// ( k , 7) 
function mostrar() {
    var num;
    var letra;
    var numPar = 0;
    var numImpar = 0;
    var contadorCero = 0;
    var contadorPositivo = 0;
    var acumPositivo = 0;
    var acumNegativo = 0;
    var numMax;
    var letraMax;
    var numMin;
    var letraMin;
    var promedio;
    var seguir = true;
    var flag = 0;

    do {
        letra = prompt("Ingrese una letra");
        num = parseInt(prompt("Ingrese un número."));
        while (isNaN(num) || num < -100 || num > 100) {
            num = parseInt(prompt("Número incorrecto, ingrese un número."));
        }

        if (flag == 0) {
            numMax = num;
            numMin = num;
            letraMax = letra;
            letraMin = letra;
            flag = 1;
        }

        if (num >= numMax || num > numMin) {
            if (num > 0) {
                contadorPositivo++;
                acumPositivo = acumPositivo + num;
            } else if (num < 0) {
                acumNegativo = acumNegativo + num;
            } else {
                contadorCero++
            }

            if (num >= numMax) {
                numMax = num;
                letraMax = letra;
            }
        } else if (num <= numMin || num < numMax) {
            if (num > 0) {
                contadorPositivo++;
                acumPositivo = acumPositivo + num;
            } else if (num < 0) {
                acumNegativo = acumNegativo + num;
            } else {
                contadorCero++
            }

            if(num<=numMin){
                numMin=num;
                letraMin=letra;
            }

        }

        if(num%2==0){
            numPar++
        }else {
            numImpar++
        }

        promedio = acumPositivo / contadorPositivo;

        seguir = confirm("¿Desea continuar?");
    } while (seguir == true);
document.write(`La cantidad de números pares ${numPar} </br>`);
document.write(`La cantidad de números impares ${numImpar}</br>`);
document.write(`La cantidad de ceros ${contadorCero}</br>`);
document.write(`El promedio de todos los números positivos ingresados ${promedio}</br>`);
document.write(`La suma de todos los números negativos ${acumNegativo}</br>`);
document.write(`El número Maximo ${numMax}</br> la letra máximo ${letraMax}</br> el número mínimo ${numMin}</br> la letra minima ${letraMin}`);
}
