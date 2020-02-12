function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let n1;
	n1 = Math.floor(Math.random()*(10 - 1)+1)
	alert(n1)
//Comparaciòn de notas

if(n1>=9){
	alert("EXCELENTE")
}else if (n1<9 && n1>=4) {
	alert("APROBADO")
}else {
	alert("Vamos, la pròxima se puede")
}

}//FIN DE LA FUNCIÓN