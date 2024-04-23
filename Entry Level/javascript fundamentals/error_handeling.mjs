import fs from 'node:fs/promises';



try{
    const rawdata=await fs.readFile("./package-lock.json");
    const dataobj=JSON.parse(rawdata);
}
catch(err)
{
    console.log(`Error Name : ${err.name}`);
    console.log(`Error Message : ${err.message}`);

}

fs.readFile('./pckage.json')
.then(rawdata=> {
    return JSON.parse(rawdata);
})
.catch(err=>{
    console.log(`Error Name : ${err.name}`);
    console.log(`Error Message : ${err.message}`);
})