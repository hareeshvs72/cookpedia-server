const users = require("../models/userModel");
const bcrypt = require('bcrypt')
// register user

exports.registerController = async(req,res)=>{
console.log("inside Registe controller");

 const {username,email,password} = req.body
 try {
    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(409).json("user already exist")
    }
    else{
        const encryptPassword = await bcrypt.hash(password,10)
        const newuser = new users({
            username,email,password:encryptPassword,profile:""
        })
        await newuser.save()
        res.status(200).json(newuser)
    }

    
 } catch (error) {
    res.status(500).json(error)
 }

}
