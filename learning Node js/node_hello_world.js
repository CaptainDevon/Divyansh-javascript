
const http=require('http');
const server=http.createServer((req,res)=>{
    res.end(`hello world\n`);
});

server.listen(5000,()=>{
    console.log(`Server is running ...`);
});