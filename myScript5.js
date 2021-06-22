var carro = {
    //Atributos
    tipo: "Audi",
    modelo: "A3",
    color: "gris",

    //Metodos
    nombreCompleto: function(){
        return this.tipo + " " + this.modelo; 
    },

    nombreColor: () =>{
        return this.tipo + " - " + this.color;
    }
};

//document.getElementById("demo5").innerHTML = "El carro es un " + carro.tipo; 
//document.getElementById("demo5").innerHTML = "El color es " + carro["color"]; 
//document.getElementById("demo5").innerHTML = carro.nombreCompleto(); 
document.getElementById("demo5").innerHTML = carro.nombreColor(); 