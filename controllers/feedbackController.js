const feedbacks = require("../models/feedbackModel");


// add to feedback

exports.addToFeedback = async (req, res) => {
    console.log("inside addToFeedback");

    const { name, email, message } = req.body
    try {
        const newFeedbacks = new feedbacks({
            name, email, message
        })
        await newFeedbacks.save()
        res.status(200).json("thanku for your feed back!!!")
    } catch (error) {
        res.status(500).json(error)
    }

}

// get all feedbacks - home user

exports.getAllFeedbacks = async (req, res) => {
    try {
        const allFeedbacks = await feedbacks.find({ status: { $eq: "approve" } })
        res.status(200).json(allFeedbacks)
    } catch (error) {
        res.status(500).json(error)
    }
}

// get feed back

exports.getAllFeedBackListController = async (req, res) => {

    console.log("inside getAllFeedBackListController ");


    try {
        const feedbackList = await feedbacks.find()
        res.status(200).json(feedbackList)
    } catch (error) {
        res.status(500).json(error)
    }


}

// update status 

exports.updateStatusController = async (req, res) => {
    console.log("inside updateStatusController");
    try {
        const { id } = req.params
        const status = req.query.status
        const existingFeedback = await feedbacks.findById({ _id: id })
        existingFeedback.status = status
        await existingFeedback.save()
        res.status(200).json(existingFeedback)

    } catch (error) {
        res.status(500).json(error)
    }
}