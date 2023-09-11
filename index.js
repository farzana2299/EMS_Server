//connect env file
require('dotenv').config()
//import router
const router=require('./routes/router')
//import express
const express=require('express')
//import cors
const cors=require('cors')
//import db connection file
require('./dataBase/connections')

//server creation
const server=express()

//server use cors
server.use(cors()) //host cheyyanath kond frontend url kodkkilla
//convert json data from frontend to js
server.use(express.json())
//call router file
server.use(router)
//set port
const port=4000 || process.env.port

//export uploads folder to client
server.use('/uploads',express.static('./uploads'))

server.listen(port,()=>{
    console.log(`-------Server started at the port ${port}-------`);
})
