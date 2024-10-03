function fact(n)
{
    if(n===0)
    {
        return 1
    }
    return n*fact(n-1)
}
var data1=document.getElementById("data")
data1.innerHTML="factorial value of 3 is" +" : "+ fact(3)