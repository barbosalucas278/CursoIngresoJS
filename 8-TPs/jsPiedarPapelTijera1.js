/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var jugador;
function comenzar() {
    eleccionMaquina = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(eleccionMaquina)
}//FIN DE LA FUNCIÓN

function piedra() {
    jugador = 1;
    if (jugador > eleccionMaquina) {
        alert("Ganaste campeon !")
    } else if (jugador < eleccionMaquina) {
        alert("Perdiste :(")
    } else {
        alert("Empate!!!")
    }
    comenzar();

}//FIN DE LA FUNCIÓN

function papel() {
    jugador = 2;
    if (jugador > eleccionMaquina) {
        alert("Ganaste campeon !")
    } else if (jugador < eleccionMaquina) {
        alert("Perdiste :(")
    } else {
        alert("Empate!!!")
    }
    comenzar();
}//FIN DE LA FUNCIÓN

function tijera() {
    jugador = 3;
    if (jugador > eleccionMaquina) {
        alert("Ganaste campeon !")
    } else if (jugador < eleccionMaquina) {
        alert("Perdiste :(")
    } else {
        alert("Empate!!!")
    }
    comenzar();
}//FIN DE LA FUNCIÓN