import express from "express";
import cors from "cors";
import dbconnect from "./db/databseConnect";
const app = express();

// app.use(cors({
//     origin: 
// }))

dbconnect()
.then(()=>{
    app.on("error : ", (error)=>{
        console.log(`server is not talking:- ${error}`);
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`⚙️ server running on port ${process.env.PORT}`, );
    })

})
.catch((error)=>{
    console.log(`Error from app.js:::-> ${error}`);
    
})

app.get("/" , (req , res ) =>{
    res.send("hello Xet");
})

app.listen(3000);