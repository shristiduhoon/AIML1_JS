// document object is property of window object
/*const result = document.getElementById("para");
console.log(result);
result.innerHTML= "my self ";
result.title="myname";
const result2 = document.getElementsByClassName("heading");
result2.innerHTML= "HII";
const result3 = document.getElementsByTagName("p");
result3[2].innerHTML = "this is a pet"; // 2 para ko ke liye indexes hai
result3[1].style.color = "blue";
result3[1].innerText = "my paragraph";

const test = document.querySelector("ul li nth-child(3");
const test2 = document.querySelectorAll("ul li");*/

// const element = document.getElementById("myH1");
// let text = element.getAttribute("class");
// document.getElementById("demo").innerHTML = text;

// function myFunction(){
//     document.getElementById("myH1").setAttribute("class","democlass");
// }
// const heading=document.createElement("h2");
// const bodytag=document.getElementsByTagName("body");
// bodytag[0].append(heading);//last position
// bodytag.prepend()//starting position insertion
// bodytag.before()//adds before the node
// bodytag.after()//adds after the node
// Node.remove()

// function practice(){
//     document.open();
//     document.write("<h1>PRACTICE</h2>");
//     document.close();
// }
function onMouseOver(){
    console.log("mouse over");
}
const x=document.querySelector("input");
x.addEventListener("focus",onhandlefocus);
x.addEventListener("blur",onhandleblur);

function MyFunction(){
    
}