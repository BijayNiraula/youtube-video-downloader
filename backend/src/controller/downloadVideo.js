
const ytdl = require('ytdl-core');
const fs = require('fs')

const downloadVideo= async function (req, res, next) {
    try{
        let{url,itag,fname }  = req.body;
    res.header("Content-Disposition", `attachment; filename="DownloadedVideo.mp4`);

        const video = ytdl(url, {
        filter:async function (format){
          return format.itag===itag
        }
    });
    video.on("error",(err)=>{
           res.send({"error":":)  Error when fetching data ? "})
    })
           video.pipe(res)
    }catch(e){
        res.send({"error":"Error occured while downloading "})
    }
}

module.exports=downloadVideo