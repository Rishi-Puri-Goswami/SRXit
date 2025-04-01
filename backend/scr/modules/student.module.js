import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        collageYear: {
            type: Number,
            required: true
        },
        roomNo: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        wardenname: {
            type: String,
            default: "nothing"
        },
        destination: {
            type: String,
            default: "nothing"
        },
        status: {
            type: String,
            default: "nowhere"
        },
        refreshtoken :{
            type : String

        }
    },
    {
        timestamps: true
    }
);

// Hash password before saving
studentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare passwords
studentSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//generateAccessToken
studentSchema.method.GenerateAccessToken = function (){
    jwt.sign({
        _id: this._id,
        name : this.name,
        phoneNo: this.phoneNo,
        collageYear : this.collageYear,
        roomNo : this.roomNo
    }, process.env.ACCESS_TOKEN_SECRET , process.env.ACCESS_TOKEN_EXPIRE

)
}

//GenerateRefressToken
studentSchema.method.GenerateRefressToken = function (){

    jwt.sign({
        _id: this._id
    },process.env.REFRESS_TOKEN_SECRET ,
    process.env.REFRESS_TOKEN_EXPIRE
)

}

export const Student = mongoose.model("Student", studentSchema);