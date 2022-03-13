//Elementos dom
const 
    form = document.getElementById('new-product-form'),
    name = document.getElementById('input-name'),
    description = document.getElementById('input-description'),
    price = document.getElementById('input-price'),
    img = document.getElementById('input-img');

//validacion
form.addEventListener('sumit', (e) => {
    e.preventDefault();

})

//agregar producto a usando la clase item