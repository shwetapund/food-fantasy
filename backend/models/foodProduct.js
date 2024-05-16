import mongoose, {model, Schema} from "mongoose";

const foodSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }

})

const foodModel = mongoose.models.food || mongoose.model('foodModel',foodSchema)

export default foodModel;