function mostrar()
{ 
var laHora = document.getElementById('hora').value;

	if (laHora>=7&&laHora<=11) {
		alert("Es de mañana")
	}else if (laHora>=12&&laHora<=19){
		alert("Es de tarde")
	}else if (laHora>=20&&laHora<=24) {
		alert("Es de noche")
	}else if (laHora>=0&&laHora<=6) {
		alert("Es de noche")
	}else if (!(laHora>=0&&laHora<=24)) {
		alert("La hora no existe")
	}
	

}//FIN DE LA FUNCIÓN
