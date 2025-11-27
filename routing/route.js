const express = require("express")
const routes = express.Router()
const recipeController = require("../controllers/recipeController")
const userController = require('../controllers/userController')
const jwtMiddleWare = require("../middleWare/jwtMiddleWare")
const downloadController = require('../controllers/downloadController')
const saveRecipeController = require('../controllers/saveRecipeController')
// --------------------------- user --------------------------------
// register 

routes.post('/register',userController.registerController)

// login 
routes.post('/login',userController.loginController)

// update user profile

routes.put('/user/:id/edit',jwtMiddleWare,userController.updateUSerController)

// --------------------- recipie  -----------------------------------
// get all recipies

routes.get('/all-recipes',recipeController.getallRecipesController)

// vie recipe
routes.get('/recipes/:id/view',jwtMiddleWare,recipeController.viewRecipeController)

// related recipies

routes.get('/related-recipes',jwtMiddleWare,recipeController.relatedRecipesController)

// ----------------------------download -------------------------------

routes.put('/recipes/:id/download',jwtMiddleWare,downloadController.addToDownloadController)

// get user downld 

routes.get('/recipe/download',jwtMiddleWare,downloadController.userDownloadedListController)

// save recipe or colection 

routes.post('/recipes/:id/save',jwtMiddleWare,saveRecipeController.addSaveRecipeController)

// get all save recipies

routes.get('/recipes/save',jwtMiddleWare,saveRecipeController.getAllUserSaveRecipeController)
// delet recipe

routes.delete('/recipes/:id/remove',jwtMiddleWare,saveRecipeController.deleteRecipeController)

module.exports = routes