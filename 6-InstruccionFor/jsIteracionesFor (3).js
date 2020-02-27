function mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
var i;
while(isNaN(repeticiones)||repeticiones<0){
    repeticiones = parseInt(prompt("No es un nùmero, ingrese el número de repeticiones nuevamente"));
}
for (i=0;i<repeticiones;i++){
    document.write(`Hola UTN FRA </br>`)
}

}//FIN DE LA FUNCIÓN