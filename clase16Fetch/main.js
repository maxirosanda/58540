
// Traer todos los post
const btnTraerPosts = document.getElementById("btnTraerPosts")
btnTraerPosts.addEventListener("click", async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    const contenedorPosts = document.getElementById("contenedorPosts")
        posts.forEach(post => {
            const tarjetaPost = document.createElement("div")
            tarjetaPost.className = "tarjetaPost"
            tarjetaPost.innerHTML =`
                                <h3>${post.title}</h3>
                                <p>${post.body}</p>
                                `
        contenedorPosts.append(tarjetaPost)
        })
})
// Buscar Post
const buscarPost = document.getElementById("buscarPost")
buscarPost.addEventListener("submit",(e)=>{
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/posts/" + e.target.children[0].value)
    .then(response => response.json())
    .then(post => {
        const contenedorPosts = document.getElementById("contenedorPosts")
        contenedorPosts.innerHTML = ""
        const tarjetaPost = document.createElement("div")
            tarjetaPost.className = "tarjetaPost"
            tarjetaPost.innerHTML =`
                                <h3>${post.title}</h3>
                                <p>${post.body}</p>
                                `
        contenedorPosts.append(tarjetaPost)
    })
})

 //crear Post
const crearPost = document.getElementById("crearPost")
crearPost.addEventListener("submit",(e)=>{
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify({
            title: e.target.children["title"],
            body:  e.target.children["body"],
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        } 
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    crearPost.reset()
})
// Actualizar post
const actualizarPost = document.getElementById("actualizarPost")
actualizarPost.addEventListener("submit",(e)=>{
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.children["id"].value, {
        method: 'PUT',
        body: JSON.stringify({
            id: e.target.children["id"].value,
            title: e.target.children["title"].value,
            body: e.target.children["body"].value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
})


fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});

/*
fetch("./data.json")
.then(response => response.json())
.then(data => {
    console.log(data)
}).catch((error)=>{
    alert("Error: " + error)
})
*/

const pedirDatos = async () =>{
    const response = await fetch("./data.json")
    const data = await response.json()
    console.log(data)
}
pedirDatos()


