/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos = 0;
var numero;

function comenzar() {
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * (100 - 1) + 1);
	flag = 0;
	contadorIntentos = 0;
}

function verificar() {
	do {
		//Ingreso el numero
		numero = parseInt(document.getElementById("numero").value);
		//coloco una variable flag para poder usar el while y se pueda parar en cada verificación.
		flag = 0;
		//utilizo un IF para poder comparar el numero ingresado por el numero secreto.
		if (numero > numeroSecreto) {
			alert(`Se paso un poquito... ${numeroSecreto}`)
			//aumento el contadorIntentos con cada intento.
			contadorIntentos++
			//muestro la cantidad de intentos.
			document.getElementById("intentos").value = contadorIntentos;
			//cambio el valor de la flag para poder cerrar el while y volver a empezar.
			flag = 1;
		} else if (numero < numeroSecreto) {
			alert(`Le falta un poquito...${numeroSecreto}`)
			contadorIntentos++
			document.getElementById("intentos").value = contadorIntentos;
			flag = 1;
		} else if (numero === numeroSecreto) {
			contadorIntentos++
			document.getElementById("intentos").value = contadorIntentos;
			switch (contadorIntentos) {
				case 1:
					alert(`Usted es un ganador!!!${numeroSecreto}`)
					alert(`Usted es un Psíquico`);
					break;
				case 2:
					alert(`Usted es un ganador!!!${numeroSecreto}`)
					alert(`Excelente perscepción`);
					break;
				case 3:
					alert(`Usted es un ganador!!!${numeroSecreto}`)
					alert(`Esto fue suerte`);
					break;
				case 4:
					alert(`Usted es un ganador!!!${numeroSecreto}`)
					alert(`Excelente técnica`);
					break;
				case 5:
					alert(`Usted es un ganador!!!${numeroSecreto}`)
					alert(`Usted está en la media`);
					break;
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					alert(`Usted es un ganador!!!${numeroSecreto}`)
					alert(`Falta técnica`);
					break;
				default:
					alert(`Usted es un ganador!!!${numeroSecreto}`)
					alert(`Afortunado en el amor!!!`)
					break;
			}

			flag = 1;
		}


		//condicion dle while para poder cerrarlo y volver a empezar.
	} while (flag == 0);
}


