const mongoose=require('mongoose');
const schema=mongoose.Schema;
const dishSchema= new schema(
{
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    image:{
        type:String
    }
}
)
module.exports=dish=mongoose.model("dishes",dishSchema);