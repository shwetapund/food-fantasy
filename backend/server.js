import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


//app connfig
const app = express();
const PORT = 4000

//middleware
app.use(express.json()); //using this middleawre whenver we will get the request from the frontend to backend that will be passed using this json
app.use(cors()) //using this we can access the backend  from any frontend 

//db conection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))


app.get("/", (req,res)=>{
    res.send("all Good")
}) //get method is a http method using that we can request the data from the server

app.listen(PORT, ()=>{ 
    console.log(`server is running on http://localhost:${PORT}`);
})//()=>{} we have to pass on e callback function 


