var eleccionMaquina;
var contadorDeEmpates = 0;
var contadorDeGanadas = 0;
var contadorDePerdidas = 0;
var jugador;

function comenzar() {
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random() * (4 - 1) + 1);
	console.log(eleccionMaquina)
}//FIN DE LA FUNCIÓN

function piedra() {
	jugador = 1;
	if (jugador > eleccionMaquina) {
		alert("Ganaste campeon !")
		contadorDeGanadas++
		document.getElementById("ganadas").value = contadorDeGanadas;
	} else if (jugador < eleccionMaquina) {
		alert("Perdiste :(")
		contadorDePerdidas++
		document.getElementById("perdidas").value = contadorDePerdidas;
	} else {
		alert("Empate!!!")
		contadorDeEmpates++
		document.getElementById("empatadas").value = contadorDeEmpates;
	}
	comenzar();

}//FIN DE LA FUNCIÓN

function papel() {
	jugador = 2;
	if (jugador > eleccionMaquina) {
		alert("Ganaste campeon !")
		contadorDeGanadas++
		document.getElementById("ganadas").value = contadorDeGanadas;
	} else if (jugador < eleccionMaquina) {
		alert("Perdiste :(")
		contadorDePerdidas++
		document.getElementById("perdidas").value = contadorDePerdidas;
	} else {
		alert("Empate!!!")
		contadorDeEmpates++
		document.getElementById("empatadas").value = contadorDeEmpates;
	}
	comenzar();
}//FIN DE LA FUNCIÓN

function tijera() {
	jugador = 3;
	if (jugador > eleccionMaquina) {
		alert("Ganaste campeon !")
		contadorDeGanadas++
		document.getElementById("ganadas").value = contadorDeGanadas;
	} else if (jugador < eleccionMaquina) {
		alert("Perdiste :(")
		contadorDePerdidas++
		document.getElementById("perdidas").value = contadorDePerdidas;
	} else {
		alert("Empate!!!")
		contadorDeEmpates++
		document.getElementById("empatadas").value = contadorDeEmpates;
	}
	comenzar(); //declaro la funcion comenzar() al final para que vuelva a empezar y 
	//generarse el numero aleatorio entre 1 y 3.
}//FIN DE LA FUNCIÓN

function mostrarResultado() {

}