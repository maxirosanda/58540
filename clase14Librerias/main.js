const comprarCocina = document.getElementById("comprarCocina")
comprarCocina.addEventListener("click",()=>{
    Swal.fire({
        icon:"error",
        title:"Compraste la cocina",
        text:"Te llegara en 48 hs",
        footer:"fldgjndghjdlhjdhtr",
        //imageUrl:"./img/cocina.webp",
        //imageHeight:"300",
        //imageAlt: 'A tall image',
        confirmButtonText: 'Ok',
        //timer:2000,
        width: 500,
        padding:"50px",
        color:"#000",
        background:"red",
        backdrop:"blue",
        showCancelButton: true,
        cancelButtonText:"cancelar"
    
    })
})
// toastify
const btnAgregarCarrito = document.querySelector("#btnAgregarCarrito")
btnAgregarCarrito.addEventListener("click",()=>{
    Toastify({
        text: "Hola Mundo",
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`,
        //destination: "https://google.com.ar",
        //newWindow: true,
        style: {
            background: "red",
            border:"2px solid #000"
          },
          onClick:function(){
            alert("hice click")
          }
      }).showToast();
})


