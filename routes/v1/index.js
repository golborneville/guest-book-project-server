import fs from 'fs'
import path from 'path'
import express from 'express'

const router = express.Router();
const indexJs = path.basename(__filename);

const fileList= fs.readdirSync(__dirname);

const routeFileList = fileList.filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== indexJs) && (file.slice(-9) === '.route.js');
});

routeFileList.forEach(function(routeFile) {
    router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`).default);
});


//fs.readdirSync(__dirname)
//    .filter(file => (file.indexOf('.') !== 0) && (file !== indexJs) && (file.slice(-9) === '.route.js'))
//.forEach(routeFile => router.use(`/${routeFile.split('.')[0]}`, require(`./${routeFile}`).default))

export default router