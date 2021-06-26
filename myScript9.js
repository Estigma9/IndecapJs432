//Métodos de los Arreglos o Matrices


//Arreglos
const carros = ["Saab", "Volvo", "BMW"];
document.getElementById("demo9.0").innerHTML = carros;
document.getElementById("demo9.1").innerHTML = carros[1];


const carros1 = [
    "Renault", 
    "Mazda", 
    "Ford"
];
document.getElementById("demo9.2").innerHTML = carros1;
document.getElementById("demo9.3").innerHTML = carros1[1];


//Asignar valores
const carros2 = [];
carros2[0] = "Ssang Yong";
carros2[1] = "Channa";
carros2[2] = "BYD";
document.getElementById("demo9.4").innerHTML = carros2;
document.getElementById("demo9.5").innerHTML = typeof carros2;


//Con Array
const carros3 = new Array("Jaguar", "Aston Martin", "Land Rover");
document.getElementById("demo9.6").innerHTML = carros3;
document.getElementById("demo9.7").innerHTML = typeof carros3;

//Cambiar un elemento
carros3[1] = "McLaren";
document.getElementById("demo9.8").innerHTML = carros3;


//Propiedad longitud (length)
const fruit = ["Bananas", "Manzanas", "Kiwis", "Mangos"];
document.getElementById("demo9.9").innerHTML = fruit.length;
document.getElementById("demo9.10").innerHTML = fruit[fruit.length-1];


//Recorrer la matriz
//Con for
let txt = "<ul>";

for (let i = 0; i < fruit.length; i++) {
    txt = txt + "<li>" + fruit[i] + "</li>";    
}

txt = txt + "</ul>";
document.getElementById("demo9.11").innerHTML = txt;

//Con foreach
//forma1
let txt1 = "<ul>";
fruit.forEach(misFrutas);
txt1 = txt1 + "</ul>";
document.getElementById("demo9.12").innerHTML = txt1;

function misFrutas(valor){
    txt1 = txt1 + "<li>" + valor + "</li>";    
}

//forma2
let txt2 = "<ul>";
fruit.forEach(valor => {
    txt1 = txt1 + "<li>" + valor + "</li>";    
});

txt2 = txt2 + "</ul>";
document.getElementById("demo9.12").innerHTML = txt1;






