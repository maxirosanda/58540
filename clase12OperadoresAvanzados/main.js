//Operadores avanzados

let numero = 10
//numero = numero + 1
//numero += 1
numero++
console.log(numero)

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

let {nombre:nombreUsuario,edad,telefono,cursos:{javascript},cursos:{dw}} = usuario5

console.log(nombreUsuario)
console.log(edad)
console.log(telefono)
console.log(javascript)
console.log(dw)

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

const mostrarUsuario = ({nombre,edad,cursos:{javascript},cursos:{dw}}) => {
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