//Importar clase item y constructor
import {Item, addItem} from './modules/card.js';

//Obtener elementos del DOM
const form = document.getElementById('new-product-form');
const productName = document.getElementById('input-name');
const description = document.getElementById('input-description');
const price = document.getElementById('input-price');
const fileInput = document.getElementById('input-img');

let productos = [];
let filePath = "";


//Array para guardar los campos validados
const formIsValid = {
    name: false,
    description: false,
    price: false,
    img: false
}

//Función para evaluar si el formulario está validado y crear un nuevo objeto
function validateForm(){
    const formValues = Object.values(formIsValid); //regresa un arreglo con todos los valores de un objeto.
    
    //Vamos a buscar dentro del arreglo formValuer 
    const valid = formValues.findIndex((value) => value == false);
    if(valid === -1){
        addItem(productos,productName.value,filePath,price.value,description.value);
        console.log("Producto creado con éxito");
        console.log(productos);
        resetForm();
    }
}

//Cambia clase a valido
function isValidStyle(element){
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
}
//Cambia clase a no valido
function isInvalidStyle(element){
    element.classList.remove("is-valid")
    element.classList.add("is-invalid")
}
//Quita ambas clases de validación
function resetValidationStyles(element){
    element.classList.remove("is-valid")
    element.classList.remove("is-invalid")
}
//Resetea los campos y las clases de validación
function resetForm(){
    form.reset();
    resetValidationStyles(productName);
    resetValidationStyles(description);
    resetValidationStyles(price);
    resetValidationStyles(fileInput);
}
function noSpecial(string){
    const noSpecialRegEx = /^[a-zA-Z0-9áéíóúÁÉÍÓÚ.,\s]*$/;
    return noSpecialRegEx.test(string);
}

productName.addEventListener('change', (e) => {
    if((e.target.value.length > 35) || (e.target.value.length < 7) || (!noSpecial(e.target.value))) {
        isInvalidStyle(e.target);
        formIsValid.name = false;
    } else{
        isValidStyle(e.target);
        formIsValid.name = true;
    }
});

description.addEventListener('change', (e) => {
    if((e.target.value.length > 50) || (e.target.value.length < 7) || (!noSpecial(e.target.value))) {
        isInvalidStyle(e.target);
        formIsValid.description = false;
    } else{
        isValidStyle(e.target);
        formIsValid.description = true;
    }
});

price.addEventListener('change', (e) => {
    if((e.target.value < 0) || (e.target.value > 10000)) {
        isInvalidStyle(e.target);
        formIsValid.price = false;
    }else if (isNaN(e.target==true)){
        isInvalidStyle(e.target);
        formIsValid.price = false;
    }else{
        isValidStyle(e.target);
        formIsValid.price = true;
    }
});

fileInput.addEventListener('change', (e) => {
    filePath = fileInput.value;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
        isInvalidStyle(e.target);
        fileInput.value = '';
        formIsValid.img = false;
    }else{
        isValidStyle(e.target);
        formIsValid.img = true;
        filePath = "../assets/img-products/" + e.target.value.split("\\").pop();
    }
});

//Detiene el evento submit y evalua si el formulario es válido
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})
