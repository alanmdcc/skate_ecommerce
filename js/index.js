//importar funciones del modulo card
import { cardIndex, showProductsIndex } from './modules/card.js';
import { addCart } from './modules/addCart.js';

let html = '';
let recommendedProducts = [];
let idRecommendedProducts = [22, 21, 30];

fetch(`http://localhost:8081/api/products/${idRecommendedProducts[0]}`)
  .then(res => res.json())
  .then(product => {
    console.log(product);
    recommendedProducts.push(product);
    fetch(`http://localhost:8081/api/products/${idRecommendedProducts[1]}`)
      .then(res => res.json())
      .then(product => {
        recommendedProducts.push(product);
        fetch(`http://localhost:8081/api/products/${idRecommendedProducts[2]}`)
          .then(res => res.json())
          .then(product => {
            recommendedProducts.push(product)
            console.log(recommendedProducts);
            showProductsIndex(recommendedProducts, 'list-items');
            addCart();
          })
      })
  })
  .catch(error => console.error('Error:', error));
