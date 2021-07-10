//JS HTML DOM

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
const elemento3 = document.querySelectorAll("p.encabezado");

document.getElementById("demo11.4").innerHTML = 
"Son uds? " + elemento3[2].innerHTML; 



//Cambio de contenido en HTML
//innerHTML NO hay ejemplo, porque ya lo usamos

//Cambiar el valor del atributo
document.getElementById("image").src = "imagenes/Estudiohtml.png"; 


//Cambiar estilos CSS
document.getElementById("demo11.5").style.color = "blue";
document.getElementById("demo11.5").style.backgroundColor = "yellow";
document.getElementById("demo11.6").style.fontFamily = "Arial";
document.getElementById("demo11.6").style.fontSize = "larger";


//Cambiar estilos CSS con un evento
function danger(){
    document.getElementById("demo11.7").style.color = "red";
    document.getElementById("demo11.7").style.fontSize = "larger";
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
    document.getElementById("demo11.9").innerHTML = "Los borraste.";
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
    document.getElementById("bombillo").src = "imagenes/pic_bulbon.gif";
}

function apagar(){
    document.getElementById("bombillo").src = "imagenes/pic_bulboff.gif";
}

//Ejemplo 2 onload
//Cambiar la funcion del body onload
function mensaje(){
    alert("Este es un mensaje que sale cuando la página se carga, usando el evento onload"); 
};



//EventListener()

//Ejemplo1 
function miPrueba(){
    alert("Hola estoy usando un controlador de evento");
};

document.getElementById("miBtn").addEventListener("click", miPrueba);


//Ejemplo 2, varios controladores al mismo elemento
function miPrueba2(){
    alert("Estoy controlando de nuevo");
};

function miPrueba3(){
    alert("Este es otro evento controlado");
};

var eventosControlados = document.getElementById("miBtn2");

eventosControlados.addEventListener("click", miPrueba2);
eventosControlados.addEventListener("click", miPrueba3);


//Ejemplo 3, varios controladores al mismo elemento con diferente evento
function madProof1(){
    document.getElementById("demo11.11").innerHTML += "Moused over! <br>";
};

function madProof2(){
    document.getElementById("demo11.11").innerHTML += "Hiciste Click! <br>";
};

function madProof3(){
    document.getElementById("demo11.11").innerHTML += "Moused out! <br>";
};

var eventoLoco = document.getElementById("miBtn3");

eventoLoco.addEventListener("mouseover", madProof1);
eventoLoco.addEventListener("click", madProof2);
eventoLoco.addEventListener("mouseout", madProof3);


//Ejemplo 4, controlador al objeto ventana
function sizeMath(){
    document.getElementById("demo11.12").innerHTML = Math.random();
};

window.addEventListener("resize", sizeMath);


//Ejemplo 5, pasar parametros al controlador
function miOperation(a, b){
    document.getElementById("demo11.13").innerHTML = a * b;
};

let valor1 = 5;
let valor2 = 7;

document.getElementById("miBtn4").addEventListener("click", function(){
    miOperation(valor1, valor2);
});


//Ejemplo 6, Bubbling y Capturing
document.getElementById("demo1113").addEventListener("click", function(){
    alert("Diste click en el elemento BLANCO, burbujeo");
}, false);

document.getElementById("miDivi1").addEventListener("click", function(){
    alert("Diste click en el elemento NARANJA, burbujeo");
}, false);

document.getElementById("demo1114").addEventListener("click", function(){
    alert("Diste click en el elemento BLANCO, captura");
}, true);

document.getElementById("miDivi2").addEventListener("click", function(){
    alert("Diste click en el elemento NARANJA, captura");
}, true);


//Ejemplo 7, remover el controlador. removeEventListener()

function mathMove(){
    document.getElementById("demo11.15").innerHTML = Math.random();
};

function removerMovimiento(){
    document.getElementById("miDivi3").removeEventListener("mousemove", mathMove);
}

document.getElementById("miDivi3").addEventListener("mousemove", mathMove);

