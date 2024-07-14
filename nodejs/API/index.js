import express from "express";
import 'dotenv/config'
const app = express();

const port = 4000;

app.get('/', (req,res )=>{
    res.send("Hello World")
})

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on ${port}`);
})