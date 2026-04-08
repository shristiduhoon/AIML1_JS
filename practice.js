document.getElementById("changeText").addEventListener("click",function(){
    let text = document.getElementById("textInput").value;
    document.getElementById("heading").innerHTML=text;
});
document.getElementById("bgcolor").addEventListener("click",function(){
    document.body.style.backgroundColor = "blue";
});
document.getElementById("para").addEventListner("click",function(){
    let para = document.getElementById("par");
    if(para.style.display === "none"){
        para.style.display = "block";
    }
    else{
        para.style.display = "none";
    }
});