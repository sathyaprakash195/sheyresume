const mongoose = require('mongoose')

const URL = 'mongodb+srv://sathya:sathyapr@cluster0.wrqpt.mongodb.net/shey-resume'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

