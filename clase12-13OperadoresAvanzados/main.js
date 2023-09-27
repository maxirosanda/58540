//Operadores avanzados

/*
let numero = 10
//numero = numero + 1
numero += 5
//numero++
console.log(numero)
*/
/*
// 1) Operador Ternario

let temperatura = 35
const conclusion = (temperatura > 30) ? "hace calor" : "clima normal"
console.log(conclusion)

//2) Operador Logico and

const carrito = []
const estadoCarrito = (carrito.length === 0) && "el carrito esta vacio"

//3) Operador lógico or
const valor = NaN
// falsy: 1) 0 2) false 3) "" 4) null 5) undefined 6) NaN
console.log("valor es : " + valor)
const resultado = valor || "es falsy"
console.log(resultado)

//4) Operador Nullish Coalescing
// los valores considerados falso son null y undefined

const valor2 = undefined
const resultado2 = valor2 ?? "valor no valido"
console.log(resultado2)

//5 acceso condicional a un objeto
const usuario1 = null
console.log(usuario1?.nombre || "el usuario no esta" )
const usuario2 = {
    nombre:"Maxi rosanda",
    edad:36,
    cursos:{
        javascript:"aprobado",
        dw:"pendiente"
    }
}
const usuario3 = {
    nombre:"Maxi rosanda",
    edad:36
}
const usuario4 = {
    nombre:"Maxi rosanda",
    edad:36,
    cursos:{
        javascript:"aprobado",
        dw:"pendiente",
        react:"aprobado"
    }
}

console.log(usuario2?.cursos?.react || "no esta inscripto en este curso")
console.log(usuario3?.cursos?.react || "no esta inscripto en este curso")
console.log(usuario1?.cursos?.react || "no esta inscripto en este curso")
console.log(usuario4?.cursos?.react || "no esta inscripto en este curso")
*/
//--------------------------------------------------------
//Desestructuracion
const usuario5 = {
    nombre:"Jose fernandez",
    edad:36,
    cursos:{
        javascript:"aprobado",
        dw:"pendiente",
        react:"aprobado"
    }
}

let {nombre:nombreUsuario,edad,cursos:{javascript,dw,react}} = usuario5
console.log(dw)
console.log(nombreUsuario)
console.log(edad)
console.log(javascript)


// Desestructuración en parámetros
const usuario6 = {
    nombre:"Martin perez",
    edad:25,
    cursos:{
        javascript:"aprobado",
        dw:"desaprobado",
        react:"aprobado"
    }
}

const mostrarUsuario = ({nombre,edad,cursos:{javascript,dw}}) => {
    alert(`
            Nombre: ${nombre}
            Edad: ${edad}
            js: ${javascript}
            DW: ${dw}
            `)
}

mostrarUsuario(usuario6)

//Desestructuración de arrays

const nombres = ["jose","estela","martin"]

const [a,,c] = nombres

// spread con arrays
const numeros = [12,34,543,565,44]
const numeros2 = [...numeros] //hacer una copia del array (sin que queden vinculados)
numeros2[1] = 54
console.log(numeros)

console.log(Math.max(...numeros)) //para usar metodos que reciben multiples parametros
const numeros3 = [344,654,45,34,23,434]
const numerosUnidos = [...numeros,...numeros3] //Unir arrays

const objetoNumeros = { //convertir un array en objeto
    ...numeros
}
console.log(objetoNumeros)

//spread con objetos

const producto = {
    nombres:"coca cola",
    precio:980,
    stock:12
}


const productoExtendido = {
    ...producto,
    precio:1000,
    descripcion:"jdshgjas kjldflasifj lkjdsfis"
}
console.log(producto)
console.log(productoExtendido)

// rest parameters

const mostrar = (...textos) =>{
    console.log(...textos)
}
mostrar("hola","maxi","chau","bienvenido","dfsjdklgh")

const sumar = (...numeros) =>{
    return numeros.reduce((acc,numero)=>acc + numero,0)
}

console.log(sumar(145,566,435,665,3455,6655,34,3535,44,6556,3454))