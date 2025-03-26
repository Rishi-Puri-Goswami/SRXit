import express, { response } from "express"

const app = express()

app.get("/", (req, res)=>{
    res.send("SRXit backend is live")
})

app.listen(3000)