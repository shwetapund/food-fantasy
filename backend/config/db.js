import mongoose, { connect, mongo } from "mongoose"
import dotenv from "dotenv"
dotenv.config();

export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGODB_URL).then(()=>
    console.log("mongoDB is connected"));
    
}
