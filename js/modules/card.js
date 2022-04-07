//modulo card, donde pondremos los recursos necesarios para agregar un item y crear una tarjeta dinamica

export class Item{
    nameProduct= "";
    priceProduct= "";
    descriptionProduct=0;
    productPicture="";
    idCategory=1

    constructor(name, price, description, img, category){
        this.nameProduct= name;
        this.priceProduct=price; 
        this.descriptionProduct=description;
        this.productPicture=img;
        this.idCategory=category;
    }
}

// Crea una nueva instancia de item y la agrega a un arreglo
export function addItem(array, name, price, description, img, category){

    let object = new Item( name, price, description, img, category);
    array.push(object);
}

//Crea una tarjeta dinamica solo de presentacion, con la imagen de muestra
export function card(product){

    let card =  `    
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
        <div class="card card-style">
            <a href="./detail.html?id=${product.idProduct}" >
                <img src="${product.productPicture}" class="card-img-top img-product" alt="producto">
            </a>
            <div class="card-body p-1">
                <div class="shop text-center">
                    <a href="./detail.html?id=${product.idProduct}"><img src="../assets/icons/carrito_barmenu_100x100.png" class="img-cart" alt="cart"></a>
                </div>
                <p class="card-text text-center product-price">$${product.priceProduct.toLocaleString()}</p>
            </div>
        </div>
    </div>
    `;

    return card;
}

export function cardIndex(product){

    let card =  `    
    <div class="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
        <div class="card card-style">
            <a href="./pages/detail.html?id=${product.idProduct}" >
                <img src="${product.productPicture}" class="card-img-top img-product" alt="producto">
            </a>
            <div class="card-body p-1">
                <div class="shop text-center">
                    <a href="./detail.html?id=${product.idProduct}"><img src="./assets/icons/carrito_barmenu_100x100.png" class="img-cart" alt="cart"></a>
                </div>
                <p class="card-text text-center product-price">$${product.priceProduct.toLocaleString()}</p>
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

export function showProductsIndex(array, id){

    let html = '';
    const wrapper = document.getElementById(id);

    array.forEach((item) => {
        html += cardIndex(item);
    });

    wrapper.innerHTML = html;
}

