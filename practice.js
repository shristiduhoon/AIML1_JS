let employees=[];
function addEmployee(){
    let name=document.getElementById("name").value;
    let id=document.getElementById("id").value;
    let sal=parseFloat(document.getElementById("sal").value);
    let dept=document.getElementById("dept").value;
    let employee={name:name,id:id,salary:sal,dept:dept};
    employees.push(employee);
    alert("employee added succesfully");
}
function displayEmployee(){
    let output="<h3>All employees</h3>";
    employees.forEach(emp=>{
        output+=`Name:${emp.name} | ID:${emp.id} | Salary:${emp.sal} | Dept:${emp.dept}<br>`;
    })
    document.getElementById("output").innerHTML=output;
}
function filterSalary(){
    let filtered=employees.filter(emp=>emp.sal>50000);
    let output="<h3>Employees with salary>500000";
    filtered.forEach(emp=>{
        output+=`Name:${emp.name} | SALARY:${emp.sal};`
    })
    document.getElementById("output").innerHTML=output;
}
function totalSalary(){
    let total = employees.reduce((sum,emp)=>sum+emp.salary,0)
}
function averageSalary(){
    let total=employees.reduce((sum,emp)=>sum+emp.sal,0);
    let avg=total/employees.length;
}
function countDepartment(){
    let deptName=prompt("Enter department name");
    let count=employees.filter(emp=>emp.dept.toLowerCase()==emp.deptName.toLowerCase()).length;
    document.getElementById("output").innerHTML="employees in"+deptName+":"+count;
}