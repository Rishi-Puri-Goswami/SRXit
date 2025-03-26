import express from "express";
import cors from "cors";
import dbconnect from "./db/databseConnect.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();




dbconnect()
  .then(() => {
      
      const server = app.listen(process.env.PORT || 4000, () => {
        console.log(`⚙️ server running on port ${process.env.PORT || 4000}`);
      });

      app.on("error :" ,(error)=>{
console.log(`server is not talking : ` , error);
throw error ;
      });
      


  })
  .catch((error) => {
    console.error(`Error from app.js:::-> ${error}`);
  });

app.get("/", (req, res) => {
  res.send("hello Xet");
});

