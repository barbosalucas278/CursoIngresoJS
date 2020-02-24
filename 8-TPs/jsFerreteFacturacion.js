/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var total;
    precioUno = parseInt(document.getElementById("PrecioUno").value)
    precioDos = parseInt(document.getElementById("PrecioDos").value)
    precioTres = parseInt(document.getElementById("PrecioTres").value)
    total = precioUno + precioDos + precioTres;
    alert(`La suma de los precio es: ${total}`)

}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
    precioUno = parseInt(document.getElementById("PrecioUno").value)
    precioDos = parseInt(document.getElementById("PrecioDos").value)
    precioTres = parseInt(document.getElementById("PrecioTres").value)
    promedio = (precioUno + precioDos + precioTres)/3;
    alert(`El promedio es: ${promedio}`)	
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var total;
    var iva = 21/100;
    var totalIva;
    precioUno = parseInt(document.getElementById("PrecioUno").value)
    precioDos = parseInt(document.getElementById("PrecioDos").value)
    precioTres = parseInt(document.getElementById("PrecioTres").value)
    total = precioUno + precioDos + precioTres;
    totalIva = (total * iva)+total;
    alert(`El precio final con IVA es de: ${totalIva}`)	
}