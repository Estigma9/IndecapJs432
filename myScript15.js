//EJEMPLOS JSON

//JSON.parse()
//Crear un Objeto JS desde una cadena JSON
const textojson = '{"name": "Jonathan", "age": 50, "city": "Bakersfield"}';

const objjs = JSON.parse(textojson);

document.getElementById("demo15.0").innerHTML = objjs.name + ", " + objjs.city;

document.getElementById("demo15.1").innerHTML = typeof textojson;
document.getElementById("demo15.2").innerHTML = typeof objjs;


//Crear una Matriz JS desde una cadena JSON 
const textojson1 = '["Guitarra", "Guache", "Timbal", "Gaita", "Pito"]';

const miArreglojs = JSON.parse(textojson1);

document.getElementById("demo15.3").innerHTML = miArreglojs[3];

document.getElementById("demo15.4").innerHTML = typeof textojson1;
document.getElementById("demo15.5").innerHTML = typeof miArreglojs;


//JSON no recibe Fechas
//Lo escribo como cadena, convierto en objeto y luego lo transformo a fecha
const textojson2 = '{"name": "Brian", "birth": "1947-07-19", "city": "Hampton"}';

const objjs2 = JSON.parse(textojson2);
objjs2.birth = new Date(objjs2.birth);

document.getElementById("demo15.6").innerHTML = objjs2.name + ", " + objjs2.birth;



//JSON.stringify()
//Convertir un Objeto en un JSON
const objjs3 = {
    name: "Steve",
    age: 70,
    city: "San José"
}

const miJson = JSON.stringify(objjs3);

document.getElementById("demo15.7").innerHTML = miJson;


//Convertir una Matriz en un JSON
const miArreglojs2 = ["Pantera", "Tigre", "Tiburón", "Humano"];

const miJson2 = JSON.stringify(miArreglojs2);

document.getElementById("demo15.8").innerHTML = miJson2;


//Almacenamiento y recuperacion de información local storage
const objjs4 = {
    name: "Billie",
    age: 19,
    city: "Los Angeles"
};
const miJson4 = JSON.stringify(objjs4);

//Storing data:
localStorage.setItem("testJson", miJson4);

//Retrieving data:
let textojson4 = localStorage.getItem("testJson");
let objjs4_1 = JSON.parse(textojson4);

document.getElementById("demo15.9").innerHTML = objjs4_1.name;

















