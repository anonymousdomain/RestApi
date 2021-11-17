import express, { Router } from 'express';
import bodyParser from 'body-Parser'
import router from './routes/users.js';
//init express
const app=express();

const port=process.env.PORT||5000;

app.use(bodyParser.json())
app.use('/users',router)
app.listen(port,()=>console.log(`server is running on port:http://localhost:${port}`))