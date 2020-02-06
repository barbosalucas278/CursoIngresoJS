/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    let n1;
    let n2;
    let result;
    n1 = parseInt(document.getElementById("numeroUno").value)
    n2 = parseInt(document.getElementById("numeroDos").value)
    result = n1 + n2;
    alert(`El resultado de la suma es ${result}`)
}

