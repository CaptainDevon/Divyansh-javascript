let arr=[1,2,3,4,5];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//for of loop
for(let ans of arr)
{
    console.log(ans);
}

//for in loop 
let obj=
{
    firstname:"divyansh",
    lastname:"sinha"
};
for(let key in obj)
{
    console.log(`${key}:${obj[key]}`);
}