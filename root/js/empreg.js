function validate(){
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("cpass").value;

  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(lname.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(pass.length < 10){
    text = "Please Enter Correct password";
    error_message.innerHTML = text;
    return false;
  }
  if(cpass.length < 10||cpass!==pass){
    text = "Please Enter above password";
    error_message.innerHTML = text;
    return false;
  }

  /*alert("Form Submitted Successfully!");*/
  return true;
}
