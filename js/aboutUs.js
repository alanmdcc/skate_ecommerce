//Declaration of the HTML arrays of the images, the text card, the whole container and the buttons
let imgProfile = document.getElementsByClassName("img-profile");
let textProfile = document.getElementsByClassName("text-profile");
let containerProfile = document.getElementsByClassName("container-profile");
let buttonProfile = document.getElementsByClassName("btn-profile");


function changeToBlur(container){//Specifiy the changes when a focus container changes to blur
    let cover = document.getElementsByClassName("cover")[0]; //Get the cover element
    let img = container.getElementsByClassName("img-profile")[0]; //Get the image inside container
    let containerText = container.getElementsByClassName("text-profile")[0]; //Get the text container
    containerText.classList.add("hide"); //Hide the text container
    container.classList.remove("container-focus"); //Remove the z-index of the container
    cover.classList.remove("bg-black"); //Return the cover to transparent
    img.classList.remove("change-size"); //Return the image to the original size
    img.classList.add("change-size-hover"); //Return the hover change size property to the image
    img.classList.add("change-size-decrease"); //Animation to turn the image to its original class
    container.classList.remove("bg-dark");
    cover.classList.add("bg-black-reverse");//Animation to turn the cover from black to transparent
    img.classList.remove("img-shadow-box");
    container.classList.remove("move-container");
    container.classList.add("gray");
};//changeToBlur

function changeToFocus(container){//Specifiy the changes when an image is focused
    let cover = document.getElementsByClassName("cover")[0]; //Get the cover element
    let img = container.getElementsByClassName("img-profile")[0]; //Get the image inside container
    let containerText = container.getElementsByClassName("text-profile")[0]; //Get the text container
    img.classList.add("change-size"); //Change the size of the image with an animation
    img.classList.remove("change-size-hover"); //Remove the change size when hover to avoid a weird response
    containerText.classList.remove("hide"); //Make appear the card
    container.classList.add("container-focus"); //Change the z-index in the focused container to not be covered by the black cover
    cover.classList.add("bg-black"); //Transition of the cover to black to cover the blurred elements
    img.classList.remove("change-size-decrease");
    cover.classList.remove("bg-black-reverse");
    container.classList.add("bg-dark"); //Animation to turn the cover to black
    img.classList.add("img-shadow-box"); //Add a shadow to the image when focused
    container.classList.add("move-container"); //Move the container to the center
    container.classList.remove("gray");
};//changeToFocus

//Apply a focus event to all the images
for(let img of imgProfile){
    img.addEventListener("focus",function(e){
        let width = window.matchMedia("(max-width: 576px)");
        if (width.matches){}else{
            let container = e.target.parentNode; //Get the container
            let img = e.target; //Get the image
        
            if(img.classList.contains("flag")){ //The flag class purpose is to evaluate if the image's container is alredy focused, if it is the changeToFocus won't be triggered
                img.classList.remove("flag"); //Remove the flag class so the changeToFocus can be triggered again
                img.blur(); //Change the image to blur so the changeToFocus can be triggered again
            }else{
                changeToFocus(container); //Change the page to a focused state
                img.classList.add("flag"); //Add the flag class so the changeToFocus won't be triggered if the image is clicked again
                container.focus(); //Change the focus to the container so its content can be clicked without dissapering
            };
        }
    })
}; // for(let img of imgProfile)

//Apply a blur event to all the containers
for(let ctn of containerProfile){
    ctn.addEventListener("blur",function(e){
        let width = window.matchMedia("(max-width: 576px)");
        if (width.matches){}else{
            let container = e.target; //Get the container
            let img = container.getElementsByClassName("img-profile")[0]; //Get the image from the container
            const ifButton = e.target.getElementsByClassName("card-body")[0].contains(e.relatedTarget); //Validate if the new focused element is inside the text container
            const ifImg = e.relatedTarget === img; //Validate if the new focused element is the image
            if(ifImg){ //If the image is clicked again the flag is not removed so the changeToFocus won't be triggered
                changeToBlur(container); //Return the page to a blur state
            }else if(!ifButton){ //If the element focused is outside the container the page will return to blur state
                changeToBlur(container);//Return the page to a blur state
                img.classList.remove("flag"); //Remove the flag so the changeToFocus can be triggered with the image
            }else{
            }
        }
    });
}; //for(let ctn of containerProfile)

//Aply a click event to all the buttons to return the page to a blur state
for(let btn of buttonProfile){
    btn.addEventListener("click",function(e){
        let container = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; //Get the container element
        let img = container.getElementsByClassName("img-profile")[0]; //Get the image inside container
        changeToBlur(container);//Change to blur state
        img.classList.remove("flag"); //Remove the flag so the changeToFocus can be triggered with the image
    })
};// for(let btn of buttonProfile)





