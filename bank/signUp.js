function validate()
{
    //Name Validation
    var name=document.getElementById("name").value
    if (name.length==0) 
    {
        document.getElementById("nameV").innerHTML="**Name field is empty"
        return false;
    } 
    else if(name.length<3)
    {
        document.getElementById("nameV").innerHTML="**Name minimum length is 3"
        return false;
    }
    else if(name.length>15)
    {
        document.getElementById("nameV").innerHTML="**Name maximum length should not exceed 15"
        return false;
    }

    //Account number validation
    var accountNo=document.getElementById("acNo").value
    if(accountNo.length==0)
    {
        document.getElementById("acNoV").innerHTML="**Please enter ur acc_number"
        return false
    }
    else if(isNaN(accountNo))
    {
        document.getElementById("acNoV").innerHTML="**acc_number field include digits only"
        return false
    }
    else if(accountNo.length<10)
    {
        document.getElementById("acNoV").innerHTML="**acc_number is less than 10 digit"
        return false
    }
    else if(accountNo.length>16)
    {
        document.getElementById("acNoV").innerHTML="**acc_number is greater than 15 digit"
        return false
    }
    else if(accountNo.charAt(0)>0)
    {
        document.getElementById("acNoV").innerHTML="**Indian standard acc_number starts 0"
        return false
    }

    
    //Mob number validation
    var mobile=document.getElementById("mob").value
    if(mobile.length==0)
    {
        document.getElementById("mobV").innerHTML="**Please enter ur phone number"
        return false
    }
    else if(isNaN(mobile))
    {
        document.getElementById("mobV").innerHTML="**Number field include digits only"
        return false
    }
    else if(mobile.length<10)
    {
        document.getElementById("mobV").innerHTML="**Number is less than 10 digit"
        return false
    }
    else if(mobile.length>10)
    {
        document.getElementById("mobV").innerHTML="**Number is greater than 10 digit"
        return false
    }
    else if(mobile.charAt(0)<6)
    {
        document.getElementById("mobV").innerHTML="**Indian standard no starts with 7,8,9"
        return false
    }

    //Password Validation
    var pwd=document.getElementById("pwd").value
    if (pwd.length==0) 
    {
        document.getElementById("pwdV").innerHTML="**Password field is empty"
        return false;
    } 
    else if(pwd.length<3)
    {
        document.getElementById("pwdV").innerHTML="**Password minimum length is 3"
        return false;
    }
    else if(pwd.length>15)
    {
        document.getElementById("pwdV").innerHTML="**Password maximum length should not exceed 15"
        return false;
    }
    var confirmpassword=document.getElementById("cpwd").value
    if (pwd!=confirmpassword) 
    {
        document.getElementById("cpwdV").innerHTML="**Recheck password"
        return false;
    } 
    var captcha=document.getElementById("pic").value
    var Enteredcaptcha=document.getElementById("cap").value
    if (captcha!=Enteredcaptcha) 
    {
        document.getElementById("captV").innerHTML="**Captcha not matched"
        return false;
    } 
}
function fun()
{
    var capt=document.getElementById("cap").value
    var no="123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*"
    var n=no[Math.floor(Math.random()*no.length)]
    for (let i = 0; i < 6; i++) 
    {
        n=n+no[Math.floor(Math.random()*no.length)]        
    }
    form.t1.value=n;
}


  