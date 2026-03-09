var myinfo=new Array();
var myinfo1=Array();
console.log(myinfo,myinfo1); // empty array create ho rahi h


let collection=[{},[],true,"john",function(){},900098,undefined,null, new String("abc"),new Date()];
console.log(collection);
collection.teacherName="John Mac";
collection.phoneNo=9500345;
console.log(collection);

var trainerInfo=["shruti",29,"ghaziabad",{isMarried:true}];
console.log(trainerInfo[0]);
console.log(trainerInfo[1]);
console.log(trainerInfo[trainerInfo.length-1]);
trainerInfo.contact=866532357; // add element
console.log(trainerInfo);
trainerInfo[0]="jitender"; //update
console.log(trainerInfo);
