let items = []

const actualizarItem = (id) => {
    console.log("actualizar item")
}
const borrarItem = (id) =>{
    items = JSON.parse(localStorage.getItem("items")) || []
    const index = items.findIndex((item)=>{
        return item.id == id
    })
    console.log(index)
    if(index != -1){
        items.splice(index,1)
        localStorage.setItem("items",JSON.stringify(items))
    }
}
//sirve para mostrar todos los items en forma de tarjeta
const mostrarItems = ()=>{
    const contenedorItems = document.getElementById("contenedorItems")
    contenedorItems.innerHTML = ""
    items = JSON.parse(localStorage.getItem("items")) || []
    items.forEach((item)=>{
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
                            <h3>${item.nombre}</h3>
                            <span>${item.cantidad}</span>
                            <span>${item.estado}</span>
                            <button id="borrar${item.id}">Borrar</button>
                            <button id="actualizar${item.id}">Actualizar</button>
                            `
        contenedorItems.append(tarjeta)
        const btnBorrar = document.getElementById("borrar" + item.id)
        btnBorrar.addEventListener("click",()=>{
            borrarItem(item.id)
            mostrarItems()
        })
        
    })
    
}
//sirve para agregar un item 
const agregarItem = () =>{
    const cargaItem = document.getElementById("cargarItem")
    cargaItem.addEventListener("submit",(e)=>{
        e.preventDefault()
        const item = {
            id: Math.round(Math.random() * 1000000000000000),
            nombre: e.target.children["nombreItem"].value,
            cantidad: e.target.children["cantidadItem"].value,
            estado: e.target.children["estadoItem"].value
        }
        items.push(item)
        localStorage.setItem("items",JSON.stringify(items))
        cargaItem.reset()
        mostrarItems()
    
    })
}

agregarItem()
mostrarItems()