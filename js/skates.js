//importar funciones del modulo card
import { card, showProducts} from './modules/card.js';
import { addCart} from './modules/addCart.js';

fetch("http://localhost:8081/api/products/category/1")
  .then(res => res.json())
  .then(productsArray => {

    showProducts(productsArray, 'list-items');
    addCart();
  })
  .catch(error => console.error('Error:', error));