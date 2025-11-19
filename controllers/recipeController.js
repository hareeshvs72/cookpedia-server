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