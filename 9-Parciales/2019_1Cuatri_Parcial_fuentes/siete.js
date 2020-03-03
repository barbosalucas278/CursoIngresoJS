//Bienvenidos.
//Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) ,
// el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
//a) El promedio de las alturas totales.
//b) La altura más baja y el sexo de esa persona.
//c) La cantidad de muheres que su altura supere los 190 centimetros.


function mostrar() {
    var altura;
    var sexo;
    var contadorAltura = 0;
    var acumuladorAlturas = 0;
    var alturaMin;
    var sexoMin;
    var contadorAlturaMas = 0;
    var promedio;
    var seguir = true;
    var flag = 0;

    for (i = 0; i < 5; i++) {
        altura = parseInt(prompt("Ingrese la altura."));
        while (isNaN(altura) || altura < 0 || altura > 250) {
            altura = parseInt(prompt("altura incorrecta, Ingrese la altura nuevamente."));
        }
        contadorAltura++
        acumuladorAlturas = acumuladorAlturas + altura;
        sexo = prompt("Ingrese el sexo.");
        while (!(sexo == 'f' || sexo == 'm')) {
            sexo = prompt("Sexo incorrecto, ingrese nuevamente el sexo.");
        }
        if (altura > 190 && sexo == 'f') {
            contadorAlturaMas++
        }
        if (flag == 0 || altura <= alturaMin) {
            alturaMin = altura;
            sexoMin = sexo;
            flag = 1;
        }
    }
    promedio = acumuladorAlturas / contadorAltura;
    document.write(`El promedio de las alturas totales${promedio}</br>`);   //
    document.write(`La altura más baja  ${alturaMin} y el sexo de esa persona ${sexoMin}</br>`); //
    document.write(`La cantidad de mujeres que su altura supere los 190 centimetros ${contadorAlturaMas}</br>`);
}
