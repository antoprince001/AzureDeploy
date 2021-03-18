const express = require('express');
const app =  express();

app.set('view engine','ejs');
app.set('/assets',express.static('assets'));


app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(5000);