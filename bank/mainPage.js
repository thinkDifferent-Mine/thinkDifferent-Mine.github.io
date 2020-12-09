function main()
{
    var res=document.getElementById("s1").value
    
    if(res=="Deposit")
    {
    var des=document.getElementById("descp").value
    var amt=Number(document.getElementById("amt").value)
    var table1 = document.getElementById("td1");
    var row1 = table1.insertRow(2);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    cell1.innerHTML=des
    cell2.innerHTML=amt
    var bal=Number(document.getElementById("cb").value)
    document.getElementById("cb").value=bal+amt
    }

    else if(res=="Withdraw")
    {
    var des=document.getElementById("descp").value
    var amt=Number(document.getElementById("amt").value)
    var table1 = document.getElementById("td2");
    var row1 = table1.insertRow(2);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    cell1.innerHTML=des
    cell2.innerHTML=amt
    var bal=Number(document.getElementById("cb").value)
    document.getElementById("cb").value=bal-amt
    }
    
    var currentbal=Number(document.getElementById("cb").value)
    if (currentbal.length==0) 
    {
        document.getElementById("cbV").innerHTML="**Please enter the balance"
        return false;
    } 
    else if(currentbal.length<0)
    {
        document.getElementById("cbV").innerHTML="**enter the balance"
        return false;
    }
    else if(currentbal<100)
    {
        document.getElementById("cbV").innerHTML="**Please enter minimum balance 100 "
        return false
    }
    else if(currentbal<0)
    {
        document.getElementById("cbV").innerHTML="**postive numbers"
        return false
    }

    var amount=Number(document.getElementById("amt").value)
    var currentbal=Number(document.getElementById("cb").value)
    if(amount<0)
    {
        document.getElementById("amtV").innerHTML="**Please enter the amount"
        return false
    }
    else if(currentbal<amount)
    {
        document.getElementById("amtV").innerHTML="**Insufficient balance"
        return false
    }
    else if(isNaN(amount))
    {
        document.getElementById("amtV").innerHTML="**amount field include digits only"
        return false
    }
}
function reset() {
    document.getElementById("f1").reset();
  }

  function validate()
{
    //current balance Validation
    
    

}
