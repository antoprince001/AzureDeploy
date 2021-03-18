const express = require('express');
const app =  express();

app.set('view engine','ejs');
app.set('/assets',express.static('assets'));


app.get('/',(req,res)=>{
    res.render('index');
});
const port = process.env.PORT || 5000;
app.listen(port);
