const cantidadMemes = 11
const galeriaDeMemes = document.querySelector("#galeriaDeMemes")
for(let i = 1;i <= cantidadMemes;i++){
    const archivo = "./img/meme" + i + ".jpeg"
    const img = document.createElement("img")
    img.src = archivo
    img.id = "meme" + i
    galeriaDeMemes.append(img)
}

galeriaDeMemes.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        const id = e.target.id
        const visualizarMeme = document.querySelector("#visualizarMeme")
        visualizarMeme.src = "./img/" + id +".jpeg"
    }
})

const ingresoTitulo = document.querySelector("#ingresoTitulo")
ingresoTitulo.addEventListener("change",(e)=>{
    const tituloMeme = document.querySelector("#tituloMeme")
    tituloMeme.innerText = e.target.value
})

const ingresoTexto = document.querySelector("#ingresoTexto")
ingresoTexto.addEventListener("change",(e)=>{
    const textoMeme = document.querySelector("#textoMeme")
    textoMeme.innerText = e.target.value
})

//almacenar en el localStorage los memes generados
const memes = JSON.parse(localStorage.getItem("memes")) || []
const guardarMeme = document.querySelector("#guardarMeme")
guardarMeme.addEventListener("click",()=>{
    const tituloMeme = document.querySelector("#tituloMeme")
    const textoMeme = document.querySelector("#textoMeme")
    const visualizarMeme = document.querySelector("#visualizarMeme")
    const meme = {
        id: Math.round(Math.random() * 1000000000000000),
        titulo:tituloMeme.innerText,
        texto:textoMeme.innerText,
        src:visualizarMeme.src
    }
    memes.push(meme)
    localStorage.setItem("memes",JSON.stringify(memes))
})