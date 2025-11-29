const downloads = require("../models/downloadModel");

// add to dowload 
exports.addToDownloadController = async (req,res)=>{
    console.log("inside addToDownloadController");
    // recipe id
    const {id} = req.params
    // user mail
    const userMail = req.payload
    // recipi name cuisine image

    const {name ,cuisine,image} = req.body
    try {
        const exixstingRecipe = await downloads.findOne({recipeId:id})

        if(exixstingRecipe){
           exixstingRecipe.count+=1
           await exixstingRecipe.save()
           res.status(200).json(exixstingRecipe)
        }
        else{
            const newDownload = new downloads({
                recipeId:id,recipeName:name,recipeImage:image,recipeCuisine:cuisine,count:1,userMail
            })
            await newDownload.save()
            res.status(200).json(newDownload)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}

exports.userDownloadedListController = async (req,res)=>{
    console.log("insid userDownloadedListController");
    
  const  userMail = req.payload
  try {
    const  alluserDownloadedList = await downloads.find({userMail})
    res.status(200).json(alluserDownloadedList)
  } catch (error) {
    res.status(500).json(error)
  }
}

// get all downloaded list

exports.getAllDownloadedListController = async(req,res)=>{
 
  console.log("inside getAllDownloadedList ");


  try {
      const downloadList = await downloads.find()
      res.status(200).json(downloadList)
  } catch (error) {
    res.status(500).json(error)
  }
  

}
