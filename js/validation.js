//nos traemos los elemntos del dom
const form = document.getElementById('form-contact');
const email = document.getElementById('email');

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