/*
let valorUno = parseFloat(prompt("Ingrese un valor (para salir colocar esc")) 
let valorDos = parseFloat(prompt("Ingrese otro valor")) 
let operacion = prompt("ingresar operacion matematica (+ - * /)")

while(valorUno || valorUno === 0 ){
    let resultado = 0
    switch(operacion){
        case "+":
            resultado =  valorUno + valorDos
            break
        case "-":
            resultado = valorUno - valorDos
            break
        case "*":
            resultado = valorUno * valorDos
            break
        case "/":
            resultado = valorUno / valorDos
            break    
    }
    alert(resultado)
    valorUno = parseFloat(prompt("Ingrese un valor (para salir colocar esc)")) 
    valorDos = parseFloat(prompt("Ingrese otro valor")) 
    operacion = prompt("ingresar operacion matematica (+ - * /)")
}
*/
//------------------ Fin Repaso ------------------------------------------
//Funcion saludar
/*
function saludar(){
    let nombre = prompt("ingrese un nombre")
    alert("Hola, " + nombre)
}

saludar()
*/
//funcion concatenar
/*
function concatenar(parametroUno,parametroDos){
    alert(parametroUno + " - " + parametroDos)
}
concatenar("Coder","house")
concatenar("Hola", "Maxi")
*/
//funcion suma y mostrar (con variable resultado global)
/*
let resultado

function suma(valorUno,valorDos){
    resultado = valorUno + valorDos
}

function mostrar(valorMostrar){
    alert(valorMostrar)
}

suma(12,5)
mostrar(resultado)
*/

//funcion sumar y mostrar (la varible resultado esta en la funcion suma)
/*
function suma(valorUno,valorDos){
    let resultado = valorUno + valorDos
    return resultado
}

function mostrar(valor){
    alert("el valor es: " + valor)
}
mostrar(suma(12,4))
*/
//Ejemplo funcion calculadora con switch
/*
function calculadora(valorUno,valorDos,operacion){
    switch(operacion){
        case "+":
            return valorUno + valorDos
        case "-":
            return valorUno - valorDos
        case "*":
            return valorUno * valorDos
        case "/":
            return valorUno / valorDos
        default:
            return "Operacion no valida"
    }
}

let resultadoUno = calculadora(12,5,"+")
alert(resultadoUno)
let resultadoDos = calculadora(12,4,"/")
alert(resultadoDos)
*/

// Ambito de una variable
/*
let valor = 24

function funcionUno(){
    let valor = 12
    if(true){
        let valor = 22
        console.log(valor)
    }
    console.log(valor)
}
console.log(valor)
funcionUno()
*/
//funcion anonima
/*
const sumar = function (num1, num2) {
    let resultado = num1 + num2
    return resultado
}
alert(sumar(12,34)) 
*/
//funciones flecha
const restar = (num1, num2) => num1 - num2
const iva = valor => valor * 0.21


