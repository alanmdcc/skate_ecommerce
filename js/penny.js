//importar funciones del modulo card
import { card, showProducts} from './modules/card.js';

let products = [

    {
        "name": "Cian",
        "img": "../assets/img-products/pennyboard/cian.png",
        "price": 1500,
        "description": "Patineta con ilustracion de pulpo"
    },
    {
        "name": "Gray",
        "img": "../assets/img-products/pennyboard/gray.png",
        "price": 1350,
        "description": "Patineta con ilustracion de aliens"
    },
    {
        "name": "Green",
        "img": "../assets/img-products/pennyboard/green.png",
        "price": 1100,
        "description": "Patineta con ilustracion de una pesadilla"
    },
    {
        "name": "Mitary Green",
        "img": "../assets/img-products/pennyboard/militaryGreen.png",
        "price": 950,
        "description": "Patineta con ilustracion de pulpo y calavera"
    },
    {
        "name": "Orange",
        "img": "../assets/img-products/pennyboard/orange.png",
        "price": 1120,
        "description": "Patineta con ilustracion de hombre sobre monstruo"
    },
    {
        "name": "Pistachio",
        "img": "../assets/img-products/pennyboard/pistachio.png",
        "price": 1900,
        "description": "Patineta con ilustracion de samurai y dragón"
    },
    {
        "name": "Purple",
        "img": "../assets/img-products/pennyboard/purple.png",
        "price": 1750,
        "description": "Patineta con ilustracion de dinosaurios"
    },
    {
        "name": "Red",
        "img": "../assets/img-products/pennyboard/red.png",
        "price": 1660,
        "description": "Patineta con ilustracion de figuras"
    },
    {
        "name": "Turquoise",
        "img": "../assets/img-products/pennyboard/turquoise.png",
        "price": 1470,
        "description": "Patineta con ilustracion de astronauta en otro planeta"
    },
    {
        "name": "Yellow",
        "img": "../assets/img-products/pennyboard/yellow.png",
        "price": 1200,
        "description": "Patineta con ilustracion de lobo"
    }
];

showProducts(products, 'list-items');