require('dotenv').config()
const auth=(req,res,next)=>{
    if(process.env.API_KEY===req.body.API_KEY && req.get('origin')===process.env.ACCEPT_URL){
        next();
    }else{
        res.send({"error":"Suspicious request"});
    }
}

module.exports=auth