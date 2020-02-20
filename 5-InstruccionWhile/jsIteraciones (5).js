function mostrar()
{
var sexo = prompt("ingrese f ó m .");
var femenino = "Femenino";
var masculino = "Masculino";
while (!(sexo=="f"||sexo=="m")){
	alert("El dato ingresado es incorrecto, Femenino = f  ò  Masculino = m")
	sexo=prompt("Ingrese f ó m")
}
if (sexo=="f") {
	document.getElementById('Sexo').value=femenino;
}else{
	document.getElementById('Sexo').value=masculino;
}

}//FIN DE LA FUNCIÓN