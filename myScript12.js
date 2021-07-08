//Esta función me valida los datos de entrada del formulario

function validarDatos(){
    let nombre = document.forms["inscripcion"]["nombreCompleto"].value;
    if (nombre == ""){
        alert("El nombre debe ser diligenciado");
        return false;
    }
}
