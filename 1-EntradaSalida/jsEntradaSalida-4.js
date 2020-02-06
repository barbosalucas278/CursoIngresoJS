/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
let nom;
nom = prompt("Ingrese su nombre","pepe")
document.getElementById("elNombre").value = nom
}

