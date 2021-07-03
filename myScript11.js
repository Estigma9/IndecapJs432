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


//Cambiar estilos CSS
document.getElementById("demo11.5").style.color = "blue";
document.getElementById("demo11.5").style.backgroundColor = "yellow";
document.getElementById("demo11.6").style.fontFamily = "Arial";
document.getElementById("demo11.6").style.fontSize = "larger";


//Cambiar estilo CSS con un evento
function danger(){
    document.getElementById("demo11.7").style.color = "red";
}

//Visibilidad
function desaparece(){
    document.getElementById("demo11.8").style.visibility = "hidden";
}

function aparece(){
    document.getElementById("demo11.8").style.visibility = "visible";
}


//Animación JS HTML DOM
function mover(){
    let identifica = null;
    const elemento4 = document.getElementById("animado");
    let posicion = 0;

    clearInterval(identifica);
    identifica = setInterval(paso, 5);
    
    function paso(){
        if (posicion == 350){
            clearInterval(identifica);
        }else{
            posicion = posicion + 1;
            elemento4.style.top = posicion + "px";
            elemento4.style.left = posicion + "px"
        }
    }
}


//Eventos JavaScript HTML DOM
//Haciendo click en el texto
function cambio(){
    document.getElementById("demo11.9").innerHTML = "Los borraste."
}


//Evento ondload y onunload
function cookiesCargadas(){
    var texto1 = "";
    if (navigator.cookieEnabled == true){
        texto1 = "Cookies habilitadas";
    }else{
        texto1 = "Cookies Inhabilitadas";
    }
    document.getElementById("demo11.10").innerHTML = texto1;
}


//onchange
function mayuscula(){
    const nomF = document.getElementById("nombreFull");
    nomF.value = nomF.value.toUpperCase();
}

//Evento onmouseover y onmuoseout
function mOver(obj){
    obj.innerHTML = "Gracias";
}

function mOut(obj){
    obj.innerHTML = "Mouse Over Me";
}


//onmousedown y onmouseup
function mDown(obj){
    obj.style.backgroundColor = "blue";
    obj.style.color = "white";
    obj.innerHTML = "Cambié";
}

function mUp(obj){
    obj.style.backgroundColor = "lime";
    obj.style.color = "black";
    obj.innerHTML = "Click Me!!!";
}


//onfocus
function resaltar(obj){
    obj.style.background = "rgb(255, 243, 71)";
}


//Ejmplo 2 onmousedown y onmouseup
function prender(){
    document.getElementById("bombillo").src = "imagenes/pic_bulbon.gif"
}

function apagar(){
    document.getElementById("bombillo").src = "imagenes/pic_bulboff.gif"
}



