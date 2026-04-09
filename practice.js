function calculateResult(){
    let n=document.getElementById("subject").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject marks,"+(i+1)));
        total+=x;
    }
    let avg=total/n;
    let grade;
    let resultstatus;
    if(avg>=90){
        grade="A+";
    }
    else if(avg>=80){
        grade="b";
    }
    else if(avg>=70){
        grade="c";
    }
    else if(avg>=50){
        grade="d";
    }
    else{
        grade="e";
    }
    if(avg>40){
        resultstatus="pass";
    }
    else{
        resultstatus="fail";
    }
    document.getElementById("result").innerHTML="Total marks:"+total+"<br/>"+"average:"+avg.toFixed(2)+"<br/>"
    +"grade:"+grade+"<br/>"+"resultstatus"+resultstatus;
}