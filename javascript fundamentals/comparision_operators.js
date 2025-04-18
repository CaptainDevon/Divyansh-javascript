//greater or less than 
let x1=7>5;
console.log(x1);

//equality
let x2=(3===3);
console.log(x2);

let x3=(true===false);
console.log(x3);

let x4=("hi" !== "Hi");
console.log(x4);


//primitive equality
let str1="hello";
let str2="hello";
let result=(str1===str2);
console.log(result);

//obejcts
let obj1={};
let obj2={};     
let result_obj=(obj1===obj2); //will not be same cause objects will be called by refrences 
console.log(result_obj);

let obj3={};
let obj4=obj3;
let resultant=obj3===obj4;
console.log(resultant);

//difference between (== & !=) standard equality operators vs (=== and !==) strict equality operators
let number1=5;    //integer
let number2="5";  //string
console.log(number1==number2);
console.log(number1===number2); //this will check the value and the datatype

console.log(undefined==null);
console.log(undefined===null);