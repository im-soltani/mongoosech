const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name:String,
    age: Number,

    favoriteFoods: [String]
});
    
    

module.exports = Person = mongoose.model('person',PersonSchema);
//const Person = mongoose.model('Person', PersonSchema);

//module.exports = Person;
