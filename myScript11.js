//HTML DOM

//Encontrar elementos HTML
//getElementById()
const elemento = document.getElementById("demo11.0");

document.getElementById("demo11.1").innerHTML = 
"Como programador " + elemento.innerHTML; 


//getElementsByTagName()
const elemento1 = document.getElementsByTagName("div");

document.getElementById("demo11.2").innerHTML = 
"HTML tiene etiquitas como esta:  " + elemento1[0].innerHTML; 


//getElementsByClassName()
const elemento2 = document.getElementsByClassName("encabezado");

document.getElementById("demo11.3").innerHTML = 
"Las clases, " + elemento2[0].innerHTML; 


//querySelectorAll()
const elemento3 = document.querySelectorAll("p.encabezado")

document.getElementById("demo11.4").innerHTML = 
"Son uds? " + elemento3[2].innerHTML; 



//Cambio de contenido en HTML
//innerHTML NO hay ejemplo, porque ya lo usamos

//Cambiar el valor del atributo
document.getElementById("image").src = "imagenes/Estudiohtml.png" 





