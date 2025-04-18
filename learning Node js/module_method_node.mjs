import {createServer} from 'http'

const server=createServer((req,res)=>{
    res.end(`hello my name is divyansh\n`)
});

server.listen(4000,()=>{
    console.log(`this server is running...`);
});