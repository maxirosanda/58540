//Repaso ------------------------

//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
/*
let numero = parseInt(prompt("Ingrese un numero"))

if(numero > 1000){
    alert("el numero es mayor a 1000: " + numero )
}
*/
//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola
/*
let texto = prompt("Ingrese un texto").toUpperCase()
if(texto == "HOLA"){
    console.log("Hola Mundo!!!")
}
*/
//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
/*
let numero = parseFloat(prompt("Ingrese un numero"))

if(numero > 10 && numero <=50){
    alert("Numero valido: " + numero)
}else if(numero > 50 && numero < 100){
    alert("te acercaste")
}else{
    alert("Numero no valido, el valor tiene que estar entre 10 y 50")
}
*/

//Fin repaso -------------------------------------------

// Clase 3 ciclos

//for
/*
for(let i = 1 ; i <= 10 ; i = i + 3){
    console.log(i)
}
*/
//Ejemplo 1
/*
let numero = parseInt(prompt("que tabla necesita?"))
for(let i = 1 ; i<=10 ; i++){
    let resultado = numero * i
    console.log(numero + " x " + i + " = " + resultado)
}
*/
//Ejemplo 2
/*
for(let i = 1; i<=20 ; i++){
    let nombre = prompt("ingrese su nombre")
    alert("Turno N°: " + i + " Nombre: " + nombre)
}
*/

// for con break
/*
for(let i = 1; i <= 15; i++){

    if(i == 6){
        break
    }
    console.log(i)
}
*/
//for continue
/*
for(let i = 1; i <= 15; i++){
    
    if(i >= 6 && i <= 10){
        continue
    } 
    console.log(i)
}
*/

//while
/*
let entrada = prompt("ingrese su nombre (para salir escribir esc")

while(entrada != "esc"){
    alert("Hola " + entrada)
    entrada = prompt("ingrese su nombre (para salir escribir esc")
}

alert("fin")
*/

// do while
/*
do{
    console.log("se ejecuta una vez siempre")
}while(false)
*/
/*
let numero = 0
do{
    numero = parseInt(prompt("Ingrese un numero")) 

    if(numero || numero == 0){
        alert(numero)
    }
   
}while(numero || numero == 0)

alert("no es un numero")
*/

// maxi:admin  maria:editor marcos:usuario
let nombre = prompt("Ingrese un nombre").toLowerCase()

switch(nombre){
    case "maxi":
        alert("sos administrador de la pagina")
        break
    case "maria":
        alert("sos editor de la pagina")
        break
    case "marcos":
        alert("sos usuario de la pagina")
        break
    default:
        alert("no sos usuario")
}
