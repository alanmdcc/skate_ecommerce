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
  }
];

showProducts(recommendedProducts, 'list-items', card());





/*
let price= document.querySelectorAll('.price');
const carta= document.querySelectorAll('.card');
let precios=[];
let cartas=[];

//cambiar por for each
for (let i=0; i<=5;i++){
    precios[i]=price;
    console.log(precios[i].textContent);
}

for (let i=0; i<=5;i++){
    cartas[i]=carta;
}

let mayor=0;
price.forEach(function(el) {
    if(el.textContent>mayor){
        mayor=el.textContent;
    }
})

function ocultar(){
    for(let i=0;i<precios.length;i++){ 
     for(let j=0;j<cartas.length;j++){
         if(600>precios[i].textContent){
             cartas[j].classList.add('hide');
         }
     }
  }
}

price.forEach(function(el){
    ocultar();
})

//usar plantilla de card



class item{
    name= "";
    img= "";
    price=0;
    description="";

    constructor(name, img,price,description){
        this.name= name;
        this.img=img;
        this.price=price;
        this.description=description;
    }
}


function addItem(producto){
    const itemHTML =   '<div class="container container-formato">\n'+
    '<div class="row">\n'+
      '<div class="col-lg-4 card1">\n'+
        '<div class="card p-1" style="width: 15rem;">\n'+
         ' <img src="'+producto.img+'" class="card-img-top" alt="..." height="400">\n'+
          '<div class="card-body">\n'+
            '<h5 class="card-title">'+producto.title+'</h5>\n'+
           ' <p class="card-text"> </p>\n'+
             ' <h5 class="price">'+producto.price+'</h5>\n'+
           ' <a href="#" class="btn btn-primary">Añadir al carrito</a>\n'+
         ' </div>\n'+
       ' </div>\n'+
      '</div>\n'+
      '<div class="col-lg-4 card1">\n'+
        '<div class="card p-1" style="width: 15rem;">\n'+
         ' <img src="'+producto.img2+'" class="card-img-top" alt="..." height="400">\n'+
          '<div class="card-body">\n'+
            '<h5 class="card-title">'+producto.title2+'</h5>\n'+
           ' <p class="card-text"> </p>\n'+
             ' <h5 class="price">'+producto.price2+'</h5>\n'+
           ' <a href="#" class="btn btn-primary">Añadir al carrito</a>\n'+
         ' </div>\n'+
       ' </div>\n'+
      '</div>\n'+
      '<div class="col-lg-4 card1">\n'+
        '<div class="card p-1" style="width: 15rem;">\n'+
         ' <img src="'+producto.img3+'" class="card-img-top" alt="..." height="400">\n'+
          '<div class="card-body">\n'+
            '<h5 class="card-title">'+producto.title3+'</h5>\n'+
           ' <p class="card-text"> </p>\n'+
             ' <h5 class="price">'+producto.price+'</h5>\n'+
           ' <a href="#" class="btn btn-primary">Añadir al carrito</a>\n'+
         ' </div>\n'+
       ' </div>\n'+
      '</div>\n'+
   '</div>\n';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

let patineta1= new item("board","../assets/pag-principal/alien.PNG",1500,"tabla para verte cool");
let patineta2= new item("board","../assets/pag-principal/alien.PNG",1400,"tabla para verte cool");
let patineta3= new item("board","../assets/pag-principal/alien.PNG",1700,"tabla para verte cool");


addItem({'img':patineta1.img,
    'title':patineta1.name,
    'price':patineta1.price,

    'img2':patineta2.img,
    'title2':patineta2.name,
    'price2':patineta2.price,

    'img3':patineta3.img,
    'title3':patineta3.name,
    'price3':patineta3.price

});

addItem({'img':patineta1.img,
'title':patineta1.name,
'price':patineta1.price,

'img2':patineta2.img,
'title2':patineta2.name,
'price2':patineta2.price,

'img3':patineta3.img,
'title3':patineta3.name,
'price3':patineta3.price});*/





