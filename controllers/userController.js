const users = require("../models/userModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// register user

exports.registerController = async (req, res) => {
    console.log("inside Registe controller");

    const { username, email, password } = req.body
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(409).json("user already exist")
        }
        else {
            const encryptPassword = await bcrypt.hash(password, 10)
            const newuser = new users({
                username, email, password: encryptPassword, profile: ""
            })
            await newuser.save()
            res.status(200).json(newuser)
        }


    } catch (error) {
        res.status(500).json(error)
    }

}

// login user

exports.loginController = async (req, res) => {
    console.log("inside login controller");
    const { email, password } = req.body

    try {
        const existingUser = await users.findOne({ email })

        if (existingUser) {
            let isUserLoggedIn = existingUser.role == "user" ? await bcrypt.compare(password, existingUser.password) : password == existingUser.password
            // console.log(isUserLoggedIn);

            if (isUserLoggedIn) {
                const token = jwt.sign({ email, role: existingUser.role }, process.env.JWTSECRET)
                res.status(200).json({ user: existingUser, token })

            } else {
                res.status(401).json("invalid username or password")
            }
        }
        else {
            res.status(404).json("Invali Email Please Reigter To access our app")
        }


    } catch (error) {
        res.status(500).json(error)
    }


}

// update user 

exports.updateUSerController = async (req, res) => {
    console.log("inside updateUSerController ");

    const { username, password, profile } = req.body
    const { id } = req.params

    try {
        const existingUser = await users.findById({ _id: id })
        existingUser.username = username
        existingUser.profile = profile
        if(password != ""){
         const encryptPassword =  await bcrypt.hash(password, 10)
        existingUser.password = encryptPassword
        }
        
        await existingUser.save()
        res.status(200).json(existingUser)

    } catch (error) {
        res.status(500).json(error)
    }

}

// get all user

exports.getAllUsersController = async (req,res)=>{
    console.log("inside getAllUsersController");
    try { 
        const allUser = await users.find({role:{$ne:"admin"}})
        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json(error)
    }
    
}