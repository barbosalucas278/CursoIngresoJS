function mostrar()
{
	//VARIABLES
	var contador=0;
	var respuesta='s';
	var min;
	var max=0;

	while(!(respuesta==="n"))
	{
		contador = parseInt(prompt("Ingrese el número")) 
		if(contador>min||contador>=max){
			max=contador
		}else if(contador<=max||contador<=min){
			min=contador
		}
		respuesta=prompt("¿Desea seguir sumando número?","s o n")
	
	}

//SALIDA DEL RESULTADO
document.getElementById("minimo").value = min;
document.getElementById("maximo").value = max;

}//FIN DE LA FUNCIÓN