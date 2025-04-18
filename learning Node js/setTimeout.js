setTimeout(
    ()=>{
        console.log("hello after 4 seconds");
    },4*1000
);

//method 2
const func=()=>
    {
        console.log(`hello after 5 seconds`);
    };

setTimeout(func,5*1000);

//with arguments
const rocks=(who)=>{
    console.log(`${who} rocks`)
};

setTimeout(rocks,6*1000,"divyansh");