function mostrar()
{	
	var num=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";
	while(!(respuesta==="no")){
			num += num=parseInt(prompt("Ingrese el número"))
			if (num<0) {
				negativo*num;
			}else {
				positivo+num;
			}
			respuesta=prompt("¿Desea seguir sumando número?","si o no")
		}	
	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN