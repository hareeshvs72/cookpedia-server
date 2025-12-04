const recipes = require("../models/recipeModel");

// get all recipes
exports.getallRecipesController = async (req, res) => {
  console.log("inside getallRecipesController");
  try {
    const allrecipies = await recipes.find()
    res.status(200).json(allrecipies)
  } catch (error) {
    res.status(500).json(error)
  }
}

// get a single recipe

exports.viewRecipeController = async (req, res) => {
  console.log("inside viewRecipeController");
  const { id } = req.params
  try {
    const viewDetails = await recipes.findById({ _id: id })
    res.status(200).json(viewDetails)
  } catch (error) {
    res.status(500).json(error)
  }
}

// related productes in view

exports.relatedRecipesController = async (req, res) => {
  console.log("inside relatedRecipesController");
  const cuisine = req.query.cuisine
  try {
    const viewAllRecipieDetails = await recipes.find({ cuisine })
    res.status(200).json(viewAllRecipieDetails)
  } catch (error) {
    res.status(500).json(error)
  }
}


// ADD RECIPE   

exports.addRecipeController = async (req, res) => {
  console.log("inside  addRecipeController");
  const { name, ingredients, instructions, image, prepTimeMinutes, cookTimeMinutes, servings, difficulty, mealType, cuisine, caloriesPerServing } = req.body
  //  console.log(req.body);

  try {
    const existingRecipe = await recipes.findOne({ name })
    if (existingRecipe) {
      res.status(409).json("Recipe Already Exist")
    }
    else {
      const newRecipe = new recipes({
        name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType
      })
      await newRecipe.save()
      res.status(200).json(newRecipe)

    }
  } catch (error) {
    res.status(500).json(error)
  }
}

exports.removeRecipeController = async (req, res) => {
  console.log("inside removeRecipeController");
  const { id } = req.params
  console.log(id);
  
  try {
    console.log("before");
    
    const removeRecipe = await recipes.findByIdAndDelete(id)
    console.log("after");
    
    console.log(removeRecipe);
    
    res.status(200).json(removeRecipe)
  } catch (error) {
    res.status(500).json(error)
  }
}

// update recipe

exports.updateRecipeController = async (req, res) => {
  console.log("inside  updateRecipeController");
  const { name, ingredients, instructions, image, prepTimeMinutes, cookTimeMinutes, servings, difficulty, mealType, cuisine, caloriesPerServing } = req.body
  const { id } = req.params
  //  console.log(req.body);

  try {
    const updateRecipe = await recipes.findByIdAndUpdate({ _id: id }, { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType }, { new: true })

    await updateRecipe.save()

    res.status(200).json(updateRecipe)

  } catch (error) {
    res.status(500).json(error)
  }
}