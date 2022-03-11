//modulo card, donde pondremos los recursos necesarios para agregar un item y crear una tarjeta dinamica

export class Item{
    name= "";
    img= "";
    price=0;
    description="";

    constructor(name, img, price, description){
        this.name= name;
        this.img=img;
        this.price=price; 
        this.description=description;
    }
}

// Crea una nueva instancia de item y la agrega a un arreglo
export function addItem(array, name, img, price, description){

    let object = new Item( name, img, price, description);
    array.push(object);
}

//Crea una tarjeta dinamica solo de presentacion, con la imagen de muestra
export function card(object = ""){

    let card =  `    
    <div class="col-lg-3">
        <div class="card card-style">
            <img src="${object.img}" class="card-img-top " alt="...">
            <div class="card-body p-1">
                <div class="shop text-center">
                    <div class="shop-icon"></div>
                </div>
                <p class="card-text h1 text-center">$990</p>
            </div>
        </div>
    </div>
    `;

    return card;
}

//Muestra los productos alojados en el array en el id que se indique
export function showProducts(array, id){

    let html = '';
    const wrapper = document.getElementById(id);

    array.forEach((item) => {
        html += card(item);
    });

    wrapper.innerHTML = html;
}


