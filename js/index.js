//importar funciones del modulo card
import { cardIndex, showProductsIndex } from './modules/card.js';
import { addCart } from './modules/addCart.js';

let html = '';
let recommendedProducts = [];
let idRecommendedProducts = [22, 21, 30];

fetch(`http://localhost:8081/api/products/${idRecommendedProducts[0]}`)
  .then(res => res.json())
  .then(product => {
    recommendedProducts.push(product);
    fetch(`http://localhost:8081/api/products/${idRecommendedProducts[1]}`)
      .then(res => res.json())
      .then(product => {
        recommendedProducts.push(product);
        fetch(`http://localhost:8081/api/products/${idRecommendedProducts[2]}`)
          .then(res => res.json())
          .then(product => {
            recommendedProducts.push(product)
            showProductsIndex(recommendedProducts, 'list-items');
            addCart();
          })
      })
  })
  .catch(error => console.error('Error:', error));

  let userLogged = window.sessionStorage.getItem("userLogged");
  let tokenJSON = JSON.parse(window.sessionStorage.getItem("token"));
  if (tokenJSON != null && userLogged != null) {
      let token = tokenJSON.accessToken;
    fetch("http://localhost:8081/api/admin/",
        {
            method: 'POST',
            body: userLogged,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Impuls8 ' + token
            }
        })
        .then(res => res.json())
        .then(isAdmin => {
          document.getElementsByClassName("hide-user")[0].classList.remove("hide-user");
            if (isAdmin) {
                document.getElementsByClassName("hide-admin")[0].classList.remove("hide-admin");
            }else{
            }
        })
        .catch(error => console.error('Error:', error));
}

let btnLogout = document.getElementById("btn-logout");
btnLogout.addEventListener("click",(e)=>{
    sessionStorage.removeItem("userLogged");
    sessionStorage.removeItem("token");
    location.reload();
})