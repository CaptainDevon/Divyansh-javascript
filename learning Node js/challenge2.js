let counter=0;
let printer=setInterval(()=>{
    console.log(`hello`);
    counter++;
    if(counter==5)
        {
            console.log(`done`);
            clearInterval(printer);
        }
},1000
);




