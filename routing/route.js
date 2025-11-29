const express = require("express")
const routes = express.Router()
const recipeController = require("../controllers/recipeController")
const userController = require('../controllers/userController')
const jwtMiddleWare = require("../middleWare/jwtMiddleWare")
const downloadController = require('../controllers/downloadController')
const saveRecipeController = require('../controllers/saveRecipeController')
const feedbackController = require('../controllers/feedbackController')
const adminMiddleware = require("../middleWare/adminJwtMiddleware")
// --------------------------- user --------------------------------
// register 

routes.post('/register',userController.registerController)

// login 
routes.post('/login',userController.loginController)

// get all user
routes.get('/users',adminMiddleware,userController.getAllUsersController)



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

// get all downloads  - admin 

routes.get('/download',adminMiddleware,downloadController.getAllDownloadedListController)




//------------------------------- feed backs -------------------------------

// add feedback
routes.post('/user/feedback',feedbackController.addToFeedback)

// getfeedback 

routes.get('/get/feedback',feedbackController.getAllFeedbacks)

// get all feedback - admin

routes.get('/feedback',adminMiddleware,feedbackController.getAllFeedBackListController)

// updat feedback status - admin

routes.get('/feedback/:id/edit',adminMiddleware,feedbackController.updateStatusController)



module.exports = routes