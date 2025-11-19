const mongoose = require("mongoose")

const recipechema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ingredients:{
        type:Array,
        required:true
    },
    instructions:{
        type:Array,
        required:true
    },
    prepTimeMinutes:{
        type:Number,
        required:true

    },
     cookTimeMinutes:{
        type:Number,
        required:true
    },
     servings:{
        type:Number,
        required:true

    },
      difficulty:{
        type:String,
        required:true
    },
      cuisine:{
        type:String,
        required:true
    },
       caloriesPerServing:{
        type:Number,
        required:true
    },
       image:{
        type:String,
        required:true
    },
     mealType:{
        type:Array,
        required:true
    },

})

const recipes = mongoose.model("recipes",recipechema)
module.exports = recipes