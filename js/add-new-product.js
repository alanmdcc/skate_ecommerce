//Importar clase item y constructor
import {Item} from './modules/card.js';

//Obtener elementos del DOM
const form = document.getElementById('new-product-form');
const productName = document.getElementById('input-name');
const description = document.getElementById('input-description');
const price = document.getElementById('input-price');
const fileInput = document.getElementById('input-img');
const categoryInput = document.getElementById('input-category');
const reset = document.getElementById('reset-button');//obtenemos el boton reset

//Variable para contener el path de la imagen del nuevo producto
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
        console.log(price);
        console.log(price.value);
        let productJSON = new Item(productName.value,price.value,description.value,filePath,categoryInput.value);
        let token = JSON.parse(window.sessionStorage.getItem("token")).accessToken;
        fetch("http://localhost:8081/api/products/",
        {
            method: 'POST',
            body: JSON.stringify(productJSON),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Impuls8 ' + token
            }
        })
        .then(res => res.json())
        .then(productValid => {
            if (productValid) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'Producto Registrado',
                  });
            }else{
                Swal.fire({
                    icon: 'success',
                    title: 'Registro Fallido',
                    text: 'El nombre de producto ya existe',
                  });
            }
        })
        .catch(error => console.error('Error:', error));


        resetForm();

		document.querySelectorAll('.is-valid').forEach((icono) => {
			icono.classList.remove('is-valid');
		});

		Object.keys(formIsValid).forEach(campo => {
			formIsValid[campo] = false;
		})
    }else{
        Swal.fire({
            icon: 'error',
            text: 'Favor de completar correctamente el formulario',
          })
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

//Validación para el nombre de producto
productName.addEventListener('change', (e) => {
    if((e.target.value.length > 35) || (e.target.value.length < 7) || (!noSpecial(e.target.value))) {
        isInvalidStyle(e.target);
        formIsValid.name = false;
    } else{
        isValidStyle(e.target);
        formIsValid.name = true;
    }
});

//Validación para la descripción
description.addEventListener('change', (e) => {
    if((e.target.value.length > 50) || (e.target.value.length < 7) || (!noSpecial(e.target.value))) {
        isInvalidStyle(e.target);
        formIsValid.description = false;
    } else{
        isValidStyle(e.target);
        formIsValid.description = true;
    }
});

//Valdiación para el precio
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

//Validación para el botón de agregar imágen
fileInput.addEventListener('change', (e) => {
    filePath = fileInput.value;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
        isInvalidStyle(e.target);
        fileInput.value = '';
        filePath = fileInput.value;
        formIsValid.img = false;
    }else{
        isValidStyle(e.target);
        formIsValid.img = true;
        let categoryFolder = "";
        //Elige la subcarpeta dependiendo de la categoría
        switch(categoryInput.value){
            case "1":
                categoryFolder = "skates/";
                console.log("case1");
                break;
            case "2":
                categoryFolder = "longboard/";
                console.log("case2");
                break;
            case "3":
                categoryFolder = "pennyboard/";
                console.log("case3");
                break;
        }

        filePath = "../assets/img-products/" + categoryFolder + e.target.value.split("\\").pop();
    }
});

//Cambia el filePath si la imagen cargada es correcta y se modifica la categoría
categoryInput.addEventListener('change', (e) => {
    if(formIsValid.img){
        //Elige la subcarpeta dependiendo de la categoría
        let categoryFolder = "";
        switch(categoryInput.value){
            case "1":
                categoryFolder = "skates/";
                console.log("case1");
                break;
            case "2":
                categoryFolder = "longboard/";
                console.log("case2");
                break;
            case "3":
                categoryFolder = "pennyboard/";
                console.log("case3");
                break;
        }
        filePath = "../assets/img-products/" + categoryFolder + fileInput.value.split("\\").pop();
        console.log(filePath);

    }
    
});

//Detiene el evento submit y evalua si el formulario es válido
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm(); 
})

//Reseta las clases con el botón reset
reset.addEventListener('click', (e) => {
	document.querySelectorAll('.is-invalid').forEach((icono) => {
		icono.classList.remove('is-invalid');
	});
	document.querySelectorAll('.is-valid').forEach((icono) => {
		icono.classList.remove('is-valid');
	});
	Object.keys(formIsValid).forEach(campo => {
		formIsValid[campo] = false;
	})
}
)


//Pide a la API las categorías para formar el menú desplegable
fetch("http://localhost:8081/api/category/")
  .then(res => res.json())
  .then(categoriesArray => {
      let tmpHTML ="";
      let categoryHTML = "";
    categoriesArray.forEach(category =>{
        console.log(category);
        tmpHTML = `
        <option value="${category.idCategory}">${category.categoryName.charAt(0).toUpperCase()+category.categoryName.slice(1)}</option>
        `
        categoryHTML += tmpHTML;
        document.getElementById("input-category").innerHTML = categoryHTML;
    })
    
  })
  .catch(error => console.error('Error:', error));