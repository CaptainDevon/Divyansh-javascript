//object
let employee={
    firstname: "Divyansh",
    lastname:"Sinha",
    age:20,
    birthdate:new Date("January 09,2004"),
    occupation:"student",
    isactive:true,
    pocketmoney:3500
}

//converting it to JSON string
let result=JSON.stringify(employee);
console.log(result);
result=JSON.stringify(employee,null,2);
console.log(result);

// convert back to object
let newresult=JSON.parse(result);
console.log(newresult);

//write JSON directly

let object=`{
    "firstname":"divyansh",
    "lastname":"sinha"
}`
let converted=JSON.parse(object);
console.log(converted);