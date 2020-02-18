function mostrar()
{

	var num=0;
	var positivo=0;
	var contadorPositivo=0;
	var negativo=0;
	var contadorNegativo=0;
	var contadorCeros=0;
	var contadorPar=0;
	var respuesta="s";
	while(!(respuesta==="n")){
			num=parseInt(prompt("Ingrese el número"))
			if (num<0) {
				negativo += num;
				contadorNegativo++
				if((negativo%2)==0){
					contadorPar++
				}
			}else if (num>0&&num!=0) {
				positivo += num;
				contadorPositivo++
				if ((positivo%2)==0) {
					contadorPar++
				}
			}else{
				contadorCeros++
			}
			respuesta=prompt("¿Desea seguir sumando número?","s o n")
		}	
	


document.write(`1. la suma de los negativos : ${negativo} </br>`)
document.write(`2. La suma de los positivos: ${positivo}</br>`)
document.write(`3. Cantidad de positivos: ${contadorPositivo}</br>`)
document.write(`4. Cantidad de negativos: ${contadorNegativo}</br>`)
document.write(`5. Cantidad de ceros: ${contadorCeros}</br>`)
document.write(`6. Cantidad de números pares: ${contadorPar}</br>`)
document.write(`7. Promedio de positivos: ${(contadorPositivo + contadorNegativo + contadorCeros)/contadorPositivo} </br>`)
document.write(`8. Promedio de negativos: ${(contadorPositivo + contadorNegativo + contadorCeros)/contadorNegativo} </br>`)
document.write(`9. Diferencia entre positivos y negativos: ${positivo + negativo}</br>`)

}//FIN DE LA FUNCIÓN