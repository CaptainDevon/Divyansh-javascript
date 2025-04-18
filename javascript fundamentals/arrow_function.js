let greet=(user)=>
{
    console.log(`hello ${user} how are you?`);
}

let name='divyansh sinha';
let result=greet(name);


let sort=(array)=>{
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1;j<array.length;j++)
        {
            if(array[j]<array[i])
            {
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}

let arr=[-9,6,0,-1,5,-3,-10,11];
console.log(arr);
let sorted=sort(arr);
console.log(sorted);