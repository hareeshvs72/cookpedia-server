const saveRecipes = require("../models/saveRecipeModel");

exports.addSaveRecipeController = async (req, res) => {
    console.log("inside add save controller");

    const { id } = req.params
    const userMail = req.payload
    const { name, image } = req.body
    console.log(id);

    try {
        const saveRecipe = await saveRecipes.findOne({ recipeId: id, userMail })
        if (saveRecipe) {
            res.status(409).json("you already added to save collections")
        }
        else {
            const newSave = new saveRecipes({
                recipeId: id, recipeName: name, recipeImage: image, userMail
            })
            await newSave.save()
            res.status(200).json(newSave)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// get all save recipie by user 

exports.getAllUserSaveRecipeController = async (req, res) => {
    console.log("inside getAllUserSaveRecipeController");
    const userMail = req.payload
    console.log(userMail);
    
    try {
        const recipe = await saveRecipes.find({userMail})
        res.status(200).json(recipe)

    } catch (error) {
        res.status(500).json(error)
    }

}

// delete recipe

exports.deleteRecipeController = async(req,res)=>{
    console.log("inside deleteRecipeController");
    
    const {id} = req.params
       console.log(id);
       
    try {
        const deleteRecipe = await saveRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(deleteRecipe)
    } catch (error) {
        res.status(500).json(error)
    }



}