function mostrar()
{
    var notas;
    var acumuladorNotas = 0;
    var sexo;
    var sexoMin
    var alumnos;
    var promedioNotas;
    var notaMin;
    var notaMax;
    var contadorVarones = 0;
    var flag = 0;

for (alumnos=1;alumnos<=5;alumnos++){
    nota = parseInt(prompt("Ingrese la nota del alumno: ")); //pido la nota
    while (isNaN(nota)||nota<0||nota>10){
        nota = parseInt(prompt("Ingrese nuevamente la nota del alumno: "));
    }
    sexo = prompt("Ingrese el sexo del alumno"); //pido el SEXO
    while(sexo!="f"&&sexo!="m"){
        sexo = prompt("Ingrese nuevamente el sexo del alumno");
    }
    acumuladorNotas = acumuladorNotas + nota; //sumo todas las notas en un acumulador

    if(flag == 0 ||nota<notaMin){ //utilizo una flag para agregar el valor mìnimo.
        notaMin = nota;
        sexoMin = sexo;
        flag = 1;
    }

    if (sexo=='m' && nota>=6){
        contadorVarones++
    }
}
promedioNotas = nota / 5;

alert(`El promedio de las notas es: ${promedioNotas}`);
alert(`La nota mas baja es: ${notaMin} \n el alumno es de sexo: ${sexoMin}`);
alert(`La cantidad de varones con 6 o mas de nota es de : ${contadorVarones}`)
}
