//Objetos en JS
//Los objetos tienen propiedades y métodos
//Valores primitivos NO tienen propiedades, ni métodos

//Notación de un Objeto
//Forma 1
let usuario = {
    'primerNombre': "Cristian",
    'apellido': "Mallarino",
    'edad': 23,
    'colorOjos': "Cafe"
};

document.getElementById("demo10.0").innerHTML = usuario.primerNombre + " " + usuario.apellido;

//Forma 2
const usuario2 = new Object();
usuario2.primerNombre2 = "José";
usuario2.apellido2 = "Tordecilla";
usuario2.edad2 = 16;
usuario2.colorOjos2 = "Cafe";
document.getElementById("demo10.1").innerHTML = usuario2.primerNombre2 + " tiene " + usuario2.edad2 + " años cumplidos.";


//Propiedades de los Objetos
//Otro llamado de la propiedad
document.getElementById("demo10.2").innerHTML = usuario2["primerNombre2"] + " tiene " + usuario2["edad2"] + " años cumplidos.";


//Recorrer las propiedades con un bucle
let texto = "";

for (let key in usuario) {
    texto = texto + usuario[key] + " ";    
}

document.getElementById("demo10.3").innerHTML = texto;


//Agregar nuevas propiedades
usuario.nacionalidad = "Colombiano";
document.getElementById("demo10.4").innerHTML = usuario.primerNombre + " es " + usuario.nacionalidad;

//Eliminar una Propiedad
delete usuario.colorOjos;
document.getElementById("demo10.5").innerHTML = usuario.primerNombre + " tiene " + usuario.colorOjos;

let texto101 = "";

for (let key1 in usuario) {
    texto101 = texto101 + usuario[key1] + " ";    
}

document.getElementById("demo10.6").innerHTML = texto101;


//Objetos Anidados
let usuario3 = {
    'primerNombre3': "Luisa",
    'apellido3': "Polanco",
    'edad3': 17,
    'colorOjos3': "Negros",
    'instruMusicales': {
        'instrumento1': 'Piano',
        'instrumento2': 'Guitarra',
        'instrumento3': 'Marimba',
        'instrumento4': 'Llamador',
        'instrumento5': 'Flauta de pan',
        'instrumento6': 'Saxofón',
        'instrumento7': 'Trombon'
    }
};

document.getElementById("demo10.7").innerHTML = usuario3.instruMusicales.instrumento5;


//Objetos con Matrices
let usuario4 = {
    'primerNombre4': "Hernan",
    'apellido4': "García",
    'edad4': 22,
    'colorOjos4': "Cafe",
    'carros': [
        {'nombre': "Renault", 'modelos':["Duster", "Megane", "Koleos", "Kwid"]},
        {'nombre': "Ford", 'modelos':["Fiesta", "Fusion", "Explorer", "F-150"]},
        {'nombre': "Fiat", 'modelos':["500", "Punto", "Panda", "Uno"]},
    ]      
};

let texto102 ="";

for (let i in usuario4.carros) {
    texto102 = texto102 + "<h2>" + usuario4.carros[i].nombre + "</h2>";
    for (let j in usuario4.carros[i].nombre) {
        texto102 = texto102 + usuario4.carros[i].modelos[j] + "<br>";
    }   
}

document.getElementById("demo10.8").innerHTML = texto102;


//Métodos
let usuario5 = {
    //Propiedades
    primerNombre5: "Brandon",
    apellido5: "Cano",
    edad5: 17,
    colorOjos5: "Cafe",
     
    //Métodos
    nombreCompleto: function(){
        return this.primerNombre5 + " " + this.apellido5;
    }
};

document.getElementById("demo10.9").innerHTML = usuario5.nombreCompleto();


//Agregar un Método
usuario5.nombreEdad = function(){
    return this.primerNombre5 + " tiene " + this.edad5 + " años.";
}

document.getElementById("demo10.10").innerHTML = "Mi amigo " + usuario5.nombreEdad();


//Visualización de los Objetos
let usuario6 = {
    //Propiedades
    primerNombre6: "Rafael",
    apellido6: "Mejía",
    edad6: 25,
    colorOjos6: "Cafe",
    hoy: new Date(),

   //Métodos
   nombreCompleto6: function(){
    return this.primerNombre6 + " " + this.apellido6;
   } 
};

document.getElementById("demo10.11").innerHTML = usuario6;
document.getElementById("demo10.12").innerHTML = Object.values(usuario6);

const arregloUsuario = Object.values(usuario6);
document.getElementById("demo10.13").innerHTML = arregloUsuario;

//Visualización con JSON
let cadenaUsuario = JSON.stringify(usuario6);
document.getElementById("demo10.14").innerHTML = cadenaUsuario;

document.getElementById("demo10.15").innerHTML = typeof cadenaUsuario;

usuario6.nombreCompleto6 = usuario6.nombreCompleto6.toString();
document.getElementById("demo10.16").innerHTML = JSON.stringify(usuario6);


//Accesores de Objetos Getter y Setter
//get
let usuario7 = {
    //Propiedades
    primerNombre7: "Jose",
    apellido7: "Araque",
    edad7: 21,
    colorOjos7: "Cafe",
    idioma: 'Ingles',

    //Métodos
   get idiom() {
       return this.idioma
    }  
};

document.getElementById("demo10.17").innerHTML = usuario7.idiom;

//set
let usuario8 = {
    //Propiedades
    primerNombre8: "Jose",
    apellido8: "Araque",
    edad8: 21,
    colorOjos8: "Cafe",
    idioma: '',

    //Métodos
   set lengua(valor) {
       this.idioma = valor;
    }  
};

usuario8.lengua = "Francés";

document.getElementById("demo10.18").innerHTML = usuario8.idioma;


//Constructores
//Función constructora
function Usuarios(first, last, age, eyes){
    //Propiedades
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyes;
    this.nationality = "Islandes";

    //Métodos
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
};

//Crear el Objeto
const miAbuela = new Usuarios("Helena", "Hernández", 80, "Azules");

document.getElementById("demo10.19").innerHTML = 
"Mi abuela es " + miAbuela.firstName + " " + miAbuela.lastName + " y tiene " + miAbuela.age + " años.";

//Agregar un método a mi objeto
miAbuela.fullName = function(){
    return this.firstName + " " + this.lastName;
};

document.getElementById("demo10.20").innerHTML = 
"Mi abuela es " + miAbuela.fullName();

//Agregar propiedad al constructor
//No funciona igual que con un Objeto
Usuarios.nationality = "Noruega";

miAmigo = new Usuarios("John", "Arboleda", 41, "Cafe");

document.getElementById("demo10.21").innerHTML = 
"Mi amigo " + miAmigo.firstName + " " + miAmigo.lastName + " es de " + miAmigo.nationality;

document.getElementById("demo10.22").innerHTML = miAmigo.fullName();


