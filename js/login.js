// Validacion formulario
const formulario = document.getElementById('form-contact'); //accedemos al bloque del formulario
const inputs = document.querySelectorAll('input'); // obtenemos todos los inputs de la pag
const useremail= document.getElementById('email');
const userpass= document.getElementById('password');

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


// cuando se presiona el boton de enviar se ejecuta un prevent default
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let url = 'http://localhost:8081/api/login/';
    
    if(campos.email && campos.password){
    //se crea un objeto json del usuario y se añade a un array
    fetch(url, {
        method: 'POST',
        body:JSON.stringify({
          userEmail: useremail.value,
          password: userpass.value
          }), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      
      .then(response => { 
          if(response.accessToken.length!==0){Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Inicio de sesión exitoso'
        }); 
        window.sessionStorage.setItem("token", JSON.stringify(response));
        window.sessionStorage.setItem("userLogged", JSON.stringify({ userEmail: useremail.value }));
            formulario.reset();
            setTimeout(()=>{window.location.href = "../index.html"},2000);
        }else{
          {Swal.fire({
              icon: 'error',
              title: 'Inicio de sesión fallido',
              text: `Email o contraseña inválidos`
            })  }
            formulario.reset();
      }
      })
      .catch(error => console.error('Error:', error))
  
      ;

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
