//Realizar el algoritmo que permita ingresar la marca del producto, 
//el peso el cual debe ser entre 1 y 100 (validar),
//la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera 
//e informar al terminar el ingreso por document.write:

//a) La cantidad de temperaturas pares.
//b) La marca del producto más pesado
//c) La cantidad de productos que se conservan a menos de 0 grados.
//d) El promedio del peso de todos los productos.
//f) El peso máximo y el mínimo.

function mostrar() {
    var marca;
    var marcaMax;
    var peso;
    var temp;
    var tempPar = 0;
    var pesoMax;
    var pesoMin;
    var productosCero = 0;
    var contadorProducto = 0;
    var pesoTotal = 0;
    var promedioPeso = 0;
    var flag = 0;
    var seguir = "s";
    do {
        marca = prompt("Ingrese la Marca.");
        peso = parseInt(prompt("Ingrese el peso del producto."));
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("peso incorrecto, Ingrese nuevamente el peso del producto."));
        }
        temp = parseInt(prompt("Ingrese la temperatura del producto."));
        while (isNaN(temp) || temp < (-30) || temp > 30) {
            temp = parseInt(prompt("Temperatura incorrecta, Ingrese la temperatura del producto."));
        }

        if (flag == 0) {
            pesoMax = peso;
            marcaMax = marca;
            pesoMin = peso;
            flag = 1;
        }
        if (peso < pesoMax || peso > pesoMin) {
            contadorProducto++;
            pesoTotal = pesoTotal + peso;
            if (peso >= pesoMax) {
                pesoMax = peso;
                marcaMax = marca;
                contadorProducto++
                pesoTotal = pesoTotal + peso;
            }
        } else if (peso > pesoMin || peso < pesoMax) {
            contadorProducto++;
            pesoTotal = pesoTotal + peso;
            if (peso <= pesoMin) {
                pesoMin = peso;
                contadorProducto++
                pesoTotal = pesoTotal + peso;
            }
        }
        if (temp % 2 == 0) { //temp par
            tempPar++
        }
        if (temp < 0) { //temp < 0
            productosCero++
        }


        seguir = prompt("¿Desea continuar?");
    } while (seguir == "s");
    promedioPeso = (pesoTotal / contadorProducto);
    document.write(`La cantidad de temperaturas pares. ${tempPar} </br>`);
    document.write(`La marca del producto más pesado ${marcaMax}</br>`);
    document.write(`La cantidad de productos que se conservan a menos de 0 grados. ${productosCero}</br>`);
    document.write(`El promedio del peso de todos los productos. ${promedioPeso}</br>`);
    document.write(`El peso máximo ${pesoMax} y el mínimo. ${pesoMin}</br>`);
    console.log(pesoTotal)
    console.log(contadorProducto)

}
