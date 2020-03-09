const mongoose = require('mongoose');//import mongoose

const user = new mongoose.Schema({//define user schema or template, its a skeletan of our data base, inside this we define properties
    email:{type: String, required: true},//you can pass in any data type and define whether this data is rquired 
    username:{type: String, required: true},
    password:{type: String, required: true},
    confirmPassword:{type: String, required: true},
});
module.exports = mongoose.model('signup', user)//we are naming our template to be user and we are exporting it to be used else where