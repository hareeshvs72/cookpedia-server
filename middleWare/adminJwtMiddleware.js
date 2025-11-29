 const jwt = require('jsonwebtoken')

const adminMiddleware = (req,res,next)=>{
    console.log("jwt mIddleWare");
    const token = req.headers['authorization'].split(" ")[1]
    if(token){
        try {
            const jwtResponse = jwt.verify(token,process.env.JWTSECRET)
            req.role = jwtResponse.role
            req.payload = jwtResponse.email
            jwtResponse.role == 'admin' ? next() : res.status(401).json("Authorization failed...  !!!")
        } catch (error) {
            res.status(500).json(error)
        }

    }else{
        res.status(404).json("Authorization failed... Token Missing !!!")
    }
}

module.exports = adminMiddleware