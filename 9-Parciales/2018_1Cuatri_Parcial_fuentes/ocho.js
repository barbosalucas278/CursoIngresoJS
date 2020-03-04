//Bienvenidos.
//Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
//(validar) 
//hasta que el usuario quiera e informar al terminar el ingreso por document.write:
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
//( b , 3)
//( k , 7)
function mostrar() {
    var contadorPar = 0;    //
    var contadorImpar = 0;  //
    var contadorCeros = 0;  //
    var acumuladorNegativo = 0;  //
    var acumuladorPositivo = 0;     //
    var contadorPositivo = 0;       //
    var promedio;
    var letra;      //
    var letraMin;   //
    var letraMax;
    var letraMinusculaMin;   //
    var num;    //
    var min;    //
    var max;  //
    var numMinuscula;  //
    var seguir = 's'; //
    var flag = 0; // una flag para poder almacenar por primera vez un max y un min.
    var flagMinus = 0;
    do {
        letra = prompt("Ingrese una letra.");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) { //agregada la validaciòn de una letr minùscula y mayùscula
            letra = prompt("Letra incorrecta, ingrese nuevamente una letra.");
        }

        num = parseInt(prompt("Ingrese un número."));
        while (isNaN(num) || num > 100 || num < -100) { //validación completada
            num = parseInt(prompt("Número incorrecto, Ingrese un número nuevamente."));
        }
        if ((letra >= 'a' || letra <= 'z') && (flagMinus == 0 || num < numMinuscula)) {
            numMinuscula = num;
            letraMinusculaMin = letra;
            flagMinus = 1;
        }

        if (flag == 0) {
            min = num;
            max = num;
            letraMin = letra;
            numMinuscula = num;
            letraMax = letra;
            flag = 1;
        }

        if (num > min || num >= max) {
            if (num > 0) { //positivo maximo
                contadorPositivo++
                acumuladorPositivo = acumuladorPositivo + num;
            } else if (num < 0) { // negativo maximo
                acumuladorNegativo = acumuladorNegativo + num;
            } else if (num == 0) {
                contadorCeros++ //ceros
            }
            if (num >= max) { // maximo
                max = num;
                letraMax = letra;
            }

        } else if (num <= min) {
            if (num > 0) { //positivo minimo
                contadorPositivo++;
                acumuladorPositivo = acumuladorPositivo + num;
            } else if (num < 0) { //negativo minimo
                acumuladorNegativo = acumuladorNegativo + num;
            } else if (num == 0) {
                contadorCeros++ //ceros
            }
            min = num;          //minimo

            if (letra <= letraMinusculaMin) { // letra minuscula menor.
                letraMinusculaMin = letra;
                letraMin = letra;
            } else {
                letraMin = letra;
            }

        }

        if (num % 2 == 0) { //numeros par o impar
            contadorPar++
        } else {
            contadorImpar++
        }
        seguir = confirm("¿Desea continuar?");
    } while (seguir == true);
    promedio = acumuladorPositivo / contadorPositivo;

    document.write(`La cantidad de números pares es de: ${contadorPar} </br>`);
    document.write(`La cantidad de números impares es de: ${contadorImpar}</br>`);
    document.write(`La cantidad de ceros es de: ${contadorCeros}</br>`);
    document.write(`El promedio de todos los número positivos ingresados es de: ${promedio}</br>`);
    document.write(`La suma de todos los números negativos es de: ${acumuladorNegativo}</br>`);
    document.write(`Número máximo:${max}</br> Letra máxima: ${letraMax}</br>Número mínimo:${min} </br>Letramínima: ${letraMin} </br>`);
    document.write(`El numero menor de las minusculas ${numMinuscula} la letra de la menor de las minùsculas ${letraMinusculaMin}`)
}
