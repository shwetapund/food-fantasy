import express from "express"
import cors from "cors"



//app connfig
const app = express();
const PORT = 4000

//middleware
app.use(express.json()); //using this middleawre whenver we will get the request from the frontend to backend that will be passed using this json
app.use(cors()) //using this we can access the backend  from any frontend 

app.get("/", (req,res)=>{
    res.send("all Good")
}) //get method is a http method using that we can request the data from the server

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})


