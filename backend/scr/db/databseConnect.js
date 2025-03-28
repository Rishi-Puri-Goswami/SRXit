import mongoose from "mongoose"
import dotenv , {config} from "dotenv"
dotenv.config({
    path:'./.env'
})
const dbname = "srxit"
const dbconnect = async ()=>{
    try {
        const connectdb = await mongoose.connect(`${process.env.MONGODB_URI}/${dbname}`)
        console.log(`MongoDB connectedsuccesfully:-  ${connectdb.connection.host}`);
    } catch (error) {
        console.log(`Error is:::-> ` ,error);
        process.exit(1)
    }
}

export default dbconnect