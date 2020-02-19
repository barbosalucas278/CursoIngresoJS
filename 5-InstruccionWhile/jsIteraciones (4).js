function mostrar()
{
var numero = parseInt(prompt("ingrese un número entre 0 y 9.")); 
//Otra manera de resolver el ejercicio
//while (numero>0||numero<9|| isNaN(numero))
while (!(numero>=0&&numero<=9)){
	alert("EL numero es invalido");
	numero= parseInt(prompt("Ingrese nuevamente un numero entre 0 y 9"));
}
document.getElementById("Numero").value = "Su número es " + numero+" y es válido";

}//FIN DE LA FUNCIÓN

