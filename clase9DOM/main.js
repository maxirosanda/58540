/*
//Seleccionar por id (getElementById)
const titulo = document.getElementById("titulo")


//modifico el texto interior (innerText)
titulo.innerText = "Maxi"


//Seleccionar por class (getElementsByClassName)
const tarjetas = document.getElementsByClassName("tarjeta")

const tituloTarjeta = prompt("ingrese nombre del producto")
const descripcionTarjeta = prompt("ingrese descripcion del producto")
const precioTarjeta = parseFloat(prompt("Ingrese el precio del producto")) 

//agrego etiquetas dentro de la etiqueta seleccionada (innerHTML)
tarjetas[0].innerHTML = `<h4>${tituloTarjeta}</h4>
                         <p>${descripcionTarjeta}</p>
                         <span>${precioTarjeta}</span>
                         <button>Comprar</button>
                         `
*/
const productos = [
    {
        id: 1,
        nombre: "Lenovo C700",
        descripcion: "La mejor notebook del momento",
        precio: 300000
    },
    {
        id: 2,
        nombre: "Samsung Galaxy S20",
        descripcion: "Un potente smartphone con cámara de alta resolución",
        precio: 80000
    },
    {
        id: 3,
        nombre: "Sony Bravia 4K",
        descripcion: "Televisor con resolución Ultra HD para una experiencia inmersiva",
        precio: 120000
    },
    {
        id: 4,
        nombre: "Canon EOS 80D",
        descripcion: "Cámara DSLR de alta calidad para fotógrafos aficionados y profesionales",
        precio: 60000
    },
    {
        id: 5,
        nombre: "Bose QuietComfort 35 II",
        descripcion: "Auriculares con cancelación de ruido para una experiencia auditiva inigualable",
        precio: 35000
    },
    {
        id: 6,
        nombre: "Apple iPad Pro",
        descripcion: "Potente tablet con pantalla retina y soporte para Apple Pencil",
        precio: 90000
    },
    {
        id: 7,
        nombre: "Dell XPS 13",
        descripcion: "Laptop ultradelgada con pantalla InfinityEdge y procesador potente",
        precio: 85000
    },
    {
        id: 8,
        nombre: "Nike Air Max 270",
        descripcion: "Zapatillas deportivas con amortiguación de aire para máximo confort",
        precio: 8000
    },
    {
        id: 9,
        nombre: "Amazon Echo Dot",
        descripcion: "Altavoz inteligente con asistente virtual Alexa integrado",
        precio: 3000
    },
    {
        id: 10,
        nombre: "Xiaomi Mi Band 6",
        descripcion: "Pulsera de actividad con monitor de ritmo cardíaco y pantalla AMOLED",
        precio: 2500
    },
    {
        id: 11,
        nombre: "LG OLED CX",
        descripcion: "Televisor OLED con colores vibrantes y negros profundos",
        precio: 180000
    },
    {
        id: 12,
        nombre: "Canon EOS R5",
        descripcion: "Cámara mirrorless de alta resolución y video 8K",
        precio: 160000
    },
    {
        id: 13,
        nombre: "Sony WH-1000XM4",
        descripcion: "Auriculares inalámbricos con cancelación de ruido líder en la industria",
        precio: 45000
    },
    {
        id: 14,
        nombre: "Microsoft Surface Pro 7",
        descripcion: "Tablet 2 en 1 con teclado desmontable y potente procesador",
        precio: 90000
    },
    {
        id: 15,
        nombre: "Nintendo Switch",
        descripcion: "Consola de videojuegos versátil para jugar en casa o en movimiento",
        precio: 15000
    },
    {
        id: 16,
        nombre: "Fitbit Versa 3",
        descripcion: "Reloj inteligente con seguimiento de actividad y GPS integrado",
        precio: 6000
    },
    {
        id: 17,
        nombre: "Google Nest Hub",
        descripcion: "Asistente virtual con pantalla táctil para controlar tu hogar inteligente",
        precio: 7000
    },
    {
        id: 18,
        nombre: "GoPro HERO9 Black",
        descripcion: "Cámara de acción 5K resistente al agua para aventuras extremas",
        precio: 40000
    },
    {
        id: 19,
        nombre: "HP Spectre x360",
        descripcion: "Laptop convertible con pantalla táctil y diseño elegante",
        precio: 110000
    },
    {
        id: 20,
        nombre: "Bose SoundLink Revolve+",
        descripcion: "Altavoz Bluetooth portátil con sonido envolvente de 360 grados",
        precio: 20000
    },
    {
        id: 21,
        nombre: "Bose SoundLink ",
        descripcion: "Altavoz Bluetooth portátil con sonido envolvente de 360 grados",
        precio: 50000
    }
]


let contenedorTarjetas = document.getElementById("contenedorTarjetas")
    contenedorTarjetas = document.querySelector("#contenedorTarjetas")
productos.forEach(producto =>{
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `<h4>${producto.nombre}</h4>
                         <p>${producto.descripcion}</p>
                         <span>${producto.precio}</span>
                         <button>Comprar</button>`
    contenedorTarjetas.append(tarjeta)
})
//eliminar una etiqueta html (remove())

let tarjetas = document.getElementsByClassName("tarjeta")
    tarjetas = document.querySelectorAll(".tarjeta")
tarjetas[20].remove()


/*
let tituloCaja = document.querySelector(".caja h2")
console.log(tituloCaja)
*/





