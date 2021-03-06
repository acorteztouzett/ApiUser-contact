const { check } = require('express-validator')
const { uploadFile, listFiles, downloadFile } = require('../../controllers/aws')
const { validarCampo } = require('../../middlewares/validarCampo')
const router=require('express').Router()


router.get('/listfiles',listFiles)

router.get('/download/:type',[
    check('type').isIn(['ruc','dni','rtt','repre']),
    validarCampo
],downloadFile)

router.post('/upload/:type',[
    check('type').isIn(['ruc','dni','rtt','repre']),
    validarCampo
],uploadFile)


module.exports=router