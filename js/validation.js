//nos traemos los elemntos del dom
const form = document.getElementById('form-contact');
const email = document.getElementById('email');

//traer conenido de numero de telefono
const phone= document.getElementById('Cellphone');

//traer contenido del nombre
const person = document.getElementById('Name');

//creamos un objeto en donde se registra el estatus de cada campo, esto lo podemos utilizar
//cuando queramos validar con bootstrap.
const formIsValid = {
    name: false,
    email: false,
    phoneNumber: false,
    message: false
}
//evento para prevenir que se envien los datos sin validar
form.addEventListener('submit', (e) => {
    e.preventDefault();
})
//agregamos el evento de escucha 'change', para saber su el valor del campo cambio
//https://developer.mozilla.org/es/docs/Web/API/HTMLElement/change_event
email.addEventListener('change', (e) => {
    console.log('registro evento');
    console.log(e.target);
    console.log(e.target.value);
    //valida que el campo no este vacio, y si cumple la condicion cambia el status a true formIsValid.email
    if(e.target.value.trim().length > 0){
        formIsValid.email = true;
        console.log('Estatus del campo: ',formIsValid.email)
    }
});

//agrego funcion para validar numero de telefono

phone.addEventListener('change', (e)=>{
    if (phone.value.length>10){
        window.alert('el número de teléfono no puede tener más de 10 digitos');
    }else if (phone.value.length<=0 || phone.value.length !=10){
        window.alert('por favor ingrese un número de teléfono válido');
    } else if (isNaN(phone.value)==true)
        window.alert('no se pueden ingresar letras en el numero de telefono');
    
}); 

//agrego funcion para validar nombre

person.addEventListener('change', (e) => {
    if(person.value.length > 35) {
        window.alert('El nombre no puede contener más de 35 caracteres.')
       
    } else if (person.value.length < 7){
    window.alert('El nombre debe contenr al menos un nombre y un apellido separados por un espacio.')
    } 
});
