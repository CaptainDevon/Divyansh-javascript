import fs from "node:fs/promises";
import fsc from "node:fs";
fs.readFile("./data.json", "utf-8")
  .then((data) => {
    const dataobj = JSON.parse(data);
    console.log(dataobj);
    console.log(`complete`);
  })
  .then(() => readFile('./data.json'))
  .then(data => console.log(data))
  .catch((err) => {
    console.log(`could not complete loading and parsing`);
    throw err;
  });

//creating a custom promise (using call version)
const readFile= async (filename) =>
{
    return new Promise((resolve,reject)=>
    {
        fsc.readFile('./data.json','utf-8',(err,data)=>
    {
        if(err)
        {
            reject(err);
        }
        resolve(data);
    })
    })
}
