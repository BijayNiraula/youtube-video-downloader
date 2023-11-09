
const ytdl = require('ytdl-core');
const fs = require('fs')

const downloadVideo= async function (req, res, next) {
    try{
        let{url,itag,fileName }  = req.body;
       const info=await ytdl.getInfo(url)
       const filteredInfo= info.formats.filter(d=>{
        return d.itag==itag
    })

    res.header('Content-Disposition', `attachment; filename=downloadedVideo.mp4`);
    res.header("Content-Length",filteredInfo.contentLength)
        const videoStream = ytdl(url, {
        filter:async function (format){
          return format.itag===itag
        }
    });

    videoStream.on("error",(err)=>{
           res.send({"error":":)  Error when fetching data ? "})
    })
    videoStream.pipe(res)
    }catch(e){
        console.log(e)
        res.send({"error":"Error occured while downloading "})
    }
}

module.exports=downloadVideo