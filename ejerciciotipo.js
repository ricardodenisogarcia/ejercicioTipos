var nombre = "Dieguito";
var apellido = "Maradona";
var altura = 1.66;
var lugarDeNacimiento = "Lanus, Buenos Aires, Argentina";
var numerodeCamiseta = 10;
var apodos = ["El Diez", "Pelusa", "El pibe de oro", "10", "dieguito"];
var weboficial = "www.diegomaradona.com";
var fechaDeNacimiento = "30 de Octubre de 1960";
var fechaDeMuerte = "eterno";
var tiempoDeVida = fechaDeNacimiento + " - " + fechaDeMuerte;
var golesargentinosjr = "goles en Argentinos Jrs" + "  " + 115; 
var golesboca = 31;
var golesbcn = "goles en Barcelona" + "  " + 38;
var golesnapoli = "goles en Napoli" + "  " + 115;
var golessevilla = "goles en Sevilla" + "  " + 8;
var golesnewells =  0;
var goles = 115+31+38+115+8;
var golesenclubs = goles;
var golesSeleccion = 34;
var golestotales = 115+31+38+115+8+34;
 //aca quise declarar que golestotales era igual a la suma de golesSeleccion + goles. pero me concatenaba los valores.
var escierto = (golesnewells > golesboca);
var tipodevariable = typeof golestotales;
var tipodevariable2 = typeof escierto;
var tipodevariable3 = typeof apodos;
var tipodevariable4 = typeof fechaDeMuerte;

console.log(nombre);
console.log(apellido);
console.log(altura);
console.log(lugarDeNacimiento);
console.log(numerodeCamiseta);
console.log(apodos);
console.log(weboficial);
// console.log(fechaDeNacimiento + " - " + fechaDeMuerte);
console.log(tiempoDeVida);
console.log(golesargentinosjr);
console.log("goles en Boca " + "  " + golesboca);
console.log(golesbcn);
console.log(golesnapoli);
console.log(golessevilla);
console.log("goles en Newell´s" + "   " + golesnewells);
console.log("Goles totales en clubs" + " : " + golesenclubs);
console.log("goles en la Selección" + ":" + golesSeleccion);
console.log("Goles totales del genio del futbol mundial" + " : " + golestotales);
console.log("Hizo mas goles en Newells que en Boca" + " " + escierto); 
console.log(tipodevariable);
console.log(tipodevariable2);
console.log(tipodevariable3);
console.log(tipodevariable4);