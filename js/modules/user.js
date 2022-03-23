
export class user{
     username="";
     phoneNumber="";
     password="";
     email="";
 constructor(username, phoneNumber,password,email){
    this.username=username;
    this.phoneNumber=phoneNumber;
    this.password=password;
    this.email=email;
  }
}//class user

export function addUser(array, username, phoneNumber,password,email){

    let object = new user(username, phoneNumber,password,email);
    array.push(object);
}
