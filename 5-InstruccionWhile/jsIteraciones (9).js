function mostrar() {
	//VARIABLES
	var num;
	var respuesta = 's';
	var max;
	var min;
	var flag = 0;
	do {
		num = parseInt(prompt("Ingrese el número"))
		while (isNaN(num)) {
			num = parseInt(prompt("No es un nùmero,Ingrese el número"))
		}
		if (flag == 0 || num > max) {
			max = num
		}
		if (flag == 0 || num < min) {
			min = num
			flag = 1
		}
		respuesta = prompt("¿Desea seguir sumando número?", "s o n")
	} while (respuesta == 's')
	//SALIDA DEL RESULTADO
	document.getElementById("minimo").value = min;
	document.getElementById("maximo").value = max;

}//FIN DE LA FUNCIÓN



		//OPCION 3
		//while(!(respuesta==="n"))
		//{
		//	contador = parseInt(prompt("Ingrese el número")) 
		//	if(contador>=max||contador>min){
		//		max=contador
		//	}else if(contador<=max&&contador<=min){
		//		min=contador
		//	}
		//	respuesta=prompt("¿Desea seguir sumando número?","s o n")
		//	
		//}