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
export function card(object){

    let card =  `    
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
        <div class="card card-style">
            <img src="${object.img}" class="card-img-top img-product" alt="producto">
            <div class="card-body p-1">
                <div class="shop text-center">
                    <a href="#"><img src="../assets/icons/shoppingcart.svg" class="img-cart" alt="cart"></a>
                </div>
                <p class="card-text text-center product-price">$${object.price.toLocaleString()}</p>
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


