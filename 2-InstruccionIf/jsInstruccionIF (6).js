function mostrar()
{
//tomo la edad  

let edad;
edad = document.getElementById("edad").value
if(edad>=18){
    document.getElementById("edad").value = "Sos mayor"
}else if(edad<18){
    if (edad<=17 && edad>=13){
        document.getElementById("edad").value = "Sos adolecente"
    }else{
        document.getElementById("edad").value = "Sos menor"
    }
}


}//FIN DE LA FUNCIÓN