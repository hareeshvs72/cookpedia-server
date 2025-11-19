const express = require("express")
const routes = express.Router()
const recipeController = require("../controllers/recipeController")


routes.get('/all-recipes',recipeController.getallRecipesController)

module.exports = routes