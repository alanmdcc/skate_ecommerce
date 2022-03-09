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

function addItem(producto){
    const itemHTML =  '<div class="container">\n'+
        '<div class="row">\n'+
           ' <div class="col-2">\n'+
               ' <div class="card card-style">\n'+
                    '<img src="'+producto.img+'" class="card-img-top " alt="...">\n'+
                   ' <div class="card-body p-1">\n'+
                       ' <div class="shop text-center">\n'+
                           ' <img src="../assets/icons/shoppingcart.svg" alt="" class="shop-icon">\n'+
                       ' </div>\n'+
                       ' <h2>'+producto.title+'</h2>\n'+
                      '<p class="card-text h1 text-center">'+producto.price+'</p>\n'+
                   ' </div>\n'+
                 ' </div>\n'+
           ' </div>\n'+
       ' </div>\n'+
    '</div>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'img':'../assets/pag-principal/alien.PNG',
    'title':'Board',
    'price':'1500'});

addItem({'img':'../assets/pag-principal/alien.PNG',
'title':'Board',
'price':'1500'});





