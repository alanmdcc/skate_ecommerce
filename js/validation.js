// Validacion formulario
const formulario = document.getElementById('form-contact'); //accedemos al bloque del formulario
const inputs = document.querySelectorAll('input'); // obtenemos todos los inputs de la pag
<<<<<<< HEAD
//////////////////////////////////////////////////
// //Elemntos del dom
// const form = document.getElementById('form-contact');
// const email = document.getElementById('email');
// const phone= document.getElementById('Cellphone');
// const person = document.getElementById('Name');
// const message = document.getElementById('Msg');
///////////////////////////////////////////////////
=======

>>>>>>> 145f34066e63919d19d0dd086ff9385f93ecd5cc
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //resumida la linea que dejaron
	telefono: /^\d{10,10}$/, // 7 a 14 numeros.
    msg: /^[a-zA-ZÀ-ÿ\s]{10,200}$/, // Letras y espacios, pueden llevar acentos.
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
<<<<<<< HEAD
		document.getElementById(`${campo}`).classList.remove('is-invalid');
		document.getElementById(`${campo}`).classList.add('is-valid');
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add('is-invalid');
		document.getElementById(`${campo}`).classList.remove('is-valid');
=======
		document.getElementById(`${campo}`).classList.remove("is-invalid");
		document.getElementById(`${campo}`).classList.add("is-valid");
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add("is-invalid");
		document.getElementById(`${campo}`).classList.remove("is-valid");
>>>>>>> 145f34066e63919d19d0dd086ff9385f93ecd5cc
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
        formulario.submit();
		formulario.reset();

		document.getElementById('alert-success').classList.add('form--mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('alert-success').classList.remove('form--mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.is-valid').forEach((icono) => {
			icono.classList.remove('is-valid');
		});

		Object.keys(campos).forEach(campo => {
			campos[campo] = false;
		})

	} else {
		document.getElementById('alert-danger').classList.add('form--mensaje-activo');
		setTimeout(() => {
			document.getElementById('alert-danger').classList.remove('form--mensaje-activo');
		}, 5000);
	}
})
