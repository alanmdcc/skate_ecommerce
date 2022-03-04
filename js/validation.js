//Elemntos del dom
const form = document.getElementById('form-contact');
const email = document.getElementById('email');
const phone= document.getElementById('Cellphone');
const person = document.getElementById('Name');
const message = document.getElementById('Msg');


//creamos un objeto en donde se registra el estatus de cada campo
const formIsValid = {
    name: false,
    email: false,
    phone: false,
    message: false
}


//funcion para validar un email, retorna true si es valido y false si no es valido
function validateEmail(email){
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

//funcion para validar que todos los datotos introducidos en el formulario sea correctos
function validateForm(){
    const formValues = Object.values(formIsValid); //regresa un arreglo con todos los valores de un objeto.
    
    console.log(formIsValid);
    //Vamos a buscar dentro del arreglo formValuer 
    const valid = formValues.findIndex((value) => value == false);

    if(valid === -1){
        //form.submit(); //envia el formulario al backend
        console.log('Envio del formulario correctamente')
    } else{
        alert('El formulario es invalido');
    }
}


//agregamos el evento de escucha 'change', para saber su el valor del campo cambio

//https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event

email.addEventListener('change', (e) => {

    let status = validateEmail(e.target.value);
    
    if(status){
        console.log('correo valido');
        formIsValid.email = true;
    } else {
        alert('Correo invalido');
    }
});

//agrego funcion para validar numero de telefono

phone.addEventListener('change', (e)=>{
    if (phone.value.length>10){
        window.alert('el número de teléfono no puede tener más de 10 digitos');
    }else if (phone.value.length<=0 || phone.value.length !=10){
        window.alert('por favor ingrese un número de teléfono válido');
    } else if (isNaN(phone.value)==true){
        window.alert('no se pueden ingresar letras en el numero de telefono');
    } else{
        formIsValid.phone = true;
    }
    
}); 

//agrego funcion para validar nombre

person.addEventListener('change', (e) => {
    if(person.value.length > 35) {
        window.alert('El nombre no puede contener más de 35 caracteres.');
    } else if (person.value.length < 7){
    window.alert('El nombre debe contenr al menos un nombre y un apellido separados por un espacio.')
    } else{
        formIsValid.name = true;
    }
});

message.addEventListener('change', (e) => {
    if(e.target.value.length === 200){
        alert('Solo puedes usasr un maximo de 200 caracteres');
    } else if(e.target.value.length < 20){
        alert('Tu mensaje debe tener mas de 20 caracteres');
    }else{
        formIsValid.message = true;
    }
});

//evento para prevenir que se envien los datos sin validar
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
})
