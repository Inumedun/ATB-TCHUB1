const express = require('express');

const app = express();
const env = require('dotenv').config();
const port = process.env.PORT ||
app.get('/',(req,res)=>{
    res.send('homepage')

});

app.listen(port,()=>{
    console.log("port is working" + port);
});













 