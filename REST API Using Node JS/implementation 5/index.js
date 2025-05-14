import express from 'express';
import router from './routes/routes.js';

const app=express();
const PORT=900;
app.use(express.json());
app.use('/inventory',router);
app.listen(PORT,()=>{
    console.log(`the server is running on http://localhost:${PORT}`);
});