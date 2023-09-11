// // //import multer
// // const multer=require('multer')
// // // const router = require('../routes/router')
// // //set storage
// // const storage=multer.diskStorage({
// //     destination:(req,file,callback)=>{
// //         callback(null,'./uploads')
// //     },
// //     filename:(req,file,callback)=>{
// //         callback(null,`image-${Date.now()}-${file.originalname}`)
// //     }
// // })
// // //file filtering
// // const fileFilter=(req,file,callback)=>{
// //     if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
// //         callback(null,true)
// //     }
// //     else{
// //         callback(null,false)
// //         return callback(new Error('Only accepts png/jpg/jpeg format files'))
// //     }
// // }

// // //.upload
// // const upload=multer({storage,fileFilter})

// // module.exports=upload
// // import multer
// const multer=require('multer')
// // set storage
// const storage=multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./uploads')
//     },
//     filename:(req,file,callback)=>{
//         callback(null,`image-${Date.now()}-${file.originalname}`)
//     }
// })
// // file filtering
// const fileFilter=(req,file,callback)=>{
//     if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
//         callback(null,true)
//     }
//     else{
//         callback(null,false)
//         return callback(new Error('only accepts png/jpg/jpeg format files'))
//     }
// }
// // upload
// const upload=multer({storage,fileFilter})

// module.exports=upload
// import multer
const multer=require('multer')
// set storage
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})
// file filtering
const fileFilter=(req,file,callback)=>{
    if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error('only accepts png/jpg/jpeg format files'))
    }
}
// upload
const upload=multer({storage,fileFilter})

module.exports=upload



