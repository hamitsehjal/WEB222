
function formValidation(form)
{
   var messages={foo:'',count:0};
   var result1=firstNameValidation(form,messages);

   var result2=lastNameValidation(form,messages);

   var result3=userNameValidation(form,messages);

   var result4=passwordValidation(form,messages);

   if(result1&&result2&&result3&&result4)
   { 
        alert("Success!!..");
        return true;
   }
   else
   {
       showErrors(messages);
       return false;
   }
}


function showErrors(messages)
{
    document.querySelector("#errors").innerHTML=messages.foo;
}

function clearErrors()
{
    document.querySelector("#errors").innerHTML='';
    messages.foo='';
    messages.count=0;
}

function firstNameValidation(form,messages)
{
    var alApha=true;
    var firstUpper=true;
    var input=form.firstname.value.trim();

    if(!(input.charAt(0)>='A'&&input.charAt(0)<='Z'))
    {
        if(messages.count<5)
        {
            messages.foo+="<li><span class=\"red\">FirstName</span> : First Character should be in UPPERCASE</li>"+"<br/>";
            firstUpper=false;
            messages.count+=1;
        }
      
    }

    input=input.toUpperCase();

    for(var i=0;i<input.length;i++)
    {
        if(input.charAt(i)<'A'||input.charAt(i)>'z')
        {
           if(messages.count<5)
           {
            messages.foo+="<li><span class=\"red\">FirstName</span> : Please enter a meaningful name with all alphabet letters</li>"+"<br/>";
            alApha=false;
            messages.count+=1;
            break;
           }
           
        }
    }

    if(!alApha||!firstUpper)
    {
        showErrors(messages);
        form.firstname.focus();
        return false;
    }
    else
    {
        return true;
    }
}

function lastNameValidation(form,messages)
{
    var alApha=true;
    var firstUpper=true;
    var input=form.lastname.value.trim();

    if(!(input.charAt(0)>='A'&&input.charAt(0)<='Z'))
    {
        if(messages.count<5)
        {
            messages.foo+="<li><span class=\"red\">LastName</span> : First Character should be in UPPERCASE</li>"+"<br/>";
            messages.count+=1;
        }
        firstUpper=false;
    }

    input=input.toUpperCase();

    for(var i=0;i<input.length;i++)
    {
        if(input.charAt(i)<'A'||input.charAt(i)>'z')
        {
            if(messages.count<5)
            {
                messages.count+=1;
                messages.foo+="<li><span class=\"red\">LastName:</span> Please enter a meaningful name with all alphabet letters</li>"+"<br/>";
            }
            alApha=false;
            break;
        }
    }

    

    if(!alApha||!firstUpper)
    {
        form.lastname.focus();
        return false;
    }
    else
    {
        return true;
    }
}

function userNameValidation(form,messages)
{
    var isAlpha=true;
    var isLength=true;
    var input=form.username.value.trim();

    input=input.toUpperCase();
    if(!(input.charAt(0)>='A'&&input.charAt(0)<='Z'))
    {
        if(messages.count<5)
        {
            messages.count+=1;
            messages.foo+="<li><span class=\"red\">Username:</span> First character must be an alphabet</li>"+"<br/>";
        }
        isAlpha=false;
    }

    if(input.length<6)
    {
        if(messages.count<5)
        {
            messages.count+=1;
            messages.foo+="<li><span class=\"red\">Username:</span> Must be atleast 6 characters long</li>"+"<br/>";
        }
        isLength=false;
    }

  

    if(!isLength||!isAlpha)
    {
        form.username.focus();
        return false;
    }
    else
    {
        return true;
    }
}

//For Validating the PASSWORD
//
function passwordValidation(form,messages)
{
    var islength=true;
    var isAlpha_N=true;
    var isUpper=false;
    var isdigit=false;
    var match=true;
    var input1=form.password1.value.trim();

    //checking for lenght
    if(input1.length<6)
    {
        if(messages.count<5)
        {
            messages.count+=1;
            messages.foo+="<li><span class=\"red\">Password:</span> must be atleast 6 characters</li>"+"<br/>";
        }
        islength=false;
    }

    //checking for atleast 1 UPPERCASE
    for(var i=0;i<input1.length;i++)
    {
        if(input1.charAt(i)>='A'&&input1.charAt(i)<='Z')
        {
            isUpper=true;
            break;
        }
    }
   
    
    //atleast 1 UPPERCASE letter
    if(!isUpper)
    {
        if(messages.count<5)
        {
            messages.count+=1;
            messages.foo+="<li><span class=\"red\">Password:</span> must contain atleast 1 Uppercase Letter</li>"+"<br/>";
        }
    }

    //Checking for digits
    for(var i=0;i<input1.length;i++)
    {
        if(input1.charAt(i)>=0 &&input1.charAt(i)<=9)
        {
            isdigit=true;
            break;
        }
    }


     //atleast 1 Digit
     if(!isdigit)
     {
         if(messages.count<5)
         {
            messages.count+=1;
             messages.foo+="<li><span class=\"red\">Password:</span> must contain atleast 1 digit</li>"+"<br/>";
         }
     }

    input1=input1.toUpperCase();
    if(!(input1.charAt(0)>='A'&&input1.charAt(0)<='Z'))
    {
        if(messages.count<5)
        {
            messages.count+=1;
            messages.foo+="<li><span class=\"red\">Password:</span> First character must be an alphabet</li>"+"<br/>";
        }
        isAlpha_N=false;
    }



    if(document.getElementById('password1').value!=document.getElementById('password2').value)
    {
        if(messages.count<5)
        {
            messages.count+=1;
            messages.foo+="<li><span class=\"red\">Password</span> didn't match!!<br/>"+"Please enter again: </li>";
        }
        match=false;
        
    }


    if(!isAlpha_N||!isUpper||!match||!isdigit||!islength)
    {
        form.password1.focus();
        return false;
    }
    else
    {
        return true;
    }
    
}


