import express from "express";
import cors from "cors";
import dbconnect from "./db/databseConnect.js";
import UseRoute from "./routes/studentRoutes.js";

const app = express();
app.use(cors())

dbconnect()
    .then(() => {
        app.on("error", (error) => {
            console.log(`Server is not talking: ${error}`);
            throw error;
        });

        app.listen(process.env.PORT || 4000, () => {
            console.log(`⚙️ Server running on port ${process.env.PORT || 4000}`);
        });
    })
    .catch((error) => {
        console.error(`Error from app.js:::-> ${error}`);
    });


app.use("/user", UseRoute );


app.get("/", (req, res) => {
    res.send("hello Xet");
});

