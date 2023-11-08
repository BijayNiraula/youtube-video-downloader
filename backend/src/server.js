const express = require('express');
const bodyParser=require('body-parser')
const app = express();
const cors=require('cors')
const path=require('path');
const rateLimit=require('express-rate-limit');
const requestIp=require('request-ip')
const downloadVideoRoutes=require('./routes/downloadVideo')

 const PORT=2000 || process.env.PORT

 app.use(requestIp.mw())

app.use(rateLimit({
    windowMs:600000,
    max:1000,
    message:{statusCode:200,
        error:"too many request"},
   
    keyGenerator:(req,res)=>{
        return req.clientIp
    },
 
}))

app.use(express.json())

app.use(cors({
    methods:['POST' , "GET"],
    origin:process.env.ACCEPT_URL
}))


app.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));

app.use('/api/',downloadVideoRoutes);

app.listen(PORT, () => {
    console.log('app listingin on '+ PORT)
})