var mongoose=require('mongoose')

var doctorSchema=new mongoose.Schema(
    {
        did:{type:String,required:true},
        dname:{type:String,required:true},
        qualification:{type:String,required:true},
        department:{type:String,required:true},
        contactnum:{type:Number,required:true},  
    }
)
var doctorModel =mongoose.model('doctors',doctorSchema)
module.exports={doctorModel}