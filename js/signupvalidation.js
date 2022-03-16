// Validacion formulario
const formulario = document.getElementById('form-contact'); //accedemos al bloque del formulario
const inputs = document.querySelectorAll('#form-contact input'); // obtenemos todos los inputs de la pag
//////////////////////////////////////////////////
// //Elemntos del dom
// const form = document.getElementById('form-contact');
// const email = document.getElementById('email');
// const phone= document.getElementById('Cellphone');
// const person = document.getElementById('Name');
// const message = document.getElementById('Msg');
///////////////////////////////////////////////////
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //resumida la linea que dejaron
	telefono: /^\d{10,10}$/, // 7 a 14 numeros.
    password: /^.{8,20}$/ // 8 a 20 digitos.
}
// creamos un objeto en donde se registra el estatus de cada campo
const campos = {
    Name: false,
    email: false,
    Cellphone: false,
    password: false
}


const validarFormularioSignup = (e) => {
    switch(e.target.name){
        case "Name":            
            validarCampoSigup(expresiones.name, e.target, 'Name');
            break;
        case "Cellphone":
            validarCampoSigup(expresiones.telefono, e.target, 'Cellphone');
            break;
        case "email":
            validarCampoSigup(expresiones.email, e.target, 'email');
            // //funcion para validar un email, retorna true si es valido y false si no es valido
            // function validateEmail(email){
            //     const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            //     return emailRegex.test(email);
            // }
            break;
        
        case "password":
            validarCampoSigup(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
        
        case "password2":
            validarPassword2();
            break;
        }
}


//funcion generica para validacion y cambio de clases 
const validarCampoSigup = (expresion, input, campo) => {
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

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`group--password2`).classList.add('form--group-incorrecto');
		document.getElementById(`group--password2`).classList.remove('form--group-correcto');
		document.querySelector(`#group--password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#group--password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#group--password2 .form--input--error`).classList.add('form--input--error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`group--password2`).classList.remove('form--group-incorrecto');
		document.getElementById(`group--password2`).classList.add('form--group-correcto');
		document.querySelector(`#group--password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#group--password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#group--password2 .form--input--error`).classList.remove('form--input--error-activo');
		campos['password'] = true;
	}
}

//cuando key osea la tecla se levanta se ejecuta la funcion
//blur es cambiar del input a otro lado de la pag se activa la funcion
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormularioSignup);
    input.addEventListener('blur', validarFormularioSignup);
})



// cuando se presiona el boton de enviar se ejecuta un prevent default
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
	if(campos.Name && campos.email && campos.Cellphone && campos.password){
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
//////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////



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






