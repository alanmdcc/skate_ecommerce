
    let carta = document.getElementById("carta");
    let infoEscondida= document.getElementById("esconder");
    let imagen = document.getElementById("img");
    let bntOcultar= document.getElementById("btn1");

    let infoEscondida1= document.getElementById("esconder1");
    let imagen1 = document.getElementById("img1");
    let bntOcultar1= document.getElementById("btn2")

    /*function ocultar(){
        document.getElementById('esconder').style.display = 'none';
        }
    function mostrar(){
        document.getElementById('esconder').style.display = 'block';
        }*/

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
  
      })
  
      bntOcultar1.addEventListener("click", function(e){
          infoEscondida1.classList.add("hide");
  
      })
    
    /*image.addEventListener("focus",function(e){
        carta.classList.remove("hide");
    })
    
    image.addEventListener("blur",function(e){
        carta.classList.add("hide");
    })*/


   
