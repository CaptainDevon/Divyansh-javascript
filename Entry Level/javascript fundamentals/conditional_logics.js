let employee={
    firstname:"divyansh",
    lastname:"sinha",
    age:20,
    date:"09-01-2004",
    year:17,
    isactive:true,
    department:"engineering",
    branch:"aiml"
};

//badge assignment
let badge_color;
if(employee.year<5)
{
    badge_color="Blue";
}
else if(employee.year<10)
{
    badge_color="yellow";
}
else if(employee.year<15)
{
    badge_color="red";
}
else if(employee.year<20)
{
    badge_color="purple";
}
else
{
    badge_color="silver";;
}
console.log(`the colour of your badge is : ${badge_color}`);

//evaluting multiple conditions
//&&
if(employee.department=="engineering" && employee.age==18)
{
    console.log(`condition met`);
}
else{
    console.log(`condition didnt met`);
}

// ||
if(employee.department=="engineering" || employee.age==27)
{
    console.log(`condition met`);
}
else{
    console.log(`condition didnt met`);
}

//evaluating for condition not true
if(employee.department="engineering" && !employee.isactive)
{
    console.log(`the requirements met`);
}
else{
    console.log(`the requirements didnt met`);
}

employee.eligibility=(employee.age>=18)? "yes":"no";
console.log(employee.eligibility);

let result=JSON.stringify(employee,null,2);
console.log(result);