//importar funciones del modulo card
import { card, showProducts} from './modules/card.js';

let products = [

    {
        "name": "Alien Sey Hi",
        "img": "../assets/img-products/skates/alien.png",
        "price": 1500,
        "description": "Patineta con ilustracion de pulpo"
    },
    {
        "name": "Look Me",
        "img": "../assets/img-products/skates/eye.png",
        "price": 1350,
        "description": "Patineta con ilustracion de aliens"
    },
    {
        "name": "Inside Me",
        "img": "../assets/img-products/skates/girl.png",
        "price": 1100,
        "description": "Patineta con ilustracion de una pesadilla"
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

showProducts(products, 'list-items');