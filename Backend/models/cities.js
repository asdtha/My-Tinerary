const mongoose = require("mongoose")
const citiesSchema = new mongoose.Schema({

    name: {type:String, required:true},
    country:{type:String, required:true},
    description:{type:String, required:true},
    currency:{type:String, required:true},
    language:{type:String, required:true},
    demonym:{type:String, required:true},
    population:{type:String, required:true},
    coordinates:{type:Number, required:true},
    googlemaps:{type:String, required:true},
    continent:{type:String, required:true},
    region:{type:String, required:true},
    flag:{type:String, required:true},
    image:{type:String, required:true},

}) 

const City = mongoose.model("cities", citiesSchema)

module.exports = City;
