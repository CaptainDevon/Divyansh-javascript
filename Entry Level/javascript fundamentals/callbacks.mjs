import fs from "node:fs";

fs.readFile('./data.json','utf-8',(err,data)=>{
    if(err)
    {
        console.log(`error: cant read the file`);
        throw err;
    }
    try
    {
        const dataobj=JSON.parse(data);
        console.log(dataobj);
        console.log('completed');
    }
    catch(err)
    {
        console.error('cannot read it as json file');
        throw(err);
    }
});