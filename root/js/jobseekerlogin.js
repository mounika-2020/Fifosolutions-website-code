var check_userid= /^[a-z]+$/;;
/*  var check_email= /^[a-zA-Z]{2,}[.]?[-]?[A-Za-z0-9]{1,}[@]{1}[a-zA-Z0-9]{1,}[.][a-zA-Z]{2,4}([.]{1}[a-zA-Z]{2,4})?$/;*/
var check_password =/^(?=^.{8,}$)(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]+$/;

function validation(){
  var user= document.getElementById('userid').value;
/*  var email= document.getElementById("emailid").value;*/
  var password= document.getElementById('passwordid').value;

if(user == ""){
  alert("Please enter a valid username");
  return false;
}

if(password == ""){
  alert("Please enter a valid password");
  return false;
}

  if(!check_userid.test(user)){
   alert("user id must contain a-z");
  return false;
}

  if(!check_password.test(password)){
    alert("password must contain length 8 with atleast one number , atleast one uppercase letter, atleast one lowercase letter ");
  return false;
 }

/*alert("Login Success");*/
return true;
}
