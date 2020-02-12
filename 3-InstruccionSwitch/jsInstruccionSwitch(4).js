function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch (mesDelAño) {
    case "Enero","Marzo","Mayo","Julio","Agosto","Octubre","Diciembre":
            alert("Tiene 31 dias")
        break;
    case "Febrero":
            alert("Tiene 28 dias")
        break;
    default:
        alert("Tiene 30 dias")
        break;
}	



}//FIN DE LA FUNCIÓN