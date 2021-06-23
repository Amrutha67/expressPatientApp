var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
const { doctorModel } = require('../Models/doctorModel')

var doctorRouter=express.Router()

doctorRouter.use(bodyParser.urlencoded({ extended: false }))
doctorRouter.use(bodyParser.json())

doctorRouter.get('/read',(req,res)=>{
    res.send("Doctor details")
})
doctorRouter.get('/view',async(req,res)=>{
    try{
        var result=await doctorModel.find()
        res.json(result)
    }
    catch(error){
        res.send(error)
    }
})
doctorRouter.post('/doctorform',(req,res)=>{
    var doctorObject=new doctorModel(req.body);
    doctorObject.save()
  res.json(doctorObject)
})
doctorRouter.post('/search',async (req,res)=>{
    try{
        var result=await doctorModel.find(req.body)
        res.json(result)
       }
    catch(error){
        res.json({"status":"error"})
    }
})
doctorRouter.post('/edit',async(req,res)=>{
    try{
        var result= await doctorModel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
})
doctorRouter.post('/delete',async(req,res)=>{
    try{
        var result=await doctorModel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
})
module.exports={doctorRouter}