const mongoose = require('mongoose')

const saveRecipeSchema = new mongoose.Schema({
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
    
     userMail:{
        type:String,
        required:true
    }
})

const saveRecipes = mongoose.model("saveRecipes",saveRecipeSchema)
module.exports = saveRecipes