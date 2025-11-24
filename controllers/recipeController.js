const recipes = require("../models/recipeModel");

// get all recipes
exports.getallRecipesController = async(req,res)=>{
 console.log( "inside getallRecipesController");
  try {
    const allrecipies = await recipes.find()
    res.status(200).json(allrecipies)
  } catch (error) {
    res.status(500).json(error)
  }
}

// get a single recipe

exports.viewRecipeController = async(req,res)=>{
 console.log( "inside viewRecipeController");
 const {id }= req.params
  try {
    const viewDetails = await recipes.findById({_id:id})
    res.status(200).json(viewDetails)
  } catch (error) {
    res.status(500).json(error)
  }
}

// related productes in view

exports.relatedRecipesController = async(req,res)=>{
 console.log( "inside relatedRecipesController");
 const cuisine = req.query.cuisine
  try {
    const viewAllRecipieDetails = await recipes.find({cuisine})
    res.status(200).json(viewAllRecipieDetails)
  } catch (error) {
    res.status(500).json(error)
  }
}