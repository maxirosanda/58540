/*
//Ejemplo if clasico
let nombre = prompt("Ingrese nombre de usuario").toLowerCase();

if(nombre == "maxi"){
    alert("Maxi sos admin de la pagina");
}else{
    alert("usuario no registrado: " + nombre);
}
*/
/*
let texto = "Hola Mundo";
let numero = 10;
let mayorDeEdad = true;

if(numero == 10){
    console.log("sale por consola");
}
*/
/*
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
}
*/
/*
//Ejemplo else if
let precio = prompt("Ingrese un precio");

if(precio <= 20){
    alert("este producto no tiene decuento");
}else if(precio <= 50){
    alert("tiene un 10% de descuento");
}else if(precio <= 100){
    alert("tiene un 20% descuento");
}else{
    alert("tiene un 30% de descuento");
}
*/
/*
let numero = prompt("ingrese un numero")
numero = parseFloat(numero)
if(numero !== 5){
    numero = numero + 1
    console.log("le sume uno a el numero, el resultado es:" + numero)
}
*/

/*
let esValido = false

if(!esValido){
    console.log("es valido")
}
*/
/*
let tieneFiebre = prompt("¿tiene fiebre? (si/no)").toUpperCase();
let tieneTos = prompt("¿tiene tos? (si/no").toUpperCase()

if(tieneFiebre == "SI" || tieneTos == "SI"){
    alert("debes quedarte en casa")
}else{
    alert("Puede salir de casa")
}
*/

let esDiaLaboral = prompt("¿Es día laboral? (si/no)");
let hora = prompt("Por favor, ingresa la hora actual (0-24):");
let tieneReunion = prompt("¿Tienes una reunión programada? (si/no)");
/*
esDiaLaboral es si / hora > 9 / hora < 17 / tieneReunion es si
*/ 
if ((esDiaLaboral == "si" && hora > 9 && hora < 17) || tieneReunion =="si") {
    alert("Debes estar trabajando");
} else {
    alert("No es necesario que estés trabajando");
}









