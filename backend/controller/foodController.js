import foodModel from "./../models/foodProduct.js"
import fs from "fs" //using this FS file system that is pre-built in the nodejs

//add food item 

const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.file,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"food added"})
    } catch(error){
        console.log(error)
        res.json({
            success:false,
            message:"Error"
        })
    }
}
export { addFood }

