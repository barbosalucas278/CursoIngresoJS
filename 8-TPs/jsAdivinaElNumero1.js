/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos = 0;
var numero;


function comenzar() {
  //Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.floor(Math.random() * (100 - 1) + 1);
}

function verificar() {

  do{
    //Ingreso el numero
    numero = parseInt(document.getElementById("numero").value);
    //coloco una variable flag para poder usar el while y se pueda parar en cada verificación.
    flag = 0;
    //utilizo un IF para poder comparar el numero ingresado por el numero secreto.
    if (numero > numeroSecreto) {
    alert(`Se paso un poquito... ${numeroSecreto}`)
    //aumento el contadorIntentos con cada intento.
    contadorIntentos++
    //muestro la cantidad de intentos.
    document.getElementById("intentos").value = contadorIntentos;
    //cambio el valor de la flag para poder cerrar el while y volver a empezar.
    flag=1;
  } else if (numero < numeroSecreto) {
    alert(`Le falta un poquito...${numeroSecreto}`)
    contadorIntentos++
    document.getElementById("intentos").value = contadorIntentos;
    flag=1;
  } else if (numero === numeroSecreto) {
    alert(`Usted es un ganador!!!${numeroSecreto}`)
    contadorIntentos++
    document.getElementById("intentos").value = contadorIntentos;
    flag = 1;
  }
    //condicion dle while para poder cerrarlo y volver a empezar.
  } while (flag == 0);

}