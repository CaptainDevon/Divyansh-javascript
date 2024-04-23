//making of average of he elements in an array 
function average_value(arr)
{
    let sum=0;
    for(i in arr)
    {
        sum+=arr[i];
    }
    return sum/(arr.length);
}
let arr=[50,46,46,30,60];
let result=average_value(arr);
console.log(`average score: ${result}`);

function plus_avg(a,b)
{
    console.log('done');
    return (1+a+b)/2;
}

let a=1;
let b=2;
let c=3;

let result1=plus_avg(a,b);
let result2=plus_avg(b,c);
let result3=plus_avg(c,a);
let array=[result1,result2,result3];
console.log(array);


//making of a dsa function
function selection_sort(array)
{
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[i]>array[j])
            {
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array
}

let array1=[1,2,5,3,6,7,-3,-8,0,9];

let resultant=selection_sort(array1);
console.log(`resultant: ${resultant}`);
