function mostrar()
{
var sexo = prompt("ingrese f ó m .");
var femenino = "f";
var masculino = "m";
while (!(sexo=="f"||sexo=="m")){
	alert("El dato ingresado es incorrecto, Femenino = f  ||  Masculino = m")
	sexo=prompt("Ingrese f ó m")
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN