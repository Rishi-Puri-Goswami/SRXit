import express from "express";
import cors from "cors";
import dbconnect from "./db/databseConnect.js";
<<<<<<< HEAD
import dotenv from "dotenv";

dotenv.config();

=======
>>>>>>> 997844afb27e8405a7195f76e67543f18807fa25
const app = express();




dbconnect()
<<<<<<< HEAD
    .then(() => {
=======
.then(()=>{
    app.on("error : ", (error)=>{
        console.log(`server is not talking:- ${error}`);
        throw error
    })
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`⚙️ server running on port ${process.env.PORT}`, );
    })
>>>>>>> 997844afb27e8405a7195f76e67543f18807fa25

        const server = app.listen(process.env.PORT || 4000, () => {
            console.log(`⚙️ server running on port ${process.env.PORT || 4000}`);
        });

        app.on("error :", (error) => {
            console.log(`server is not talking : `, error);
            throw error;
        });



    })
    .catch((error) => {
        console.error(`Error from app.js:::-> ${error}`);
    });

app.get("/", (req, res) => {
    res.send("hello Xet");
});

