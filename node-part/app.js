const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route'); 
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
mongoose.connection.on('connected',()=>{
    console.log('connection is ok');
});


app.use('/api',route);
app.use(bodyparser.json());
app.use(cors());

app.get('/',(req, res)=>{
    res.send('hello welcome to Users application');
})



const port = 3000;

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
});