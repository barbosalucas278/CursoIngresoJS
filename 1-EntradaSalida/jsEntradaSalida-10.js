/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var imp;
    var descuento;
    imp = parseInt(document.getElementById("importe").value);
    descuento = imp - (imp*25)/100;
    document.getElementById("resultado").value = descuento;
}
