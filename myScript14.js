//JSON


//Forma como se ve un JSON
//Objeto JSON
'{"name": "Esteban", "age": 40, "avion": "null", "avidor": true}';

//Matriz JSON
'{"employees": ["Brandon, "Luisa", "Jose"]}'


//Función para convertir cadena JSON a objetos de JavaScript
JSON.parse();

//Función para convertir un objeto JavaScript a cadena JSON
JSON.stringify();

/*
La sintaxis JSON se deriva de la sintaxis de notación de objetos de JavaScript:

Los datos están en pares de nombre / valor
Los datos están separados por comas
Las Llaves encierran objetos
Los corchetes encierran matrices

VALORES JSON
- Strings
- Numbers
- Objetos
- Matrices
- Booleans
- null


VALORES que JSON no puede 
- Functions
- Dates
- Undefine


Extensión de JSON es .json


*/

//JSON
{"employees": [
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
]};


//XML
<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>
