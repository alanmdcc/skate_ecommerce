let products = [

    {
        "name": "Octo Purple",
        "img": "../assets/img-products/longboard/longboard1.png",
        "price": 1500,
        "description": "Patineta con ilustración de pulpo"
    },
    {
        "name": "Alien Invasion",
        "img": "../assets/img-products/longboard/longboard2.png",
        "price": 1350,
        "description": "Patineta con ilustración de aliens"
    },
    {
        "name": "Dark Nightmare",
        "img": "../assets/img-products/longboard/longboard3.png",
        "price": 1100,
        "description": "Patineta con ilustración de una pesadilla"
    },
    {
        "name": "Octo Skull",
        "img": "../assets/img-products/longboard/longboard4.png",
        "price": 950,
        "description": "Patineta con ilustración de pulpo y calavera"
    },
    {
        "name": "Riding Monster",
        "img": "../assets/img-products/longboard/longboard5.png",
        "price": 1120,
        "description": "Patineta con ilustración de hombre sobre monstruo"
    },
    {
        "name": "Dark Samurai",
        "img": "../assets/img-products/longboard/longboard6.png",
        "price": 1900,
        "description": "Patineta con ilustración de samurai y dragón"
    },
    {
        "name": "Dino Nightmare",
        "img": "../assets/img-products/longboard/longboard7.png",
        "price": 1750,
        "description": "Patineta con ilustración de dinosaurios"
    },
    {
        "name": "Figures",
        "img": "../assets/img-products/longboard/longboard8.png",
        "price": 1660,
        "description": "Patineta con ilustración de figuras"
    },
    {
        "name": "Foreign Planet",
        "img": "../assets/img-products/longboard/longboard9.png",
        "price": 1470,
        "description": "Patineta con ilustración de astronauta en otro planeta"
    },
    {
        "name": "Evil Wolf",
        "img": "../assets/img-products/longboard/longboard10.png",
        "price": 1200,
        "description": "Patineta con ilustración de lobo"
    },
    {
        "name": "Cian",
        "img": "../assets/img-products/pennyboard/cian.png",
        "price": 1500,
        "description": "Patineta con ilustración de pulpo"
    },
    {
        "name": "Gray",
        "img": "../assets/img-products/pennyboard/gray.png",
        "price": 1350,
        "description": "Patineta con ilustración de aliens"
    },
    {
        "name": "Green",
        "img": "../assets/img-products/pennyboard/green.png",
        "price": 1100,
        "description": "Patineta con ilustración de una pesadilla"
    },
    {
        "name": "Mitary Green",
        "img": "../assets/img-products/pennyboard/militaryGreen.png",
        "price": 950,
        "description": "Patineta con ilustración de pulpo y calavera"
    },
    {
        "name": "Orange",
        "img": "../assets/img-products/pennyboard/orange.png",
        "price": 1120,
        "description": "Patineta con ilustración de hombre sobre monstruo"
    },
    {
        "name": "Pistachio",
        "img": "../assets/img-products/pennyboard/pistachio.png",
        "price": 1900,
        "description": "Patineta con ilustración de samurai y dragón"
    },
    {
        "name": "Purple",
        "img": "../assets/img-products/pennyboard/purple.png",
        "price": 1750,
        "description": "Patineta con ilustración de dinosaurios"
    },
    {
        "name": "Red",
        "img": "../assets/img-products/pennyboard/red.png",
        "price": 1660,
        "description": "Patineta con ilustración de figuras"
    },
    {
        "name": "Turquoise",
        "img": "../assets/img-products/pennyboard/turquoise.png",
        "price": 1470,
        "description": "Patineta con ilustración de astronauta en otro planeta"
    },
    {
        "name": "Yellow",
        "img": "../assets/img-products/pennyboard/yellow.png",
        "price": 1200,
        "description": "Patineta con ilustración de lobo"
    },
    {
        "name": "Alien Sey Hi",
        "img": "../assets/img-products/skates/alien.png",
        "price": 1500,
        "description": "Patineta con ilustración de pulpo"
    },
    {
        "name": "Look Me",
        "img": "../assets/img-products/skates/eye.png",
        "price": 1350,
        "description": "Patineta con ilustración de aliens"
    },
    {
        "name": "Inside Me",
        "img": "../assets/img-products/skates/girl.png",
        "price": 1100,
        "description": "Patineta con ilustración de una pesadilla"
    },
    {
        "name": "Maths",
        "img": "../assets/img-products/skates/math.png",
        "price": 950,
        "description": "Patineta con ilustración de pulpo y calavera"
    },
    {
        "name": "Skulls",
        "img": "../assets/img-products/skates/skull.png",
        "price": 1120,
        "description": "Patineta con ilustración de hombre sobre monstruo"
    },
    {
        "name": "Spaceman",
        "img": "../assets/img-products/skates/space.png",
        "price": 1900,
        "description": "Patineta con ilustración de samurai y dragón"
    },
    {
        "name": "Kitties",
        "img": "../assets/img-products/skates/cat.png",
        "price": 1750,
        "description": "Patineta con ilustración de dinosaurios"
    },
    {
        "name": "Ovni",
        "img": "../assets/img-products/skates/alien2.png",
        "price": 1660,
        "description": "Patineta con ilustración de figuras"
    },
    {
        "name": "Death",
        "img": "../assets/img-products/skates/girl_skull.png",
        "price": 1470,
        "description": "Patineta con ilustración de astronauta en otro planeta"
    },
    {
        "name": "Nice Guy Bear",
        "img": "../assets/img-products/skates/beard.png",
        "price": 1200,
        "description": "Patineta con ilustración de lobo"
    }
];

function updateProductLocalStorage(e) {
    e.preventDefault();
    console.log("Prevent default");
    let productosCarrito = [];
    console.log(e.target.parentNode.href.split("?")[1]);
    const urlParams = new URLSearchParams(e.target.parentNode.href.split("?")[1]);
    const idProduct = urlParams.get("id");
    fetch(`http://localhost:8081/api/products/${idProduct}`)
        .then(res => res.json())
        .then(jsonProduct => {
            console.log(jsonProduct);
            jsonProduct.quantity = 1;
            console.log(jsonProduct);
            let productosStorage = localStorage.getItem("productosCarrito");
            if (productosStorage == null) {
                productosCarrito = [jsonProduct];
                Swal.fire({
                    icon: 'success',
                    text: 'Se añadió el producto a tu carrito',
                })
            } else {
                productosCarrito = JSON.parse(productosStorage);
                console.log(productosCarrito);
                if (typeof (productosCarrito.find(e => e.idProduct == idProduct)) == "undefined") {
                    productosCarrito.push(jsonProduct);
                    console.log("Producto nuevo");
                    Swal.fire({
                        icon: 'success',
                        text: 'Se añadió el producto a tu carrito',
                    })
                } else {
                    console.log("Producto existente");
                    Swal.fire({
                        icon: 'info',
                        text: 'El producto ya existe en tu carrito',
                    })
                }
            }
            productosStorage = JSON.stringify(productosCarrito);
            localStorage.setItem("productosCarrito", productosStorage);
        })
        .catch(error => console.error('Error:', error));

}

//Añade un producto al localStorage validando si ya existe la variable y si ya existe el producto en el carrito
export function addCart() {

    let cartArray = document.getElementsByClassName("img-cart");

    for (let cart of cartArray) {
        cart.addEventListener("click", function (e) {
            updateProductLocalStorage(e)
        });
    }

}//addCart