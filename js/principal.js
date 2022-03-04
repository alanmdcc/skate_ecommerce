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