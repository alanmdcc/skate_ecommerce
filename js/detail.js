let products = [

  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard/longboard1.png",
    "price" : 1500, 
    "description" : "Patineta con ilustración de pulpo"
  },
  {
    "name" : "Alien Invasion", 
    "img" : "../assets/img-products/longboard/longboard2.png",
    "price" : 1350, 
    "description" : "Patineta con ilustración de aliens"
  },
  {
    "name" : "Dark Nightmare", 
    "img" : "../assets/img-products/longboard/longboard3.png",
    "price" : 1100, 
    "description" : "Patineta con ilustración de una pesadilla"
  },
  {
    "name" : "Octo Skull", 
    "img" : "../assets/img-products/longboard/longboard4.png",
    "price" : 950, 
    "description" : "Patineta con ilustración de pulpo y calavera"
  },
  {
    "name" : "Riding Monster", 
    "img" : "../assets/img-products/longboard/longboard5.png",
    "price" : 1120, 
    "description" : "Patineta con ilustración de hombre sobre monstruo"
  },
  {
    "name" : "Dark Samurai", 
    "img" : "../assets/img-products/longboard/longboard6.png",
    "price" : 1900, 
    "description" : "Patineta con ilustración de samurai y dragón"
  },
  {
    "name" : "Dino Nightmare", 
    "img" : "../assets/img-products/longboard/longboard7.png",
    "price" : 1750, 
    "description" : "Patineta con ilustración de dinosaurios"
  },
  {
    "name" : "Figures", 
    "img" : "../assets/img-products/longboard/longboard8.png",
    "price" : 1660, 
    "description" : "Patineta con ilustración de figuras"
  },
  {
    "name" : "Foreign Planet", 
    "img" : "../assets/img-products/longboard/longboard9.png",
    "price" : 1470, 
    "description" : "Patineta con ilustración de astronauta en otro planeta"
  },
  {
    "name" : "Evil Wolf", 
    "img" : "../assets/img-products/longboard/longboard10.png",
    "price" : 1200, 
    "description" : "Patineta con ilustración de lobo"
  },
    {
      "name": "Cian",
      "img": "../assets/img-products/pennyboard/cian.png",
      "price": 1500,
      "description": "Patineta de color cian"
  },
  {
      "name": "Gray",
      "img": "../assets/img-products/pennyboard/gray.png",
      "price": 1350,
      "description": "Patineta de color gris"
  },
  {
      "name": "Green",
      "img": "../assets/img-products/pennyboard/green.png",
      "price": 1100,
      "description": "Patineta de color verde"
  },
  {
      "name": "Mitary Green",
      "img": "../assets/img-products/pennyboard/militaryGreen.png",
      "price": 950,
      "description": "Patineta de color verde militar"
  },
  {
      "name": "Orange",
      "img": "../assets/img-products/pennyboard/orange.png",
      "price": 1120,
      "description": "Patineta de color naranja"
  },
  {
      "name": "Pistachio",
      "img": "../assets/img-products/pennyboard/pistachio.png",
      "price": 1900,
      "description": "Patineta de color pistache"
  },
  {
      "name": "Purple",
      "img": "../assets/img-products/pennyboard/purple.png",
      "price": 1750,
      "description": "Patineta de color morado"
  },
  {
      "name": "Red",
      "img": "../assets/img-products/pennyboard/red.png",
      "price": 1660,
      "description": "Patineta de color rojo"
  },
  {
      "name": "Turquoise",
      "img": "../assets/img-products/pennyboard/turquoise.png",
      "price": 1470,
      "description": "Patineta de color turquesa"
  },
  {
      "name": "Yellow",
      "img": "../assets/img-products/pennyboard/yellow.png",
      "price": 1200,
      "description": "Patineta de color amarillo"
  },
  {
    "name": "Alien Sey Hi",
    "img": "../assets/img-products/skates/alien.png",
    "price": 1500,
    "description": "Patineta con ilustración de un alien"
},
{
    "name": "Look Me",
    "img": "../assets/img-products/skates/eye.png",
    "price": 1350,
    "description": "Patineta con ilustración de una cara"
},
{
    "name": "Inside Me",
    "img": "../assets/img-products/skates/girl.png",
    "price": 1100,
    "description": "Patineta con ilustración de un cerebro"
},
{
    "name": "Maths",
    "img": "../assets/img-products/skates/math.png",
    "price": 950,
    "description": "Patineta con ilustración de matemáticas"
},
{
    "name": "Skulls",
    "img": "../assets/img-products/skates/skull.png",
    "price": 1120,
    "description": "Patineta con ilustración de calaveras"
},
{
    "name": "Spaceman",
    "img": "../assets/img-products/skates/space.png",
    "price": 1900,
    "description": "Patineta con ilustración un astronauta"
},
{
    "name": "Kitties",
    "img": "../assets/img-products/skates/cat.png",
    "price": 1750,
    "description": "Patineta con ilustración de gatitos"
},
{
    "name": "Ovni",
    "img": "../assets/img-products/skates/alien2.png",
    "price": 1660,
    "description": "Patineta con ilustración un OVNI"
},
{
    "name": "Death",
    "img": "../assets/img-products/skates/girl_skull.png",
    "price": 1470,
    "description": "Patineta con ilustración de un esqueleto y mujer"
},
{
    "name": "Nice Guy Bear",
    "img": "../assets/img-products/skates/beard.png",
    "price": 1200,
    "description": "Patineta con ilustración un oso buena onda"
}
];

import { addCart} from './modules/addCart.js';

function crearTarjeta(producto){
    let ancla = document.getElementById("product-container");
    let cardProducto = `
    <section class="row">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <img src="${producto.img}" alt="patineta" class="img-skate">
            </div>
        </section>
        <section class="row">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <h2 class="skate-name">${producto.name}</h2>
                <div class="skate-desc">${producto.description}</div>
                <div class="skate-price">$${producto.price.toLocaleString()}</div>
            </div>
        </section>
        <div class="shop text-center pstn-btn-cart">
          <a href="./cart.html?name=${producto.name}"><img src="../assets/icons/carrito_barmenu_100x100.png" class="btn-cart img-cart" id="img-cart" alt="cart"></a>
        </div>
    `
    ancla.innerHTML = cardProducto
}

//<img src="../assets/icons/botonrojo_compras_300x300.png" alt="carrito" class="btn-cart">


let urlWindow = window.location.search;
const urlParams = new URLSearchParams(urlWindow);
const nameProduct = urlParams.get("name");
let detailProduct=products.find(e => e.name == nameProduct)

crearTarjeta(detailProduct);
addCart();

