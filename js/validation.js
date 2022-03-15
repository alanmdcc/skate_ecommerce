// Validacion formulario
const formulario = document.getElementById('form-contact'); //accedemos al bloque del formulario
const inputs = document.querySelectorAll('#form-contact input'); // obtenemos todos los inputs de la pag

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //resumida la linea que dejaron
	telefono: /^\d{10,10}$/, // 7 a 14 numeros.
    msg: /^[a-zA-ZÀ-ÿ\s]{20,200}$/, // Letras y espacios, pueden llevar acentos.
}
// creamos un objeto en donde se registra el estatus de cada campo
const campos = {
    Name: false,
    email: false,
    Cellphone: false,
    Msg: false
}


const validarFormulario = (e) => {
    switch(e.target.name){
        case "Name":            
            validarCampo(expresiones.name, e.target, 'Name');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
        case "Cellphone":
            validarCampo(expresiones.telefono, e.target, 'Cellphone');
            break;
        case "Msg":
            validarCampo(expresiones.msg, e.target, 'Msg');
            break;
        }
}


//funcion generica para validacion y cambio de clases 
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`group--${campo}`).classList.remove('form--group-incorrecto');
		document.getElementById(`group--${campo}`).classList.add('form--group-correcto');
		document.querySelector(`#group--${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#group--${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group--${campo} .form--input--error`).classList.remove('form--input--error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`group--${campo}`).classList.add('form--group-incorrecto');
		document.getElementById(`group--${campo}`).classList.remove('form--group-correcto');
		document.querySelector(`#group--${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#group--${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group--${campo} .form--input--error`).classList.add('form--input--error-activo');
		campos[campo] = false;
	}
}


//cuando key osea la tecla se levanta se ejecuta la funcion
//blur es cambiar del input a otro lado de la pag se activa la funcion
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})



// cuando se presiona el boton de enviar se ejecuta un prevent default
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
	if(campos.Name && campos.email && campos.Cellphone && campos.Msg ){
		formulario.reset();

		document.getElementById('form--mensaje-exito').classList.add('form--mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form--mensaje-exito').classList.remove('form--mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form--group-correcto').forEach((icono) => {
			icono.classList.remove('form--group-correcto');
		});
	} else {
		document.getElementById('form--mensaje').classList.add('form--mensaje-exito-activo');
	}
})





















// //Elemntos del dom
// const form = document.getElementById('form-contact');
// const email = document.getElementById('email');
// const phone= document.getElementById('Cellphone');
// const person = document.getElementById('Name');
// const message = document.getElementById('Msg');




// //funcion para validar un email, retorna true si es valido y false si no es valido
// function validateEmail(email){
//     const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(email);
// }

// //funcion para validar que todos los datotos introducidos en el formulario sea correctos
// function validateForm(){
//     const formValues = Object.values(formIsValid); //regresa un arreglo con todos los valores de un objeto.
    
//     console.log(formIsValid);
//     //Vamos a buscar dentro del arreglo formValuer 
//     const valid = formValues.findIndex((value) => value == false);

//     if(valid === -1){
//         form.submit(); //abre la aplicación de default de correo con la información del formulario
//     } else{
//         alert('El formulario es invalido');
//     }
// }


// //agregamos el evento de escucha 'change', para saber su el valor del campo cambio

// //https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event

// email.addEventListener('change', (e) => {

//     let status = validateEmail(e.target.value);
    
//     if(status){
//         console.log('correo valido');
//         formIsValid.email = true;
//     } else {
//         alert('Correo invalido');
//     }
// });

// //agrego funcion para validar numero de telefono

// phone.addEventListener('change', (e)=>{
//     if (phone.value.length>10){
//         window.alert('el número de teléfono no puede tener más de 10 digitos');
//     }else if (phone.value.length<=0 || phone.value.length !=10){
//         window.alert('por favor ingrese un número de teléfono válido');
//     } else if (isNaN(phone.value)==true){
//         window.alert('no se pueden ingresar letras en el numero de telefono');
//     } else{
//         formIsValid.phone = true;
//     }
    
// }); 

// //agrego funcion para validar nombre

// person.addEventListener('change', (e) => {
//     if(person.value.length > 35) {
//         window.alert('El nombre no puede contener más de 35 caracteres.');
//     } else if (person.value.length < 7){
//     window.alert('El nombre debe contenr al menos un nombre y un apellido separados por un espacio.')
//     } else{
//         formIsValid.name = true;
//     }
// });

// message.addEventListener('change', (e) => {
//     if(e.target.value.length === 200){
//         alert('Solo puedes usasr un maximo de 200 caracteres');
//     } else if(e.target.value.length < 20){
//         alert('Tu mensaje debe tener mas de 20 caracteres');
//     }else{
//         formIsValid.message = true;
//     }
// });

// //evento para prevenir que se envien los datos sin validar
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateForm();
// })
