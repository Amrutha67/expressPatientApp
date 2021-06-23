var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var {patientModel}=require('../Models/patientModel')

var patientRouter=express.Router()
patientRouter.use(bodyParser.urlencoded({ extended: false }))
 patientRouter.use(bodyParser.json())
 patientRouter.get('/read',(req,res)=>{
  res.send("patient details")
})
patientRouter.get('/view',async(req,res)=>{
    try{
        var result=await patientModel.find()
        res.json(result)
    }
    catch(error){
        res.send(error)
    }
})
patientRouter.post('/patientform',(req,res)=>{ 
    var patientObject=new patientModel(req.body);
    patientObject.save()
    res.json(patientObject)
})
patientRouter.post('/search',async (req,res)=>{
    try{
        var result=await patientModel.find(req.body)
        res.json(result)
       }
    catch(error){
        res.json({"status":"error"})
    }
})
patientRouter.post('/edit',async(req,res)=>{
    try{
        var result= await patientModel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
})
patientRouter.post('/delete',async(req,res)=>{
    try{
        var result=await patientModel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
})
module.exports={patientRouter}
