// const mongoose=require('mongoose')

// mongoose.connect(process.env.baseurl,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true 
// }).then(()=>{
//     console.log("-------------MongoDB Atlas Connected---------");
// }).catch(()=>{
//     console.log(`----------Mongodb Connection Error------${err}`);
// })

const mongoose=require('mongoose')

mongoose.connect(process.env.baseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("________Mongodb Atlas Connected_________");
}).catch((err)=>{
    console.log(`........mogodb connection error.........${err}`);
})