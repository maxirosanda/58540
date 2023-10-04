//estos datos estan en la base de datos -------------------
const DB = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]

const pedirDatos = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(DB)
        },1000)
    })
}
//---------------------------------------------------------


let productos = []
let mostrarProducto = (productos) =>{

}
pedirDatos().then((response)=>{
    productos = response
    mostrarProducto(productos)
})





