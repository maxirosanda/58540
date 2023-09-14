// Math
const numeros = [12,234,345,432,76,54,3]

const PI = Math.PI
console.log(PI)

const EULER = Math.E
console.log(EULER)

let max = Math.max(...numeros)
console.log(max)

let min = Math.min(...numeros)
console.log(min)

let redondeoArriba = Math.ceil(12.1)
console.log(redondeoArriba)

let redondeoAbajo = Math.floor(12.99)
console.log(redondeoAbajo)

let redondeo = Math.round(12.3)
console.log(redondeo)

let raizde16 = Math.sqrt(16)
console.log(raizde16)

let sorteo = Math.round(Math.random() * 9900 + 100)   // 200 y 9999
console.log("sorteo numero: " + sorteo)

//Date

const fechaActual = new Date()
console.log(fechaActual)

const fechaNacimiento = new Date(1987,6,18,6,30,0)
console.log(fechaNacimiento)

const diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

const mesNacimiento = fechaNacimiento.getMonth()
console.log(mesNacimiento + 1)

const anioNacimiento = fechaNacimiento.getFullYear()
console.log(anioNacimiento)

const diaSemanaNacimiento = fechaNacimiento.getDay()
console.log(diaSemanaNacimiento)

console.log(fechaNacimiento.toLocaleDateString())
console.log(fechaNacimiento.toLocaleString())

const edad = Math.round((fechaActual - fechaNacimiento)/31536000000) 
console.log(edad)
