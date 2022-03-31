

let longboards = [

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

//Udate the value in the Sub-total column
function updateSubtotal(element) {

    //Get the price unit as a float
    let pu = element.getElementsByClassName("pu")[0].textContent;
    pu = pu.replace(/\s+/g, "");
    pu = pu.replace("$", "");
    pu = pu.replace(",", "");
    pu = pu.replace("MXN", "");
    pu = parseFloat(pu);

    //Get the quantity from the input
    let qty = element.getElementsByClassName("qty")[0].getElementsByTagName("input")[0].value;

    let subtot = pu * qty; //Get the subtotal

    //Change subtotal cell value
    let subtotal = element.getElementsByClassName("subtotal")[0];
    subtotal.textContent = `$${subtot.toLocaleString()}`;

    return subtot;

};//updateSubtotal

//Click action on the "Calculate prices" button
function calcAll() {

    let elements = document.getElementsByClassName("product-cart"); //Get an HTML with all products
    let totalElement = document.getElementById("total-value"); //Get total HTML element
    let total = 0;

    //Loop through all products
    for (let product of elements) {
        let subtotal = updateSubtotal(product);
        total += subtotal
    };//for

    //Imprime en el DOM el precio total
    totalElement.textContent = total.toLocaleString();

};//calcAll

//Add a listener to the table body to catch all the clicks on the delete buttons
function removeButton() {
    let body = document.getElementById("table-body");//Get the body element

    body.addEventListener("click", function (e) {

        if (e.target && e.target.nodeName == "BUTTON") { //Verify that the click is from a button
            tableBody = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
            tableRow = e.target.parentNode.parentNode.parentNode.parentNode;
            tableBody.removeChild(tableRow); //Remove the row
            productName = tableRow.getElementsByClassName("product-cart-name")[0].textContent;
            productName = productName.trim();

            let productosStorage = localStorage.getItem("productosCarrito");
            if (productosStorage != null) {
                let productosCarrito = JSON.parse(productosStorage);
                productosCarrito = productosCarrito.filter(producto => {
                    return producto.name != productName;
                });
                let jsonProductos = JSON.stringify(productosCarrito);
                localStorage.setItem("productosCarrito", jsonProductos);
                calcAll();
            }else{
                localStorage.setItem("productosCarrito", []); //Previene un bug al borrar el LocalStorage y después usar el boton de borrar artículo
                calcAll();
                localStorage.removeItem("productosCarrito");
            }
            
        };

    });//addEventListener

};//removeButton

//Creates a new row with the product name and price given by the client
function createProduct(productosCarrito) {
    let product = {};

    productosCarrito.forEach(nameProduct => {
        product = longboards.find(e => e.name == nameProduct.name);

        //Creates the string for the new product in HTML
        newProductString = `
    <div  class="row first-row product-cart">
    <div class="col-3 col-md-1 d-flex justify-content-center">
    <img src="${product.img}" alt="producto" class="img-cart">
</div>
<div class="col-9 col-md-11">

    <div class="row second-row">
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center product-cart-name">
            ${product.name}
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center pu">
            $${product.price.toLocaleString()}MXN
        </div>
        <div class="col-6 col-md-1 d-flex justify-content-center align-items-center qty">
            <label>
                <input type="number" value="1" min="1" class="input-qty" step="1">
            </label>
        </div>
        <div class="col-6 col-md-3 d-flex justify-content-center align-items-center">
            <span class="show-mobile">Subtotal: </span> <span class="subtotal"> </span> MXN
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-center align-items-center">
            <button class="btn button-delete-cart">Borrar artículo</button>
        </div>
    </div>
</div>
<img src="../assets/img-bg/fondo_productos_2560x325.png" alt="fondo" class="bg-cart">
</div>
    `
        //Add the new element to the HTML
        let body = document.getElementById("table-body");
        body.innerHTML += newProductString;



    });//forEach



};//createProduct

///////////////7Borrar cuando se añadan productos al local storage con botón de carrito//////////////////
/* let productos=[
    {
        name: "Octo Purple"
    },
    {
        name: "Spaceman"
    },
    {
      name: "Turquoise"
    }
];

let jsonProductos = JSON.stringify(productos);
localStorage.setItem("productosCarrito",jsonProductos); */
///////////////7Borrar cuando se añadan productos al local storage con botón de carrito//////////////////


let productosStorage = localStorage.getItem("productosCarrito");
let productosCarrito = JSON.parse(productosStorage);
createProduct(productosCarrito);


let body = document.getElementById("table-body");//Get the body element
body.addEventListener("change", function (e) {
    let tmpQty = e.target.value
    console.log(tmpQty);
    if (tmpQty >= 1) {
        e.target.value = Math.round(tmpQty)
    } else {
        e.target.value = 1;
    }
    calcAll();
});//addEventListener

removeButton(); //Button to remove products
calcAll();
