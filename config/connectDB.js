const mongoose  = require('mongoose')
const config = require('config')

/*const connectDB = () =>{
    mongoose.connect (config.get('MongoURI'))
.then(()=>console.log('mongoose connected'))
.catch(err=>console.log('erreur'))}
module.exports = connectDB */

const connectDB=()=>{
mongoose.connect(config.get("MONGO_URI"),{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("mongoose is connected")).catch((err)=>console.log(err))}

module.exports=connectDB