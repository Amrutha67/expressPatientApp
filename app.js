var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')

var {patientModel}=require('./Models/patientModel')
var {doctorModel}=require('./Models/doctorModel')

var {patientRouter}=require('./controllers/patientController')
var {doctorRouter}=require('./controllers/doctorController')

mongoose.connect("mongodb+srv://amru78:@amru@cluster0.1mnsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/patient',patientRouter)
app.use('/doctor',doctorRouter)

app.listen( process.env.PORT|| 3000,()=>{
    console.log("running")
})

