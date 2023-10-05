
const carouselInner = document.getElementById("carouselInner")
const carouselIndicators = document.getElementById("carouselIndicators")
const traerDataCarousel = async () =>{
    const response = await fetch("./dataCarousel.json")
    const dataCarousel = await response.json()
    dataCarousel.forEach((element,index) => {
  
        const div = document.createElement("div")
        if( index == 0){
            div.className= "carousel-item active"
        }else{
            div.className= "carousel-item"
            const miBoton = document.createElement("button")
            miBoton.setAttribute('type', 'button')
            miBoton.setAttribute('data-bs-target', '#carouselExampleCaptions')
            miBoton.setAttribute('data-bs-slide-to', index)
            miBoton.setAttribute('aria-label', "Slide" + index)
            carouselIndicators.append(miBoton)
        }
        
        div.innerHTML = `<img src="${element.imagen}" class="d-block w-100" alt="...">
                         <div class="carousel-caption d-none d-md-block">
                            <h5>${element.titulo}</h5>
                            <p>${element.descripcion}</p>
                        </div>
        `
        carouselInner.append(div)
    });
}

traerDataCarousel()