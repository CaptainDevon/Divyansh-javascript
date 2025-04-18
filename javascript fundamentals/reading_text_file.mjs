import fs from "node:fs";

fs.readFile('./imp msg.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(`error: cant read the file`);
        throw err;
    }
    console.log(data);
    console.log('completed');
});