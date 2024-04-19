let stringval="hello";
console.log(typeof(stringval));
let number=4;
console.log(typeof(number));
let boolean=true;
console.log(typeof(boolean));

//joining non string value with a string value
let age=20;
let firstname='Divyansh';
let description=`hello m name is ${firstname} and my age is ${age} years`;
console.log(description);
console.log(typeof(description));

//converting string to number
let age_string='20';
let age_number=Number(age_string);
console.log(age_number);
console.log(typeof(age_number));


//Nan situation
let string_value="Divyansh Sinha";
let string_number=Number(string_value);
console.log(string_number);
console.log(typeof(string_number));

//object situation
let string_object="Sinha";
let string_object_number=new Number(string_object);
console.log(string_object_number);
console.log(typeof(string_object_number));

//converting value to a boolean
let num1=1;
let num2=0;
let bool1=Boolean(num1);
let bool2=Boolean(num2);
console.log(`num1: ${bool1} num2:${bool2}`);

let num3=5;
let num4=-8;
let num5=10;
let bool3=Boolean(num3);
let bool4=Boolean(num4);
let bool5=new Boolean(num5);
console.log(`num3= ${bool3} num4= ${bool4} num5= ${bool5}`);
console.log(bool5);

//converting string into boolean
let string1="saminamina";
let string2;
let bool_string1=Boolean(string1);
let bool_string2=Boolean(string2);    //false because we have not given the value to string 2
console.log(bool_string1);
console.log(bool_string2);