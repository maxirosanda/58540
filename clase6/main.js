
// Objetos literales
const motoUno = {
    nombre:"cb 190r",
    cilindrada:190,
    color:"rojo"
}
console.log(motoUno.nombre)
console.log(motoUno["color"])
motoUno.color = "azul"
console.log(motoUno["color"])
motoUno.marca = "Honda"
console.log(motoUno)

// Clases
    class Moto {
        constructor(nombre,marca,cilindrada,color){
            this.nombre = nombre
            this.marca = marca
            this.cilindrada = cilindrada
            this.color = color
            this.nueva = true
            this.vendida = false
        }
        vender(){
            alert ("moto vendida: " + this.nombre)
        }
    }
 const motoDos = new Moto("fz15","yamaha",150,"negra")
 const motoTres = new Moto("fz1000","yamaha",1000,"roja")
 const motos = [motoDos,motoTres]
 console.log(motoDos)
 motoTres.vender()

const numeros = [12,55,58.2,785,45]
const textos = ["Hola","Mundo","soy maxi","viernes","jueves","sabado"]
const textos2 = ["gato","perro"]
const boolean = [true,false,true,true]
const mixto = [12,"hola",32,true]
/*
console.log(numeros[1])
console.log(textos[2])
textos[2] = "soy hernan"
console.log(textos[2])
console.log(numeros[0] + numeros[3])
console.log(textos[0] + " " + textos[1])
*/

//la propiedad length nos devuelve el largo del array
/*
console.log(textos.length)
*/
//recorre el array
/*
for(let i = 0 ; i < textos.length ; i++){
    console.log(i)
    console.log(textos[i])
}
*/
//Agregar un elemento al final del array
/*
textos.push("monitor")
console.log(textos)
*/
//Agrega un elemento al principio del array
/*
textos.unshift("primero")
console.log(textos)
*/
//Elimina el ultimo elemento
/*
textos.pop()
console.log(textos)
*/
//Eliminar el primer elemento
/*
textos.shift()
console.log(textos)
*/
//Eliminar una posicion en particular
/*
textos.splice(2,1)
console.log(textos)
*/
// Unir 2 o mas arrays en uno nuevo
/*
const textosUnidos = textos.concat(textos2)
console.log(textosUnidos)
*/
// Crear una copia recortada (no incluye el ultimo)
/*
const textosRecortado = textos.slice(0,3)
console.log(textosRecortado)
*/
// Buscar posicion de un elemento
/*
console.log(textos)
console.log(textos.indexOf("jueves"))
*/
//Busca un valor en el array, si existe devuelve true
/*
console.log(textos)
console.log(textos.includes("Mundo"))
 */
//invierte el orden del array original
/*
console.log(textos)
textos.reverse()
console.log(textos)
*/
//tranforma el array en un string separo por el valor que paso por parametros
/*
console.log(textos.join(" - "))
*/
//ejemplo practico de arrays
const listaNombres = []

const eliminar = (nombre) =>{
    let index = listaNombres.indexOf(nombre)
    if(index != -1){
        listaNombres.splice(index,1)
        alert(nombre + "eliminado correctamente")
    }else{
        alert("el nombre: " + nombre + "no existe en el array")
    }
}
let nombre = prompt("ingrese nombre si quiere salir escribir esc").toUpperCase()

while(nombre !== "ESC"){
    let accion = prompt("E: eliminar / A: agregar / AC: actualizar")

    if(accion === "A"){
        listaNombres.push(nombre)
    }else if(accion === "E"){
        eliminar(nombre)
    }
   
    console.log(listaNombres)
    nombre =  prompt("ingrese nombre si quiere salir escribir esc").toUpperCase()
}
console.log(listaNombres.join(" / "))
/*
const nuevaLista = listaNombres.concat(["ANA","LUCIA"])
console.log(nuevaLista.join(" / "))
*/

