localStorage.setItem("texto1","hola Mundo")
localStorage.setItem("numero1",12.4)
localStorage.setItem("boleano1",true)
localStorage.setItem("array1",["azul","verde","rojo"])

const texto1 = localStorage.getItem("texto1")
console.log(texto1)
const numero1 = parseFloat(localStorage.getItem("numero1")) 
console.log(numero1)
console.log(typeof numero1)
const boleano1 = (localStorage.getItem("boleano1") == "true")
console.log(boleano1)
//azul,verde,rojo
const array1 = localStorage.getItem("array1").split(",")
console.log(array1)

console.log(localStorage.length)
localStorage.removeItem("texto1")
localStorage.clear()

//storage de objetos
const objeto1 = {nombre:"producto1",precio:120}
console.log(typeof objeto1)
localStorage.setItem("objeto1", JSON.stringify(objeto1))
console.log(typeof JSON.stringify(objeto1))
 // lo paso a json para poder almacenarlo
const objeto1Recuperado = JSON.parse(localStorage.getItem("objeto1"))  // lo paso a objeto para poder usar las propiedades y metodos
console.log(objeto1Recuperado.nombre)