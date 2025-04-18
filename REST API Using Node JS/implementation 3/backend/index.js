import express from 'express';
import routers from '../backend/Routers/router.js';
const app=express();
const port=process.env.PORT || 8000;

app.use('/api/cars',routers);

app.listen(port,()=>{
    console.log(`The server is running at http://localhost:${port}`);
});