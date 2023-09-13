/*
class Producto {
    constructor(nombre,precio,stock){
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.stock = parseInt(stock)  
    }
    sumaIva(){
        this.precio = this.precio * 1.21
    }
}
const productos = []

let continuar = confirm("Quiere agregar un producto a la base de datos")
while(continuar){
    let nombreProducto = prompt("ingrese nombre del producto")
    let precioProducto = prompt("ingrese precio del producto")
    let stockProducto = prompt("ingrese stock del producto")
    const producto = new Producto(nombreProducto,precioProducto,stockProducto)
    productos.push(producto)
    continuar = confirm("Quiere agregar un producto a la base de datos")
}
for(const producto of productos){
    alert("Nombre: " + producto.nombre + " / " + "Precio: " + producto.precio)
}
*/
/*
const sumarRango = (inicial,final) =>{
    let total = 0
    for (let i = inicial; i <= final; i++) {
        total = total + i
    }
    return total
}

console.log(sumarRango(5,20))
*/
//Funciones de orden superior

//funciones que devuelven funciones
/*
const mayorQue = (mayor) => {

    const funcionInterior = (valor) =>{
        return valor > mayor
    }
    return funcionInterior
}

const mayorQue10 = mayorQue(10)
const mayorQue20 = mayorQue(20)
console.log(mayorQue10(11))
console.log(mayorQue20(11))

const asignarOperacion = (operacion) =>{
    switch(operacion){
        case "suma":
            return (n,m) => n + m
        case "resta": 
            return (n,m) => n - m
        case "multi": 
            return (n,m) => n * m
        case "divi": 
            return (n,m) => n / m
        
    }
}

const sumar = asignarOperacion("suma")
console.log(sumar)
const resta = asignarOperacion("resta")
console.log(resta)
*/

// funciones que reciben funciones por parametro
let total = 0
const porCadaUno = (arr,fn) =>{
    for(const el of arr){
        fn(el)
    }
}

porCadaUno([12,34,56,78,34],(valor) =>{
    total = total + valor
    console.log(total)
})

porCadaUno(["Maxi","Carlos","Federico"],(el)=>{
    if(el == "Maxi"){
        console.log("Hola sos admin")
    }
})
