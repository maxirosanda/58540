//Repaso
/*
const sumar = (valorUno,valorDos) => valorUno + valorDos
const resta = (valorUno,valorDos) => valorUno - valorDos
const iva = valor => valor * 0.21
const calcularDescuento = (valor,descuento) => valor * descuento

let precio = parseFloat(prompt("ingrese precio del producto"))
let descuento = parseFloat(prompt("ingrese descuento"))
let resultadoConIVA = sumar(precio,iva(precio))
let resultadoConDescuento = resta(resultadoConIVA,calcularDescuento(resultadoConIVA,descuento))
console.log(resultadoConDescuento)
*/
// Objetos Literales
/*
let autoUno = {
    marca:"ford",
    modelo:"fiesta",
    km:12000,
    color:"gris"
}
let autoDos = {
    marca:"audi",
    modelo:"a3",
    km:150000,
    color:"azul"
}
let buscarPropiedad = prompt("ingrese que propiedad quiere ver del auto Dos")
console.log(autoUno.km)
console.log(autoDos[buscarPropiedad])
autoUno.km = 20000
console.log(autoUno.km)
*/
// Objetos: Constructor
/*
function Auto(marca,modelo,patente,km,color){
    this.marca = marca
    this.modelo = modelo
    this.patente = patente
    this.km = km
    this.color = color
    this.vendido = false
    this.servis = function(){
        console.log("servis realizado a: " + this.patente)
    }
    this.vender = function(){
        this.vendido = true
        console.log("auto vendio con patente:" + this.patente)
    }
}

let autoUno = new Auto("ford","fiesta","AHD254",12000,"gris")
let autoDos = new Auto("audi","a3","HRD345",150000,"azul")
console.log(autoUno.vendido)
autoUno.servis()
autoUno.vender()
console.log(autoUno.vendido)
*/
// Objetos: Clases

class Auto {
    constructor(marca,modelo,patente,km,color){
        this.marca = marca
        this.modelo = modelo
        this.patente = patente
        this.km = km
        this.color = color
        this.vendido = false
    }
    servis(){
        console.log("servis realizado a: " + this.patente)
    }
    vender(){
        this.vendido = true
        console.log("auto vendio con patente:" + this.patente)
    }
}
let autoUno = new Auto("ford","fiesta","AHD254",12000,"gris")
let autoDos = new Auto("audi","a3","HRD345",150000,"azul")
console.log(autoUno.vendido)
autoUno.servis()
autoUno.vender()
console.log(autoUno.vendido)
let autoTres = new("fiat","uno","ERJ547",16000,"blanco")
autoTres.vender()
