const btnComprar = document.querySelector("#btnComprar")

btnComprar.addEventListener("keyup",(e)=>{
    console.log(e.key)
})

const caja = document.querySelector("#caja")
caja.addEventListener("click",()=>{
    console.log("click")
})

const datos = document.querySelector("#datos")
datos.addEventListener("change",(e)=>{
    console.log(e.target.value)
})

const datos2 = document.querySelector("#datos2")
datos2.addEventListener("input",(e)=>{
    console.log(e.data)
})

const cargaProducto = document.querySelector("#cargaProducto")
cargaProducto.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e.target.children["nombre"].value)
    console.log(e.target.children["descripcion"].value)
    console.log(e.target.children["precio"].value)
    console.log(e.target.children["stock"].value)
})

