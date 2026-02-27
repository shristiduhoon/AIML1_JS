//  function myFunction(){
//     alert("Hello World!");
//  }

//   function sayHello(name,age){
//      document.write(name + "is" + age + "years old.");
//  }
//  when a function does not return value it becomes undefined insted of saying void 

//  var res= mul(12,30);
//  function mul(x,y){
//      return x*y;
//  }
//  document.write(res);

// //Arrow function|
// var add2=(a,b)=>{
//     console.log(a+b);
// }
// add2(102,20);

//Object
// var person={name:"John mac",age:30,isMarried:true,address:{street:"vijay nagar",flatno:201}};
// console.log(person);
// for(let x in person){
//     console.log("details : "+ x + ": "+ person[x]);
// }

var person2= new Object();
person2.name='krishnkant';
person2.age=32;
person2.isMarried=true;
person2.address={};
person2.address.street="nagar road";
person2['address']['flatno']=33;
console.log(person2);
console.log(person2['address']['street'])

