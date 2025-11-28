const feedbacks = require("../models/feedbackModel");


// add to feedback

exports.addToFeedback = async(req,res)=>{
    console.log("inside addToFeedback");

    const {name,email,message}= req.body
    try {
        const newFeedbacks = new feedbacks({
            name,email,message
        })
        await newFeedbacks.save()
        res.status(200).json("thanku for your feed back!!!")
    } catch (error) {
        res.status(500).json(error)
    }
    
}

// get all feedbacks

exports.getAllFeedbacks = async(req,res)=>{
    try {
        const allFeedbacks = await feedbacks.find()
        res.status(200).json(allFeedbacks)
    } catch (error) {
        res.status(500).json(error)
    }
}