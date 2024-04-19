let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr.length);
let arr_string=["hello","my","name","is","divyansh","sinha"];
console.log(arr_string);
console.log(arr_string.length);

//creating arrays
let arr1=[];
let arr2=["hello","hi"];
let arr3=[1,2,3,4,5];
let arr4=new Array();
let arr5=new Array(1,2,3,4,5,6);

//fetching
let names=["ayush",'shashank','divyansh','hassan','omar'];
console.log(names[4]);
console.log(names.length);

//check if element is there or not 
let check=names.includes("divyansh");
console.log(check);

//finding the index of element 
console.log(names.indexOf("divyansh"));

//adding the new element in an array(at the end)
names.push("gautam");
console.log(names);

//adding the new element in an array(at the beginning)
names.unshift("montey");
console.log(names);

//adding the new element into the array(after an index)
names.splice(4,0,"rakshit");
console.log(names);

//deleting the element from the array(at the beginning)
names.shift();
console.log(names);

//deleting the element from the array(between the array)
names.splice(3,2);
console.log(names);

//creating array using objects
let ob1={
    name:"divyansh",
    age:20
};
let ob2={
    name:"ayush",
    age:22
};
let ob3={
    name:"shashank",
    age:21
};
let ob4={
    name:"hassan",
    age:21
};

let arr_obj=[ob1,ob2,ob3,ob4];
console.log(arr_obj);