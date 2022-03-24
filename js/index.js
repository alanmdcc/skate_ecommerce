//importar funciones del modulo card
import {card, showProducts} from './modules/card.js';

let html = '';
let recommendedProducts = [

  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard1.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Alien Invasion", 
    "img" : "../assets/img-products/longboard2.png",
    "price" : 1350, 
    "description" : "Patineta con ilustracion de aliens"
  },
  {
    "name" : "Dark Nightmare", 
    "img" : "../assets/img-products/longboard3.png",
    "price" : 1100, 
    "description" : "Patineta con ilustracion de una pesadilla"
  }
];

showProducts(recommendedProducts, 'list-items');