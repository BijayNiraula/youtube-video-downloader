
const express=require('express');
const router=express.Router();
const auth=require("../customMiddleware/auth")
router.use(auth)
const getDetail=require('../controller/getDetail.js')
const downloadVideo=require('../controller/downloadVideo.js')
router.route('/getDetail').post(getDetail);
router.route('/downloadVideo').post(downloadVideo);


module.exports=router