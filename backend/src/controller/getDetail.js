const ytdl = require('ytdl-core');
const fs = require('fs')
 
 const getDetail= async(req,res,next)=>{
    try{

        let {url } = req.body
    
        let info = await ytdl.getInfo(url);
       
        const option= info.formats.filter(d=>{
            return d.hasAudio==true&& d.hasVideo==true
        })
        const dataObj={
            "title":info.videoDetails.title,
            "thumbnail":info.videoDetails.thumbnails[1].url ,
           "quality":[],
           "url":url
        }
         for(let i=0;i<option.length;i++){
            dataObj.quality[i]={ quality: option[i].qualityLabel,itag:option[i].itag}
         }
        res.send(dataObj)
    }
   catch(e){
    res.send({"error":" :)  Error when Fetching Video ?"})
   }

}
module.exports= getDetail
