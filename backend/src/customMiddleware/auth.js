require('dotenv').config()
const auth=(req,res,next)=>{
    console.log(req.body)
    console.log(req.get('origin'))
    if(process.env.KEY===req.body.auth && req.get('origin')===process.env.ACCEPT_URL){
        next();
    }else{
        res.send({"error":"Suspicious request"});
    }
}

module.exports=auth