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
/*
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
*/
/*
const cursos = [
    {
        id: 1,
        nombre: "js",
        cantidadAlumnos: 25,
        profesor: "Maximiliano Rosanda"
    },
    {
        id: 2,
        nombre: "Python básico",
        cantidadAlumnos: 30,
        profesor: "Diana Torres"
    },
    {
        id: 3,
        nombre: "HTML y CSS",
        cantidadAlumnos: 20,
        profesor: "Carlos Bernal"
    },
    {
        id: 4,
        nombre: "Introducción a Java",
        cantidadAlumnos: 18,
        profesor: "Jorge Medina"
    },
    {
        id: 5,
        nombre: "Ruby para principiantes",
        cantidadAlumnos: 12,
        profesor: "Claudia López"
    },
    {
        id: 6,
        nombre: "Desarrollo web con PHP",
        cantidadAlumnos: 22,
        profesor: "Elena Ruiz"
    },
    {
        id: 7,
        nombre: "Fundamentos de C++",
        cantidadAlumnos: 15,
        profesor: "Mario Fernández"
    },
    {
        id: 8,
        nombre: "Desarrollo móvil con Flutter",
        cantidadAlumnos: 14,
        profesor: "Fernanda Jiménez"
    },
    {
        id: 9,
        nombre: "Introducción a Kotlin",
        cantidadAlumnos: 13,
        profesor: "Juan Guerrero"
    },
    {
        id: 10,
        nombre: "Desarrollo frontend con React",
        cantidadAlumnos: 28,
        profesor: "Pablo Alarcón"
    },
    {
        id: 11,
        nombre: "Backend con Node.js",
        cantidadAlumnos: 20,
        profesor: "Lucía Mendoza"
    },
]
//Metodos de busqueda y filtrado
//1 recorrer un array
cursos.forEach( curso =>{
    console.log("Nombre: " + curso.nombre + " y el profe es: " + curso.profesor)
})
//2 Buscar en un array (te devuelve el primero que encuentra)
const cursoBuscado = cursos.find( curso =>curso.nombre == "Ruby para principiantes")
console.log(cursoBuscado)

//3 Filtra el array
const cursoFiltrado = cursos.filter( curso => curso.cantidadAlumnos == 20)
console.log(cursoFiltrado)

//4 ver si existe un elemento
const cursoExiste = cursos.some( curso => curso.profesor == "Carlos Bernal" )
console.log(cursoExiste)

//5 crear un nuevo array a partir del array original
const cursoProfesores = cursos.map( curso =>{
    return {
        nombre:curso.nombre,
        profesor:curso.profesor,
        cantidad : curso.cantidadAlumnos + 5
    }
})

console.log(cursoProfesores)

//6 sirve para sacar un resultado final
const totalAlumnos = cursos.reduce((acc,curso)=>acc + curso.cantidadAlumnos,0)
console.log("cantidad total de alumnos " + totalAlumnos)


//7.a Ordenar por número
const numeros = [
    18, 7, 3, 16, 9, 
    14, 1, 12, 11, 20, 
    6, 4, 15, 10, 5, 
    13, 8, 19, 2, 17
]
numeros.sort((a,b)=> a - b)
console.log(numeros)
 
cursos.sort((a,b)=> b.cantidadAlumnos - a.cantidadAlumnos)
console.log(cursos)

//7.b Ordenar alfabéticamente
cursos.sort((a,b)=>{
    if(a.nombre > b.nombre){
        return 1
    }
    if(a.nombre < b.nombre){
        return -1
    }
    return 0
})
console.log(cursos)
*/
//ejemplo metodos de busqueda y filtrado
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4, nombre: "Flan" , precio: 100}]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === "Harina")
console.log(existe ) // false

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);
//["Arroz", "Fideo", "Pan", "Flan"]
