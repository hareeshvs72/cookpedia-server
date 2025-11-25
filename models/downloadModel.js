const mongoose = require('mongoose')

const downloadSchema = new mongoose.Schema({
    recipeId:{
        type:String,
        required:true
    },
     recipeName:{
        type:String,
        required:true
    },
     recipeImage:{
        type:String,
        required:true
    },
     recipeCuisine:{
        type:String,
        required:true
    },
     count:{
        type:Number,
        required:true
    },
     userMail:{
        type:String,
        required:true
    }
})

const downloads = mongoose.model("downloads",downloadSchema)
module.exports = downloads