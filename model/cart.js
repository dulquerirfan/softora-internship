const mongoose=require('mongoose');
const { ObjectId }= mongoose.Schema;
const cartSchema=new mongoose.schema({
     item:{
         type:ObjectId,
         ref:"dishes"
     },
     quantity:{
         type:Number
     },
     price:{
         type:Number
     }
})
module.exports=cart=mongoose.model('mycart',cartSchema);