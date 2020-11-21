
function validated(){
        var emails=document.getElementById('em').value;
        var pass=document.getElementById('ps').value;
        if(emails == ""){
              document.getElementById('emailids').innerHTML="please enter email address";
              return false;
        }
        if(emails.indexOf('@') <= 0){
              document.getElementById('emailids').innerHTML="email should not start with @";
              return false;
        }
        if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
              document.getElementById('emailids').innerHTML="Please enter valid email .";
              return false;
        }
        if((emails.charAt(emails.length-3)!='c') && (emails.charAt(emails.length-2)!='c')){
              document.getElementById('emailids').innerHTML="Please enter valid email .c";
              return false;
        }
        if(emails.charAt(emails.length-2)!='o'){
              document.getElementById('emailids').innerHTML="Please enter valid email .o";
              return false;
        }
        if(emails.charAt(emails.length-1)!='m'){
              document.getElementById('emailids').innerHTML="Please enter valid email .m";
              return false;
        }
        if(pass.length<=7){
              document.getElementById('password').innerHTML="Please enter valid password";
              return false;
        }
 }
