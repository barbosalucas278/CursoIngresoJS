function mostrar()
{
//tomo la edad  
let edad;
edad = document.getElementById("edad").value
    if (edad<=17 && edad>=13){
        document.getElementById("edad").value = "Sos adolecente"
    }else{
        document.getElementById("edad").value = "NO sos adolecente"
    }

}//FIN DE LA FUNCIÓN