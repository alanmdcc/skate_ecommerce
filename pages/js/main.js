
    let carta = document.getElementById("carta");
    let infoEscondida= document.getElementById("esconder");
    let imagen = document.getElementById("img");
    let bntOcultar= document.getElementById("btn1");

    let infoEscondida1= document.getElementById("esconder1");
    let imagen1 = document.getElementById("img1");
    let bntOcultar1= document.getElementById("btn2")

    let boton=document.querySelectorAll(".boton")
    let picture=document.querySelectorAll(".picture");
    let card=document.querySelectorAll(".card-body");


    imagen.addEventListener("click", function(e){
      infoEscondida.classList.remove("hide");
      imagen.classList.remove("gris");
    })

    bntOcultar.addEventListener("click", function(e){
        infoEscondida.classList.add("hide");
        imagen.classList.add("gris");
    })

    imagen1.addEventListener("click", function(e){
        infoEscondida1.classList.remove("hide");
        imagen1.classList.remove("gris");
      })
  
      bntOcultar1.addEventListener("click", function(e){
          infoEscondida1.classList.add("hide");
          imagen1.classList.add("gris");
      })
   
/*
      picture.forEach(function(el) {
        el.addEventListener("click", function(e){
         //------
         card.forEach(function(el) {
             
            el.classList.remove("hide")
          
      
         }); 
         //------ 
      });
    
    });
    
  */