const mongoose =  require("mongoose")
const connectionString = process.env.DBCONNECTION
mongoose.connect(connectionString).then(res=>{
    console.log("db connected sucessfully");
    
}).catch(err=>{
    console.log("db connection failed");
    
    console.log(err);
    
})