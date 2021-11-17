import express from 'express';
import bodyParser from 'body-Parser'
//init express
const app=express();

const port=process.env.PORT||5000;

app.use(bodyParser.json())

app.listen(port,()=>console.log(`server is running on port:http://localhost:${port}`))