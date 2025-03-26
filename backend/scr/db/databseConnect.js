import mongoose from "mongoose"
const dbname = "srxit"

const dbconnect = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${dbname}`)
        console.log(`MongoDB connectedsuccesfully:-  ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error is:::-> ` ,error);
        process.exit(1)
    }
}

export default dbconnect