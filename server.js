//const express = require('express');
//const app = express();
//  MIDDELWEAR
//app.use(express.json());

//const mongoose = require('mongoose');
//const person = require('./models/Routers/person');

//run server
//const  port = process.env.PORT || 5000 
//app.listen(port,err=>err?console.log("errreur"):console.log("server is runnig on port 5OOO"))
//connect mongoose

const express = require('express');
const connectDB = require('./config/connectDB');
const app = express();
const mongoose = require('mongoose');
const person = require('./Routers/person');
// middleware
app.use(express.json())

app.use("/person" ,require("./Routers/person"))

connectDB();

// ruun server
const port = process.env.PORT || 4000
app.listen(port,(err)=>{
    if(err) {console.log('server not run')}
    else { console.log( `server run on port ${port}`);}
    })

