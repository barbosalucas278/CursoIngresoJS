/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadAlambre;
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    cantidadAlambre = (largo * ancho)*3
    alert(`La cantidad de alambre que necesitas es de: ${cantidadAlambre}`)
}
function Circulo () 
{
    var cantidadAlambre;
    var radio;
    radio = parseInt(document.getElementById("Radio").value);
    cantidadAlambre = Math.floor(Math.round(radio * (Math.PI)*(Math.PI)))
    alert(`La cantidad de alambre que necesitas es de: ${cantidadAlambre}`)
}
function Materiales () 
{
    var largo;
    var ancho;
    var cal=3;
    var cemento=2;
    var cantidadCal;
    var cantidadCemento;
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    cantidadCemento = (largo * ancho)*cemento;
    cantidadCal = (largo * ancho)*cal;
    alert(`La cantidad de bolsas de cal necesaria es de: ${cantidadCal}
      La cantidad de bolsas de cemento necesaria es de: ${cemento}`);

}