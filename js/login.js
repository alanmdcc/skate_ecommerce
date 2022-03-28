// Validacion formulario
const formulario = document.getElementById('form-contact'); //accedemos al bloque del formulario
const inputs = document.querySelectorAll('input'); // obtenemos todos los inputs de la pag
const useremail= document.getElementById('email');
const userpass= document.getElementById('password');

//creación de usuarios para almacenar en local storage
var user = {
    "useremail": "correo@gmail.com",
    "password": "password"
};
var jsonUseremail = JSON.stringify(user.useremail);
var jsonPassword = JSON.stringify(user.password);

localStorage.setItem("Juseremail", jsonUseremail);
localStorage.setItem("Jpassword", jsonPassword);

var Juseremail = localStorage.getItem("Juseremail");
var Jpassword = localStorage.getItem("Jpassword");

//compara los datos ingresados de usuario con los de local storage
/*function comparar(useremail,Juseremail,userpass,Jpassword){
   if(useremail.value==Juseremail && userpass.value==Jpassword){
       window.alert("Sesión Iniciada");
   }
}*/

const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //resumida la linea que dejaron
    password: /^.{8,20}$/ // 8 a 20 digitos.
}

// creamos un objeto en donde se registra el estatus de cada campo
const campos = {
    email: false,
    password: false
}

const validarFormularioLogin = (e) => {
    switch(e.target.name){
        case "email":
            validarCampoLogin(expresiones.email, e.target, 'email');
            break;
        
        case "password":
            validarCampoLogin(expresiones.password, e.target, 'password');
            break;
        }
}

//funcion generica para validacion y cambio de clases 
function validarCampoLogin(expresion, input, campo){
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
    input.addEventListener('keyup', validarFormularioLogin);
    input.addEventListener('blur', validarFormularioLogin);
})

/*function loginFunc(e){
    event.preventDefault();
    const useremail= document.getElementById('email').value;
    const userpass= document.getElementById('password').value;

    let user =localStorage.getItem(useremail);
    let data= JSON.parse(user);

    if(useremail==data.useremail && userpass===data.password){
        window.alert("Sesión Iniciada");    
        console.log("Sesion Iniciada");
    }
}*/

// cuando se presiona el boton de enviar se ejecuta un prevent default
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    if(campos.email && campos.password){
    //se crea un objeto json del usuario y se añade a un array
    const useremail= document.getElementById('email').value;
    const userpass= document.getElementById('password').value;

    let user =localStorage.getItem(useremail);
    let pass =localStorage.getItem(userpass);
    let datau= JSON.parse(user);
    let datap= JSON.parse(pass);

    if(useremail==datau && userpass===datap){
        window.alert("Sesión Iniciada");    
        console.log("Sesion Iniciada");
    }


        console.log(useremail);
        console.log(Juseremail);
    formulario.reset();
        // document.getElementById('alert-success').classList.add('form--mensaje-exito-activo');
        // setTimeout(() => {
        //     document.getElementById('alert-success').classList.remove('form--mensaje-exito-activo');
        // }, 5000);

        // document.querySelectorAll('.is-valid').forEach((icono) => {
        //     icono.classList.remove('is-valid');
        // });

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
