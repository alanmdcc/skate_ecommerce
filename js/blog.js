let skaters=[
    {
        name: "Itzel Granados",
        age: 20,
        state: "Ciudad de México",
        comment: "Medalla de bronce en Panamericanos Colombia 2015",
        instagram: "https://www.instagram.com/sobreruedasfedmex/",
        img: "../assets/blog/itzel.PNG"
    }
]

let wrapper = document.getElementById("skaters-wrapper")
let cardsHTML = "";
let emptyCardsHTML = "";

skaters.forEach((item)=>{
    let tmpHTML = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-3">
        <div class="card" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="Itzel Granados">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Edad: ${item.age} años</p>
                <p class="card-text">Estado: ${item.state}</p>
                <p class="card-text">${item.comment}</p>
                <a href="${item.instagram}" target="_blank"><img src="../assets/icons/rede-social-instagram.png" alt="Instagram" class="icon-femepar"></a>
            </div>
        </div>
    </div>
    `
    cardsHTML += tmpHTML;
})

wrapper.innerHTML = cardsHTML;

for(let i=1;i<8;i++){
    let tmpHTML = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-3">
        <div class="card" style="width: 18rem;">
            <img src="../assets/blog/skater.jpg" class="card-img-top" alt="Itzel Granados">
            <div class="card-body">
                <h5 class="card-title">Nombre</h5>
                <p class="card-text">Edad:</p>
                <p class="card-text">Estado:</p>
                <p class="card-text">Comentario</p>
                <a href="#"><img src="../assets/icons/rede-social-instagram.png" alt="Instagram" class="icon-femepar"></a>
            </div>
        </div>
    </div>
    `
    emptyCardsHTML += tmpHTML;
}

wrapper.innerHTML += emptyCardsHTML;
