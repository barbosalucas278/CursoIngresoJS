function mostrar()
{
//tomo la edad  
let edad;
let estado;
edad = parseInt(document.getElementById("edad").value)
estado = document.getElementById("estadoCivil").value

if ((edad<18) && (estado="Soltero")) {
    alert("Es muy pequeño para NO estar soltero")
}else {
    alert("bienvenido")
}
	


}//FIN DE LA FUNCIÓN