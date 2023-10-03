/*
//Sincronico
console.log("hola mundo")
let variable = 12
const funcion = () =>{
    console.log("soy una funcion")
}
if(variable > 12){
    console.log("mayor que 12")
}else{
    console.log("menor o igual a 12")
}
for(let i = 0;i<12;i++){
    console.log(i)
}
console.log("jfkdfj")
funcion()
*/
//-----------------------------------------
/*
console.log("inicio")
setTimeout(()=>{
    console.log("hola tarde 2 segundos")
},2000)
console.log("final")
*/
//Ejemplo de uso setTimeout
/*
const btnAbrir = document.querySelector("#btnAbrir")
btnAbrir.addEventListener("click",()=>{
    const popup = document.querySelector("#popup")
    popup.classList.add("popupActivo")
    setTimeout(() => {
        popup.classList.remove('popupActivo')
    }, 2500)
})
*/
/*
const mensaje = "hola"
const mensaje2 = "mundo"

for (let letra of mensaje) {
    setTimeout(()=>{
        console.log(letra) 
    },2000)
    
}

for (let letra of mensaje2) {

    setTimeout(()=>{
        console.log(letra) 
    },3000)

}
*/
/*
console.log("inicio del proceso")
setTimeout(()=>{
    console.log("mensaje")
},0)
console.log("fin del proceso")
*/
/*
const funcionA = () =>{
    console.log("esta es la funcion A")
}
const funcionB = () =>{
    funcionA()
    console.log("esta es la funcion B")
}
const funcionC = () =>{
    funcionB()
    console.log("esta es la funcion C")
}
const funcionD = () =>{
    funcionC()
    console.log("esta es la funcion D")
}
const funcionE = ()=>{
    funcionA()
    console.log("esta es la funcion E")
}
funcionD()
funcionE()
*/
/*
setInterval(() => {
    console.log("Tic")
}, 2000)
*/
/*
let contar = 0
let contador = setInterval(() => {
    contar++
    console.log(contar," tic")
    if(contar >= 5){
        clearInterval(contador)
    }
}, 2000);
*/
const eventoFuturo = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           reject({nombre:"televisor"})
        },1000)
       
    })
}

eventoFuturo().then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("fin promesa")
})