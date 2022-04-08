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