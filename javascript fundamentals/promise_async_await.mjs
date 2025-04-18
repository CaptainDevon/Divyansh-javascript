import fs from "node:fs/promises";

async function loaddata()
{
    try
    {
        const data= await fs.readFile('./data.json','utf-8');
        
        const dataobj=JSON.parse(data);
        console.log(dataobj);
        console.log("complete");
    } catch(err)
    {
        console.log("could not load and parse the file");
        throw(err);
    }
    
}

loaddata().then(()=>console.log("promise has completed"));