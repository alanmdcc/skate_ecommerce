    let infoEscondida1= document.getElementById("esconder1");
    let imagen1 = document.getElementById("img1");
    let bntOcultar1= document.getElementById("btn1");

    let infoEscondida2= document.getElementById("esconder2");
    let imagen2 = document.getElementById("img2");
    let bntOcultar2= document.getElementById("btn2")

    let infoEscondida3= document.getElementById("esconder3");
    let imagen3 = document.getElementById("img3");
    let bntOcultar3= document.getElementById("btn3")

    let infoEscondida4= document.getElementById("esconder4");
    let imagen4 = document.getElementById("img4");
    let bntOcultar4= document.getElementById("btn4")

    let infoEscondida5= document.getElementById("esconder5");
    let imagen5 = document.getElementById("img5");
    let bntOcultar5= document.getElementById("btn5")

    let infoEscondida6= document.getElementById("esconder6");
    let imagen6 = document.getElementById("img6");
    let bntOcultar6= document.getElementById("btn6")

    imagen1.addEventListener("click", function(e){
      infoEscondida1.classList.remove("hide");
      imagen1.classList.remove("gris");
    })

    bntOcultar1.addEventListener("click", function(e){
        infoEscondida1.classList.add("hide");
        imagen1.classList.add("gris");
    })

    imagen2.addEventListener("click", function(e){
        infoEscondida2.classList.remove("hide");
        imagen2.classList.remove("gris");
      })
  
      bntOcultar2.addEventListener("click", function(e){
          infoEscondida2.classList.add("hide");
          imagen2.classList.add("gris");
      })
   
      imagen3.addEventListener("click", function(e){
        infoEscondida3.classList.remove("hide");
        imagen3.classList.remove("gris");
      })
  
      bntOcultar3.addEventListener("click", function(e){
          infoEscondida3.classList.add("hide");
          imagen3.classList.add("gris");
      })

      imagen4.addEventListener("click", function(e){
        infoEscondida4.classList.remove("hide");
        imagen4.classList.remove("gris");
      })
  
      bntOcultar4.addEventListener("click", function(e){
          infoEscondida4.classList.add("hide");
          imagen4.classList.add("gris");
      })

      imagen5.addEventListener("click", function(e){
        infoEscondida5.classList.remove("hide");
        imagen5.classList.remove("gris");
      })
  
      bntOcultar5.addEventListener("click", function(e){
          infoEscondida5.classList.add("hide");
          imagen5.classList.add("gris");
      })

      imagen6.addEventListener("click", function(e){
        infoEscondida6.classList.remove("hide");
        imagen6.classList.remove("gris");
      })
  
      bntOcultar6.addEventListener("click", function(e){
          infoEscondida6.classList.add("hide");
          imagen6.classList.add("gris");
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