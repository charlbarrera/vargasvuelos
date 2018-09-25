const express = require('express');

const app = express();
const router = require('./routes/appRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/vuelos', { useNewUrlParser: true });


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', router);

app.listen(3000, function(){
    console.log('running in port:'+3000);
});

