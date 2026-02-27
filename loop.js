// var count;
// document.write("Starting loop");
// document.write("<br/>");
// for(count=0;count<10;count++){
//     document.write(count);
//     document.write("<br/>");
// }
// document.write("loop stopped!");

// const person={name:"ajay",lname:"chauhan",age:25};
// for(let x in person){
//     console.log("person details: "+x+"="+person[x]);//or you can write person.x to access element
// }

// const obj={name:"hello",lname:"hiii"}
// for(let x in obj){
//     console.log(x + ":"+ obj.x)
// var count=0;
// document.write("start");
// document.write("<br/>");
// while(count<10){
//     document.write("current count:"+count+"<br/>")
//     count++;
// }

var age=20;
if(age>=18){
    document.write("<b>You are eligble to vote<b>");
}
else{
    document.write("<b>You are minor<b>");
}
document.write("<br/>");
var grade='A';
document.write("entering switch block<br/>");
switch(grade){
    case 'A':document.write("Good job");break;
    case 'B':document.write("Pretty good");break;
    case 'C':document.write("Passed");break;
    case 'D':document.write("Not so good");
    default:document.write("unknown grade");
}



