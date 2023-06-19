const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        "name": {
            type:String
        },
        "phone": {
            type:String
        },
        "email": {
            type:String,
            unique:true
        },
        "address": {
            type:String
        },
        "postalZip": {
            type:String
        },
        "region": {
            type:String
        },
        "country": {
            type:String
        },
        "numberrange": {
            type:Number
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model("clientes",UserSchema)