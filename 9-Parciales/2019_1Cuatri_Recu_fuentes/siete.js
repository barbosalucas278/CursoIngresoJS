//Bienvenidos.
//Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,
//con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
//a) El promedio de los kilos totales.
//b) El mas liviano y su sabor
//c) La cantidad de sabor carne y el promedio de kilos de sabor carne


function mostrar() {
    var sabor; //
    var contadorCarne = 0; //
    var acumuladorCarne = 0; //
    var contadorBolsas = 0;//
    var acumuladorPeso = 0;//
    var peso; //
    var pesoMin; //
    var saborMin;   //
    var promedioPeso = 0;
    var promedioCarne = 0; //
    var flag = 0; //

    for (i = 0; i < 10; i++) {
        peso = parseInt(prompt("Ingrese el peso de la bolsa."))
        while (isNaN(peso) || peso < 0 || peso > 500) {
            peso = parseInt(prompt("Peso incorrecto, vuelva a ingresar el peso."))
        }
        sabor = prompt("Ingrese el sabor.")
        while (!(sabor == "carne" || sabor == "vegetales" || sabor == "pollo")) {
            sabor = prompt("Sabor incorrecto, vuelva a ingresar el sabor")
        }
        if (flag == 0 || peso < pesoMin) {
            pesoMin = peso;
            saborMin = sabor;
            flag = 1;
        }
        switch (sabor) {
            case 'carne':
                acumuladorCarne = acumuladorCarne + peso;
                contadorBolsas++
                acumuladorPeso = acumuladorPeso + peso;
                contadorCarne++
                break;
            case 'vegetales':
                contadorBolsas++
                acumuladorPeso = acumuladorPeso + peso;
                break;
            case 'pollo':
                contadorBolsas++
                acumuladorPeso = acumuladorPeso + peso;
                break;
        }
    }
    promedioPeso = acumuladorPeso / contadorBolsas;
    promedioCarne = acumuladorCarne / contadorCarne;

    alert(`a) El promedio de los kilos totales: ${promedioPeso} `);
    alert(`b) El mas liviano: ${pesoMin} y su sabor: ${saborMin}`);
    alert(`c) La cantidad de sabor carne ${contadorCarne} \nel promedio de kilos de sabor carne: ${promedioCarne}`);

}
