import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import router from '../backend/routes/appServices.js'
const app=express();
const PORT=2040;
app.use(cors());
app.use(bodyParser.json());

app.use('/personal-details',router);

app.listen(PORT, () => {
  console.log(`server running on the port : http://localhost:${PORT}`);
});
