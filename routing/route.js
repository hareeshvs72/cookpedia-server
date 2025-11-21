const express = require("express")
const routes = express.Router()
const recipeController = require("../controllers/recipeController")
const userController = require('../controllers/userController')
// get all recipies

routes.get('/all-recipes',recipeController.getallRecipesController)


// register 

routes.post('/register',userController.registerController)


module.exports = routes