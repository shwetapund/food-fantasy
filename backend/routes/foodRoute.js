import express from "express";
import { addFood } from "../controller/foodController";
import multer from "multer"; //using that we will create the image storage system

const foodRouter = express.Router(); //using this router we can create the get method post method and other many

//image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`$${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",addFood) //use the post method to send the data on the server




export default foodRouter;

