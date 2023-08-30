// Variables

/*
//declarar variable
var numeroUno;
let numeroDos;
let numeroTres;
let nombre;

// asignar valor a varible
numeroUno = 12;
numeroDos = 23;
numeroTres = 44
nombre = "maxi"
*/
/*
//Inicializar variable
let numeroUno = 12;
let numeroDos = 23;
let numeroTres = 44;
let nombre = "";
console.log(numeroUno)
const CURSO = "javascript"
const PI = 3.14

numeroUno = 15
console.log(numeroUno)
console.log(CURSO)
*/
/*
//Operaciones Matematicas
let valorUno = 34;
let valorDos = 10;
let valorTres = 23;
let resultadoSuma = valorUno + valorDos;
let resultadoResta = valorUno - valorTres;
let resultadoMulti = valorUno * valorTres;
let resultadoDivi = valorUno / 2;
console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMulti);
console.log(resultadoDivi);

// concatenar texto
let nombre = "Maximiliano";
let apellido = "Rosanda";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
*/

//prompt y alert
/*
let nombre = prompt("Ingrese su nombre");
let valorUno = parseFloat(prompt("Ingrese un numero para sumar"));
let valorDos = parseFloat(prompt("Ingrese el segundo numero para sumar"));
let resultadoSuma = valorUno + valorDos;
alert("Hola " + nombre + " el resultado es: " + resultadoSuma)
*/
 /*
 //ejemplo de la clase
let entrada = prompt("Ingresar una letra");
let salida  = entrada + " " + "ingresada";
alert(salida);
*/

let operacion = prompt("elija una operacion (sum,res,mul,div)");
let valorUno = parseFloat(prompt("ingrese el primer numero"));
let valorDos = parseFloat(prompt("ingrese el segundo numero"));
if(operacion == "sum"){
    console.log(valorUno + valorDos);
}else if(operacion == "res"){
    console.log(valorUno - valorDos);
}else if(operacion == "mul"){
    console.log(valorUno * valorDos);
}else if(operacion == "div"){
    console.log(valorUno / valorDos);
}else{
    console.log("operacion no valida")
}



