var fname=document.forms['form']['fname'];
var lname=document.forms['form']['lname'];
var email=document.forms['form']['email'];
var contact=document.forms['form']['contact'];
var technology=document.forms['form']['technology'];
var experience=document.forms['form']['experience'];
var password=document.forms['form']['password'];
var confirmpassword=document.forms['form']['confirmpassword'];
var description=document.forms['form']['description'];

var fname_error=document.getElementById('fname_error');
var lname_error=document.getElementById('lname_error');
var email_error=document.getElementById('email_error');
var contact_error=document.getElementById('contact_error');
var technology_error=document.getElementById('technology_error');
var experience_error=document.getElementById('experience_error');
var password_error=document.getElementById('password_error');
var confirmpassword_error=document.getElementById('confirmpassword_error');
var description_error=document.getElementById('description_error');
fname.addEventListener('textInput',fname_verify);
lname.addEventListener('textInput',lname_verify);
email.addEventListener('textInput',email_verify);
contact.addEventListener('numberInput',contact_verify);
technology.addEventListener('textInput',technology_verify);
experience.addEventListener('numberInput',experience_verify);
password.addEventListener('textInput',password_verify);
confirmpassword.addEventListener('textInput',confirmpass_verify);
description.addEventListener('textInput',description_verify);

function  validated(){

	if((fname.value.length="")||(fname.value.length<3)||(fname.value.length>20)||(!isNaN(fname.value))){
		fname.style.border="1px solid red";
		fname_error.style.display="block";
		fname.focus();
		return false;
	}
	if((lname.value.length="")||(lname.value.length<2)||(lname.value.length>20)||(!isNaN(lname.value))){
		lname.style.border="1px solid red";
		lname_error.style.display="block";
		lname.focus();
		return false;
	}

	if(email.value.length<7){
		email.style.border="1px solid red";
		email_error.style.display="block";
		email.focus();
		return false;
	}

	if(contact.value.length!=10){
		contact.style.border="1px solid red";
		contact_error.style.display="block";
		contact.focus();
		return false;
	}
	if(technology.value.length<1){
		technology.style.border="1px solid red";
		technology_error.style.display="block";
		technology.focus();
		return false;
	}
	if(experience.value.length<1){
		experience.style.border="1px solid red";
		experience_error.style.display="block";
		experience.focus();
		return false;
	}
	if(password.length < 6){
		password.style.border="1px solid red";
		password_error.style.display="block";
		password.focus();
		return false;
  }
  if(confirmpassword.value !== password.value){
		confirmpassword.style.border="1px solid red";
		confirmpassword_error.style.display="block";/*if((confirmpassword.length < 6)||(confirmpassword!=password)){*/
		confirmpassword.focus();
		return false;
  }
	if(description.value.length<8){
		description.style.border="";
		description_error.style.display="block";
		description.focus();
		return false;
	}
}

function fname_verify(){
	if(fname.value.length>=3) {
	   fname.style.border="1px solid silver";
	   fname_error.style.display="none";
	   return true;
	}
}
function lname_verify(){
	if(lname.value.length>=2) {
	   lname.style.border="1px solid silver";
	   lname_error.style.display="none";
	   return true;
	}
}
function email_verify(){
	if(email.value.length>=7) {
	   email.style.border="1px solid silver";
	   email_error.style.display="none";
	   return true;
	}
}
function contact_verify(){
	if(contact.value.length==10) {
	   contact.style.border="1px solid silver";
	   contact_error.style.display="none";
	   return true;
	}
}
function technology_verify(){
	if(technology.value.length>=2) {
	   technology.style.border="1px solid silver";
	   technology_error.style.display="none";
	   return true;
	}
}
function experience_verify(){
	if(experience.value.length>=1) {
	   experience.style.border="1px solid silver";
	   experience_error.style.display="none";
	   return true;
	}
}
function password_verify(){
	if(password.value.length>=2) {
	   password.style.border="1px solid silver";
	   password_error.style.display="none";
	   return true;
	}
}
function confirmpass_verify(){
	 if(confirmpassword.value == password.value) {
	/*if(confirmpassword.value.length>=1) {*/
	   confirmpassword.style.border="1px solid silver";
	   confirmpassword_error.style.display="none";
	   return true;
	}
}
function description_verify(){
	if(description.value.length>=8) {
	   description.style.border="none";
	   description_error.style.display="none";
	   return true;
	}
}
