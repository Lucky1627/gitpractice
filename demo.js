const showData=()=>{
    
    let data=document.getElementById("data");
    if(data.style.display==="none")
    {
        data.style.display="flex";
        data.style.justifyContent="center";
        data.style.alignItems="center"
    }
    else
    data.style.display="none"
}