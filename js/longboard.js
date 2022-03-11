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
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard2.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard3.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard4.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard5.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard6.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard7.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard8.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard9.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard10.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  }
];

showProducts(recommendedProducts, 'list-items', card());