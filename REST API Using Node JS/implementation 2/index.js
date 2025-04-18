import express from "express";
import mongoose from 'mongoose';
import routes from './routers/userServices.js';
const app = express();
const PORT = 4000;
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open",()=>{
    console.log(`connected to mongodb`);
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

app.use('/users',routes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
