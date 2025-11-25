const express = require("express")
const routes = express.Router()
const recipeController = require("../controllers/recipeController")
const userController = require('../controllers/userController')
const jwtMiddleWare = require("../middleWare/jwtMiddleWare")
const downloadController = require('../controllers/downloadController')

// --------------------------- user --------------------------------
// register 

routes.post('/register',userController.registerController)

// login 
routes.post('/login',userController.loginController)


// --------------------- recipie  -----------------------------------
// get all recipies

routes.get('/all-recipes',recipeController.getallRecipesController)

// vie recipe
routes.get('/recipes/:id/view',jwtMiddleWare,recipeController.viewRecipeController)

// related recipies

routes.get('/related-recipes',jwtMiddleWare,recipeController.relatedRecipesController)

// ----------------------------download -------------------------------

routes.put('/recipes/:id/download',jwtMiddleWare,downloadController.addToDownloadController)

module.exports = routes