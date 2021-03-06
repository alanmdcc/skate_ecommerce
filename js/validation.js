// Validacion formulario
const formulario = document.getElementById('form-contact'); //accedemos al bloque del formulario
const inputs = document.querySelectorAll('input'); // obtenemos todos los inputs de la pag
const reset = document.getElementById('reset-button');//obtenemos el boton reset
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //resumida la linea que dejaron
	telefono: /^\d{10,10}$/, // 7 a 14 numeros.
    msg: /^[a-zA-ZÀ-ÿ]{10,200}$/, // Letras pueden llevar acentos.
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
		document.getElementById(`${campo}`).classList.remove("is-invalid");
		document.getElementById(`${campo}`).classList.add("is-valid");
		campos[campo] = true;
	} else {
		document.getElementById(`${campo}`).classList.add("is-invalid");
		document.getElementById(`${campo}`).classList.remove("is-valid");
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

		document.querySelectorAll('.is-valid').forEach((icono) => {
			icono.classList.remove('is-valid');
		});

		Object.keys(campos).forEach(campo => {
			campos[campo] = false;
		})

		Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Se abrió tu administrador de correos para terminar el proceso',
          })  

	} else {
		Swal.fire({
            icon: 'error',
            text: 'Favor de completar correctamente el formulario',
          })
		  
		document.getElementById('alert-danger').classList.add('form--mensaje-activo');
		setTimeout(() => {
			document.getElementById('alert-danger').classList.remove('form--mensaje-activo');
		}, 5000);
	}
})

reset.addEventListener('click', (e) => {
	document.querySelectorAll('.is-invalid').forEach((icono) => {
		icono.classList.remove('is-invalid');
	});
	document.querySelectorAll('.is-valid').forEach((icono) => {
		icono.classList.remove('is-valid');
	});
	Object.keys(campos).forEach(campo => {
		campos[campo] = false;
	})
}
)