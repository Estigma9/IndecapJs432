//Metodos de los Strings


var mensaje1 = 'Este es un gran día "El día del Padre"';
var mensaje2 = "Este es un gran día 'El día del Padre'";
document.getElementById("demo7.0").innerHTML = mensaje1;
document.getElementById("demo7.1").innerHTML = mensaje2;

var mensaje3 = "Nosotros somos \"Los mejores\" y escribir \n con I\'m Esteban, estoy \\usando backslash";
document.getElementById("demo7.3").innerHTML = mensaje3;

//length me da la cantidad de caracteres de una cadena
var longitud = mensaje1.length;
document.getElementById("demo7.4").innerHTML = longitud;


//Dividir una candena en la instrucción
document.getElementById("demo7.5").innerHTML = 
"Este es un texto muy largo y no me cabe en esta ventana";

document.getElementById("demo7.6").innerHTML = "Este es un texto \
muy largo y no me cabe en esta ventana";

document.getElementById("demo7.7").innerHTML = "Este es un texto " +
"muy largo y no me cabe en esta ventana";


//Hacer de un string un objeto
let nombre = "John";
let nombreObje = new String("John");
document.getElementById("demo7.8").innerHTML = typeof nombre + "<br>" + typeof nombreObje;


//Encontrar una palabra en un texto, se queda con la primera coincidencia
let palabraKey = "En este texto yo quiero encontrar una palabra, pero en este no se cual es.";
document.getElementById("demo7.9").innerHTML = 
palabraKey.indexOf("este"); // indexOf("este", 15);

//Encontrar una palabra en un texto, se queda con la última coincidencia
let palabraKey1 = "En este texto yo quiero encontrar una palabra, pero en este no se cual es.";
document.getElementById("demo7.10").innerHTML = 
palabraKey1.lastIndexOf("este"); // lastIndexOf("este", 15);

//Encontrar una palabra en un texto
let palabraKey2 = "En este texto yo quiero encontrar una palabra, pero en este no se cual es.";
document.getElementById("demo7.11").innerHTML = 
palabraKey2.search("palabra");


//Extracción de tramos de la cadena
//1. slice(ini, fin)
let frutas = "Tengo Bananas, Manzanas, Kiwis, Papayas."
document.getElementById("demo7.11").innerHTML = frutas.slice(6, 30);
document.getElementById("demo7.12").innerHTML = frutas.slice(-16, -2);
document.getElementById("demo7.13").innerHTML = frutas.slice(15);
document.getElementById("demo7.14").innerHTML = frutas.slice(-12);

//2. substring(ini, fin)
let frutas2 = "Tengo Bananas, Manzanas, Kiwis, Papayas."
document.getElementById("demo7.15").innerHTML = frutas2.substring(15, 30);

//3. substr(ini, long)
let frutas3 = "Tengo Bananas, Manzanas, Kiwis, Papayas."
document.getElementById("demo7.16").innerHTML = frutas3.substr(6, 4);
document.getElementById("demo7.17").innerHTML = frutas3.substr(6);
document.getElementById("demo7.18").innerHTML = frutas3.substr(-5);


//Reemplazar un tramo de la cadena
let lugar = "Ayer visité Italia";
let otroLugar = lugar.replace("Italia", "Sonson");
document.getElementById("demo7.19").innerHTML = lugar;
document.getElementById("demo7.20").innerHTML = otroLugar;

//Reemplaza la primera que se encuentre
let lugar1 = "Ayer visité Italia, y en Italia la comida es muy buena";
let otroLugar1 = lugar1.replace("Italia", "Sonson");
document.getElementById("demo7.21").innerHTML = lugar1;
document.getElementById("demo7.22").innerHTML = otroLugar1;

//Sensibilidad a las mayusculas
let lugar2 = "Ayer visité ITalia.";
let otroLugar2 = lugar2.replace("Italia", "Sonson");
document.getElementById("demo7.23").innerHTML = lugar2;
document.getElementById("demo7.24").innerHTML = otroLugar2;

//Usando bandera /i insensitive
let lugar3 = "Ayer visité Italia.";
let otroLugar3 = lugar3.replace(/ITALIA/i, "Sonson");
document.getElementById("demo7.25").innerHTML = lugar3;
document.getElementById("demo7.26").innerHTML = otroLugar3;

//Usando bandera /g global match
let lugar4 = "Ayer visité Italia, y en Italia la comida es muy buena";
let otroLugar4 = lugar4.replace(/Italia/g, "Sonson");
document.getElementById("demo7.27").innerHTML = lugar4;
document.getElementById("demo7.28").innerHTML = otroLugar4;


//Convertir Mayúsculas y minúsculas
let nombreCompleto = "Andrés Felipe Ospina Vahos";
let nombreMayuscula = nombreCompleto.toUpperCase();
let nombreMinuscula = nombreCompleto.toLowerCase();
document.getElementById("demo7.29").innerHTML = nombreCompleto;
document.getElementById("demo7.30").innerHTML = nombreMayuscula;
document.getElementById("demo7.31").innerHTML = nombreMinuscula;


//Método de concatenación
let texto1 = "Este es un método que existe.";
let texto2 = "Pero se puede hacer de otra forma más fácil";
let texto3 = texto1.concat(" Siiiii. ", texto2);
document.getElementById("demo7.32").innerHTML = texto3;


//Elimina los espacios de una cadena a sus dos lados
let texto4 = "               Soy un texto con espacio          ";
let texto5 = texto4.trim();
document.getElementById("demo7.33").innerHTML = texto4;
document.getElementById("demo7.34").innerHTML = texto5;
document.getElementById("demo7.35").innerHTML = texto4.length;
document.getElementById("demo7.36").innerHTML = texto5.length;


//Completar cadenas padStart(cantidad, elemento) y padEnd(cantidad, elemento)
let texto6 = "Saludo"
document.getElementById("demo7.37").innerHTML = texto6.padStart(20,"-");
document.getElementById("demo7.38").innerHTML = texto6.padEnd(4,0);


//Extraer Caracteres de la cadena
//1. charAt()
let texto7 = "Extraer una letra";
document.getElementById("demo7.39").innerHTML = texto7.charAt(1);

//2. charCodeAt()
document.getElementById("demo7.40").innerHTML = texto7.charCodeAt(1);

//Acceso a la propiedad
document.getElementById("demo7.41").innerHTML = texto7[1];


//Convertir cadena a matriz
let texto8 = "a, b, c, d, e";
const miArreglo = texto8.split(",");
document.getElementById("demo7.42").innerHTML = miArreglo[3];

const miArreglo1 = texto7.split(" ");
document.getElementById("demo7.43").innerHTML = miArreglo1[2];

