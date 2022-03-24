import { user, addUser } from './modules/user.js';

// Validacion formulario
const formulario = document.getElementById('form-contact'); //accedemos al bloque del formulario
const inputs = document.querySelectorAll('input'); // obtenemos todos los inputs de la pag
const username= document.getElementById('Name');
const useremail= document.getElementById('email');
const userphone= document.getElementById('Cellphone');
const userpass= document.getElementById('password');

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

let usuarios = [];


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
function validarCampoSigup(expresion, input, campo){
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

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value || inputPassword1.value === '' || inputPassword2.value === ''){
        document.getElementById('password2').classList.add("is-invalid");
        document.getElementById('password2').classList.remove("is-valid");
        campos['password'] = false;
    } else {
        document.getElementById('password2').classList.remove("is-invalid");
        document.getElementById('password2').classList.add("is-valid");
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
    //se crea un objeto json del usuario y se añade a un array
        addUser(usuarios,username.value,userphone.value,userpass.value,useremail.value);
        /* console.log(usuarios); */
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

});
