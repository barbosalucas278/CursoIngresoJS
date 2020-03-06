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
    var marca;  //
    var marcaMax;   //
    var peso; //
    var temp;  //
    var tempPar = 0; //
    var pesoMax;    //
    var pesoMin;    //
    var productosCero = 0; //
    var contadorProducto = 0;   //
    var pesoTotal = 0;  //
    var promedioPeso = 0;
    var flag = 0;
    var seguir = true;
    var maximoPeso;
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

        //------------------------------Paridad de temperaturas--------------------------------

        if (temp % 2 == 0) {
            tempPar++
        }

        //---------------------------- Peso min y max------------------------------------------
        if (contadorProducto == 0 || peso > pesoMax) {
            pesoMax = peso;
            marcaMax = marca;
        }
        if (contadorProducto == 0 || peso < pesoMin) {
            pesoMin = peso;
        }

        //----------------------------productos cero grados-----------------------------------
        if (temp < 0) {
            productosCero++
        }
        //---------------------------marca mas pesada y no congaldo------------------------------

        if((temp>0)&&(flag==0 || peso>maximoPeso)){
            maximoPeso=peso;
            marcaMax=marca;
            flag=1;
        }

        contadorProducto++
        pesoTotal = pesoTotal + peso;
        seguir = confirm("¿Desea continuar?");
    } while (seguir == true);
    promedioPeso = (pesoTotal / contadorProducto);
    document.write(`La marca del producto más pesado no congelado: ${marcaMax} Peso:  ${maximoPeso} </br>`);
    document.write(`La cantidad de temperaturas pares. ${tempPar} </br>`);
    document.write(`La cantidad de productos que se conservan a menos de 0 grados. ${productosCero}</br>`);
    document.write(`El promedio del peso de todos los productos. ${promedioPeso}</br>`);
    document.write(`El peso máximo ${pesoMax} y el mínimo. ${pesoMin}</br>`);

}
