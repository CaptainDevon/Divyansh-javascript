import express from 'express';
import mongoose from 'mongoose';
import routes from './routers/journalServices.js';
const app=express();
const PORT=4500;
app.use(express.json());

mongoose.connect("mongodb+srv://divyansh2004ind:Ramuktimus6$@cluster0.fiebqfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewURLParser:true,
    useUnifiedTopology:true
});

mongoose.connection.once('open',()=>{
    console.log('connected to mongoDB');
});


mongoose.connection.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
});


app.use('/journal',routes);

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});