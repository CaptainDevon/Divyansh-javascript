import fs from "node:fs/promises";

let employees=[];

const loadData= async () =>
{
    console.log("loading employees .........");
    try{
        const filedata=await fs.readFile('./data.json','utf-8');
        employees=JSON.parse(filedata);
    }
    catch(err)
    {
        console.log("could not load and parse the file");
        throw(err);
    }

}

const writeData= async ()=> {
    console.log("writing employees .........");
    try
    {
        await fs.writeFile('./data.json',JSON.stringify(employees,null,2));
    }
    catch(err)
    {
        console.error(`cannot write the data of employees`);
        throw(err);
    }
}



