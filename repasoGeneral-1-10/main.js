const items = [
    {
        nombre: "Martillo",
        cantidad: 12,
        estado: "regular"
    },
    {
        nombre: "Destornillador",
        cantidad: 8,
        estado: "bueno"
    },
    {
        nombre: "Sierra",
        cantidad: 5,
        estado: "nuevo"
    },
    {
        nombre: "Taladro",
        cantidad: 10,
        estado: "regular"
    },
    {
        nombre: "Llave inglesa",
        cantidad: 15,
        estado: "bueno"
    },
    {
        nombre: "Cinta métrica",
        cantidad: 20,
        estado: "nuevo"
    }
]
//sirve para mostrar todos los items en forma de tarjeta
const mostrarItems = ()=>{
    const contenedorItems = document.getElementById("contenedorItems")
    contenedorItems.innerHTML = ""
    items.forEach((item)=>{
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
                            <h3>${item.nombre}</h3>
                            <span>${item.cantidad}</span>
                            <span>${item.estado}</span>
                            <button>Borrar</button>
                            <button>Actualizar</button>
                            `
        contenedorItems.append(tarjeta)
    })
    
}
//sirve para agregar un item 
const agregarItem = () =>{
    const cargaItem = document.getElementById("cargarItem")
    cargaItem.addEventListener("submit",(e)=>{
        e.preventDefault()
        const item = {
            nombre: e.target.children["nombreItem"].value,
            cantidad: e.target.children["cantidadItem"].value,
            estado: e.target.children["estadoItem"].value
        }
        items.push(item)
        cargaItem.reset()
        mostrarItems()
    
    })
}

agregarItem()
mostrarItems()
