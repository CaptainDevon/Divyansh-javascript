// simple function to log out truthyness
const istruthy=(name,exp)=>
{
    console.log(`${name}: ${Boolean(exp)}`);
}

//values
istruthy("x1",0);
istruthy("x2","0");
istruthy("x3",1);
istruthy("x4",-2);
istruthy("x5",NaN);

//Boolean,null and undefined
istruthy("x6",null);
istruthy("x7",undefined);
istruthy("x8",true);

//strings
istruthy("x9","hello");
istruthy("x10","");
istruthy("x11","false");

//objects
istruthy("x12",{});
istruthy("x13",{"hello":0});

//undefined variable
let check;
istruthy("x14",check);