
function validarNum(){
    let numero = document.getElementById("number").value;

    let resp;
    if (isNaN(numero) || numero < 1 || numero > 10){
        resp = "Dato incorrecto";
    }else{
        resp = "Muy bien, lo lograste";
    }

    document.getElementById("respuesta").innerHTML = resp;
}