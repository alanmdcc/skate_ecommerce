    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;

  //creación de usuarios para almacenar en local storage
    var user = {
        "useremail": "correo@gmail.com",
        "password": "password"
    };

    var json=JSON.stringify(user.useremail);
    var json2=JSON.stringify(user.password);

    localStorage.setItem("localUseremail",json);
    localStorage.setItem("localUserpass",json2);

    let localUseremail=localStorage.getItem("localUseremail");
    let localUserpass=localStorage.getItem("localUserpass");

    console.log(localUseremail);


function loginFunc(e){
    event.preventDefault();

    let useremail= document.getElementById('email').value;
    let userpass= document.getElementById('password').value;
    let Juseremail=JSON.stringify(useremail);
    let Juserpass=JSON.stringify(userpass);
    console.log(Juseremail);

    //let user =localStorage.getItem(useremail);
    //let pass =localStorage.getItem(userpass);
    //let data= JSON.stringify(user);

    if(Juseremail==localUseremail && Juserpass==localUserpass){
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Sesión iniciada',
          })
          setTimeout(()=>{window.location.href = "../index.html"},2000);
   }//if

}//logingFunc