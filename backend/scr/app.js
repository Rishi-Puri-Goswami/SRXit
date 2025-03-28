import express from "express";
import cors from "cors";
import dbconnect from "./db/databseConnect.js";

const app = express();




dbconnect()
.then(()=>{
    app.on("error : ", (error)=>{
        console.log(`server is not talking:- ${error}`);
        throw error
    })
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`⚙️ server running on port ${process.env.PORT}`, );
    })
    .catch((error) => {
        console.error(`Error from app.js:::-> ${error}`);
    });
})



//import routes

import UseRoute from"./routes/studentRoutes.js"

app.get("/user" , UseRoute );

app.get("/", (req, res) => {
    res.send("hello Xet");
});

