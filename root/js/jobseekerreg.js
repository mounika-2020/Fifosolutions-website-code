function validation()
           {
           var fuser=document.getElementById('fuser').value;
           var luser=document.getElementById('luser').value;
           var emails=document.getElementById('email').value;
           var password=document.getElementById('passid').value;
           var cpassword=document.getElementById('cpassid').value;
           var mobileNumber=document.getElementById('mobileno').value;
           var location=document.getElementById('currentloc').value;
           var jtitle=document.getElementById('jobt').value;
            var experience=document.getElementById('exp').value;
            var resume=document.getElementById('resume').value;
            var dsalary=document.getElementById('sal').value;
            var emptype=document.getElementById('emptype').value;
            var willing=document.getElementById('reloc').value;
            var vstatus=document.getElementById('visas').value;
          if(fuser == ""){
                 document.getElementById('usernamef').innerHTML="please enter firstname ";
                 return false;
           }
           if((fuser.length <= 2) || (fuser.length>20)){
                 document.getElementById('usernamef').innerHTML="Firsrname length must be in between 2 to 20";
                 return false;
           }
           if(!isNaN(fuser)){
                 document.getElementById('usernamef').innerHTML="please enter only characters";
                 return false;
           }
           if(luser == ""){
                 document.getElementById('usernamel').innerHTML="please enetr lastname";
                 return false;
           }
           if((luser.length <= 2) || (luser.length>20)){
                 document.getElementById('usernamel').innerHTML="Lastname length must be in between 2 to 20";
                 return false;
           }
           if(!isNaN(luser)){
                 document.getElementById('usernamel').innerHTML="Please enter only characters";
                 return false;
           }
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

           if(password.length < 7){
             document.getElementById('passerr').innerHTML="Please enter valid password";
             return false;
           }
           if((cpassword.length < 7)||(cpassword!==password)){
             document.getElementById('cpasserr').innerHTML="Please enter above password";
             return false;
           }

           if(mobileNumber == ""){
                 document.getElementById('mobiles').innerHTML="please fill the mobile number field";
                 return false;
           }
           if(isNaN(mobileNumber)){
                 document.getElementById('mobiles').innerHTML="Only digits are allowed";
                 return false;
           }


           if(mobileNumber.length!=10){
                 document.getElementById('mobiles').innerHTML="mobile number must be only 10 digits";
                 return false;
           }
          /* if(techno == ""){
                 document.getElementById('tech').innerHTML="please enter technology";
                 return false;
           }
           if((techno.length <= 2) || (techno.length>20)){
                 document.getElementById('tech').innerHTML="technology length must be in between 2 to 20";
                 return false;
           }
           if(!isNaN(techno)){
                 document.getElementById('tech').innerHTML="only characters are allowed";
                 return false;
           }*/



                 if(location == ""){
                        document.getElementById('locationerr').innerHTML="please enter location ";
                        return false;
                  }
                  if(jtitle == ""){
                         document.getElementById('joberr').innerHTML="please enter job title ";
                         return false;
                   }
                   if(!isNaN(jtitle)){
                         document.getElementById('joberr').innerHTML="please enter only characters";
                         return false;
                   }
                   if(experience == ""){
                         document.getElementById('experr').innerHTML="please enetr your experience";
                         return false;
                   }
                   if(isNaN(experience)){
                         document.getElementById('experr').innerHTML="Only digits are allowed";
                         return false;
                   }
                   if(resume == ""){
                         document.getElementById('resumes').innerHTML="please upload the resume";
                         return false;
                  }
                  if(dsalary == ""){
                        document.getElementById('salaryerr').innerHTML="please fill desires salary";
                        return false;
                  }
                  if(isNaN(dsalary)){
                        document.getElementById('salaryerr').innerHTML="Only digits are allowed";
                        return false;
                  }
                  if(emptype == ""){
                         document.getElementById('emptypeerr').innerHTML="please enter employment type ";
                         return false;
                   }
                   if(willing == ""){
                          document.getElementById('relocateerr').innerHTML="please enter this field ";
                          return false;
                    }
                    if(vstatus == ""){
                           document.getElementById('visaerr').innerHTML="please enter visa status ";
                           return false;
                     }

           }
