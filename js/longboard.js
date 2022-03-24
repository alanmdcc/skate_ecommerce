//importar funciones del modulo card
import {card, showProducts} from './modules/card.js';

let html = '';
let recommendedProducts = [

  {
    "name" : "Octo Purple", 
    "img" : "../assets/img-products/longboard/longboard1.png",
    "price" : 1500, 
    "description" : "Patineta con ilustracion de pulpo"
  },
  {
    "name" : "Alien Invasion", 
    "img" : "../assets/img-products/longboard/longboard2.png",
    "price" : 1350, 
    "description" : "Patineta con ilustracion de aliens"
  },
  {
    "name" : "Dark Nightmare", 
    "img" : "../assets/img-products/longboard/longboard3.png",
    "price" : 1100, 
    "description" : "Patineta con ilustracion de una pesadilla"
  },
  {
    "name" : "Octo Skull", 
    "img" : "../assets/img-products/longboard/longboard4.png",
    "price" : 950, 
    "description" : "Patineta con ilustracion de pulpo y calavera"
  },
  {
    "name" : "Riding Monster", 
    "img" : "../assets/img-products/longboard/longboard5.png",
    "price" : 1120, 
    "description" : "Patineta con ilustracion de hombre sobre monstruo"
  },
  {
    "name" : "Dark Samurai", 
    "img" : "../assets/img-products/longboard/longboard6.png",
    "price" : 1900, 
    "description" : "Patineta con ilustracion de samurai y dragón"
  },
  {
    "name" : "Dino Nightmare", 
    "img" : "../assets/img-products/longboard/longboard7.png",
    "price" : 1750, 
    "description" : "Patineta con ilustracion de dinosaurios"
  },
  {
    "name" : "Figures", 
    "img" : "../assets/img-products/longboard/longboard8.png",
    "price" : 1660, 
    "description" : "Patineta con ilustracion de figuras"
  },
  {
    "name" : "Foreign Planet", 
    "img" : "../assets/img-products/longboard/longboard9.png",
    "price" : 1470, 
    "description" : "Patineta con ilustracion de astronauta en otro planeta"
  },
  {
    "name" : "Evil Wolf", 
    "img" : "../assets/img-products/longboard/longboard10.png",
    "price" : 1200, 
    "description" : "Patineta con ilustracion de lobo"
  }
];

showProducts(recommendedProducts, 'list-items');