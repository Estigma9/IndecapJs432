//Métodos de los Números

//Para JS los números son números, sin importar el tipo.
let num1 = 3.14;
let num2 = 3;
let num3 = 34.64e5;
let num4 = 34.65e-6;
document.getElementById("demo8.0").innerHTML = 
num1 + "<br>" + num2 + "<br>" + num3 + "<br>" + num4;


//Precisión de 15 dígitos
let num5 = 999999999999999;
let num6 = 9999999999999999;
document.getElementById("demo8.1").innerHTML = num5 + "<br>" + num6;

//Precisión en .float de 17 dígitos
let num7 = 0.2 + 0.1;
document.getElementById("demo8.2").innerHTML = "0.2 + 0.1 = " + num7;

//Este fallo corrige así
let num8 = (0.2*10 + 0.1*10)/10;
document.getElementById("demo8.3").innerHTML = "0.2 + 0.1 = " + num8;


//Cuidado con el + cuando hay números como String
//Suma de números
let num9 = 10;
let num10 = 20;
let num11 = num9 + num10;
document.getElementById("demo8.4").innerHTML = num11;

//Suma de números como string, se concatenan
let num12 = "10";
let num13 = "20";
let num14 = num12 + num13;
document.getElementById("demo8.5").innerHTML = num14;

//Suma de un número y un número string, se concatena
let num15 = "40";
let num16 = 50;
let num17 = num15 + num16;
document.getElementById("demo8.6").innerHTML = num17;

//Hay que tener cuidado como concateno y opero mis números.
let num18 = 60;
let num19 = 70;
document.getElementById("demo8.7").innerHTML = "El resultado es: " + num18 + num19;
document.getElementById("demo8.8").innerHTML = "El resultado es: " + (num18 + num19);


//Con los otros operadores, JS tratará de convertir los string en número
let num20 = "90";
let num21 = "2";
let num22 = num20 / num21;
document.getElementById("demo8.9").innerHTML = num22;

let num23 = num20 * num21;
document.getElementById("demo8.10").innerHTML = num23;

let num24 = num20 - num21;
document.getElementById("demo8.11").innerHTML = num24;


//NaN: no es un número
let num25 = 100 / "Colombia";
document.getElementById("demo8.12").innerHTML = num25;
document.getElementById("demo8.13").innerHTML = isNaN(num25);

let num26 = 100;
let num27 = NaN;
let num28 = num27 + num26;
document.getElementById("demo8.14").innerHTML = num28;


//Infinito y -Infinito
let num29 = 2;
let text = "";

while (num29 != Infinity){
    num29 = num29 * num29;
    text = text + num29 + "<br>";
}

document.getElementById("demo8.15").innerHTML = text;

//División por cero
let num30 = 2/0;
let num31 = -2/0;
document.getElementById("demo8.16").innerHTML = num30 + "<br>" + num31;

//Tipo de dato del Infinito
document.getElementById("demo8.17").innerHTML = typeof Infinity;


//Convertir un número a string, en diferntes bases numéricas
let num32 = 43527;
document.getElementById("demo8.18").innerHTML =
"43527 = " + "<br>" +
"Decimal: " + num32.toString(10) + "<br>" +
"Hexadecimal: " + num32.toString(16) + "<br>" +
"Octal: " + num32.toString(8) + "<br>" +
"Binario: " + num32.toString(2);


//Convertir un número a un Objeto
let num33 = 405;
let num34 = new Number(405);
document.getElementById("demo8.19").innerHTML = typeof num33 + "<br>" + typeof num34;


//toString()
let num35 = 1234;
document.getElementById("demo8.20").innerHTML = 
num35.toString() + "<br>" +
(1234).toString() + "<br>" +
(1000 + 234).toString(); //colocar typeof para ver que es cadena


//toExponential()
let num36 = 0.00000000867456;
document.getElementById("demo8.21").innerHTML = 
num36.toExponential() + "<br>" +
num36.toExponential(2) + "<br>" +
num36.toExponential(4) + "<br>" +
num36.toExponential(6) + "<br>" +
typeof num36.toExponential(6);


//toFixed()
let num37 = 9.654;
document.getElementById("demo8.22").innerHTML = 
num37.toFixed() + "<br>" +
num37.toFixed(2) + "<br>" +
num37.toFixed(4) + "<br>" +
num37.toFixed(6) + "<br>" +
typeof num37.toFixed(6);


//toPrecision()
let num38 = 9.654;
document.getElementById("demo8.23").innerHTML = 
num38.toPrecision() + "<br>" +
num38.toPrecision(2) + "<br>" +
num38.toPrecision(4) + "<br>" +
num38.toPrecision(6) + "<br>" +
typeof num38.toPrecision(6);


//valueOf()
let num39 = 1234;
document.getElementById("demo8.24").innerHTML = 
num35.valueOf() + "<br>" +
(1234).valueOf() + "<br>" +
typeof (1234).valueOf() + "<br>" +
(1000 + 234).valueOf();


//Conversión de variables a un tipo de número
//1. Number(), convierte una variable JS en número
document.getElementById("demo8.25").innerHTML = 
Number(true) + "<br>" +
Number(false) + "<br>" +
Number("10") + "<br>" +
Number("       11") + "<br>" +
Number("12     ") + "<br>" +
Number("   13    ") + "<br>" +
Number("10.33") + "<br>" +
Number("10,33") + "<br>" +
Number("10 33") + "<br>" +
Number("Esteban");

//Uso en fechas
let fecha1 = new Date("2021-06-23");
document.getElementById("demo8.26").innerHTML = Number(fecha1);


//2. parseInt(), convierte la cadena en un entero
document.getElementById("demo8.27").innerHTML = 
parseInt("-11") + "<br>" +
typeof parseInt("-11") + "<br>" +
parseInt("-12.33") + "<br>" +
parseInt("13") + "<br>" +
parseInt("14.33") + "<br>" +
parseInt("15 20 30") + "<br>" +
parseInt("16 years") + "<br>" +
parseInt("years 17") + "<br>" +
parseInt("Esteban") + "<br>" +
parseInt(true);


//3. parseFloat(), convierte la cadena en un número float
document.getElementById("demo8.27").innerHTML = 
parseFloat("-21") + "<br>" +
typeof parseFloat("-11") + "<br>" +
parseFloat("-22.33") + "<br>" +
parseFloat("23") + "<br>" +
parseFloat("24.33") + "<br>" +
parseFloat("25 20 30") + "<br>" +
parseFloat("26 years") + "<br>" +
parseFloat("years 27") + "<br>" +
parseFloat("Esteban") + "<br>" +
parseFloat(true);






