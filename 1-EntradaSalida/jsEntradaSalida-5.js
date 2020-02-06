/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    let nom;
    let edad;
    nom = document.getElementById("elNombre").value
    edad = parseInt(document.getElementById("laEdad").value)
    alert(`Usted se llama ${nom} y tiene ${edad} `)
}

