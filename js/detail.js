import { addCart} from './modules/addCart.js';

function crearTarjeta(product){
    let ancla = document.getElementById("product-container");
    let cardProduct = `
    <section class="row">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <img src="${product.productPicture}" alt="patineta" class="img-skate">
            </div>
        </section>
        <section class="row">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <h2 class="skate-name">${product.nameProduct}</h2>
                <div class="skate-desc">${product.descriptionProduct}</div>
                <div class="skate-price">$${product.priceProduct.toLocaleString()}</div>
            </div>
        </section>
        <div class="shop text-center pstn-btn-cart">
          <a href="./cart.html?id=${product.idProduct}"><img src="../assets/icons/carrito_barmenu_100x100.png" class="btn-cart img-cart" id="img-cart" alt="cart"></a>
        </div>
    `
    ancla.innerHTML = cardProduct
}

let urlWindow = window.location.search;
const urlParams = new URLSearchParams(urlWindow);
const idProduct = urlParams.get("id");

fetch(`http://localhost:8081/api/products/${idProduct}`)
  .then(res => res.json())
  .then(product => {
    crearTarjeta(product);
    addCart();
  })
  .catch(error => console.error('Error:', error));



