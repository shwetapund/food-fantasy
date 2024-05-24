import foodModel from "./../models/foodProduct.js"
import fs from "fs" //using this FS file system that is pre-built in the nodejs

//add food item 
const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
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

//all food list
const listfood = async(req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods })
    }catch(error){
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//remove food item 
const removefood = async(req,res)=>{
  try{
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"remove food"})
  }
  catch(error){
    res.json({success:false,message:"Error"})
  }
    
}
export { addFood, listfood, removefood }

