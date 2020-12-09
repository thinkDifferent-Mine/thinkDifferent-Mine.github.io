function validate()
{
    var username=document.getElementById("uname").value
    var password=document.getElementById("pwd").value
    
    if(username.length==0)
    {
        document.getElementById("unameV").innerHTML="**Username field is empty"
        return false;
    }
    else if(password.length==0)
    {
        document.getElementById("pwdV").innerHTML="**Password field is empty"
        return false;
    }
    else if (username!="Minnu")
        {
            document.getElementById("unameV").innerHTML="**Incorrect username"
            return false;
        }
        else if(password!=1234)
        {
            document.getElementById("pwdV").innerHTML="**Incorrect password"
            return false;
        }
        
}
