const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId
const userModel = require('../models/user')

//add
exports.add = ()=>{
    try{
        const user = new userModel(res?.body)
        await user.save()
       return res.json({
         user,
         message:'User added'
        })
     }catch(e){
         res.status(500).json({errorMsg:e.message})
     }
}
//update
exports.update = (req,res)=>{
    try{
        const user = await userModel.findByIdAndUpdate({_id:objectId(req?.query?.id)},{$set:res?.body},{$new:true})
       return res.json({
         user,
         message:'User update'
        })
     }catch(e){
         res.status(500).json({errorMsg:e.message})
     }
}
//delete
exports.delete = (req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete({_id:objectId(req?.query?.id)})
       return res.json({
         user,
         message:'User removed'
        })
     }catch(e){
         res.status(500).json({errorMsg:e.message})
     }
}
//getAll
exports.get = async(req,res)=>{
    try{
       const users = await userModel.find()
      return res.json({
        users,
        message:'Users fetched'
       })
    }catch(e){
        res.status(500).json({errorMsg:e.message})
    }
}