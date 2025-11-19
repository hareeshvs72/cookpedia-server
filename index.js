require("dotenv").config()
const express = require("express")
const cors = require('cors')
require('./config/db')
const routes =  require("./routing/route")

const cookPediaserver = express()

// protocoll

cookPediaserver.use(cors())
cookPediaserver.use(express.json())
cookPediaserver.use(routes)

const PORT = 3000

cookPediaserver.listen(PORT,()=>{
    console.log("cookpedia server started");
    
})

cookPediaserver.get('/',(req,res)=>{
  res.status(200).send(`<h1>cook pedia server started waiting for client request</h1>`)
})