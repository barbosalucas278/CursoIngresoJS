function mostrar()
{
var contador=0;
var acumulador=0;
var respuesta='si';
	while(!(respuesta==="no")){
		acumulador += acumulador=parseInt(prompt("Ingrese el número"))
		contador++
		respuesta=prompt("¿Desea seguir sumando número?","s o n")
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN