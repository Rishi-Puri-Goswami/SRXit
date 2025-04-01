import express from "express";
import cors from "cors";
import dbconnect from "./db/databseConnect.js";
import router from "./routes/studentRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());


app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true 
}));


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


app.use("/user", router );


app.get("/", (req, res) => {
    res.send("hello Xet");
});







