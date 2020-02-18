function mostrar()
{	
	var num=0;
	var positivo= 0;
	var negativo= 1;
	var respuesta="s";
	while(!(respuesta==="n")){
			num=parseInt(prompt("Ingrese el número"))
			if (num<0) {
				negativo = negativo*num;
			}else {
				positivo += num;
			}
			respuesta=prompt("¿Desea seguir sumando número?","s o n")
		}	
	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN