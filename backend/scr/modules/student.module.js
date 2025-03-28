import moo from "mongoose"
const studentSchema = moo.Schema(
    {
        Name:{
            type: String,
            required: true
        },
        phoneNo:{
            type: String,
            required: true,
            unique: true,
            index: true
        },
        collageYear:{
            type: Number,
            required: true
        },
        roomNo:{
            type: Number,
            required: true
        },
        parentNo:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        wardenName:{
            type: String, default: "nothing"
        },
        destination:{
            type: String, default: "nothing"
        },
        status:{
            type: String, default: "nowhere"
        },
        // role:{
        //     type: String, enum: ["student", "warden", "gatekeeper"],
        //     required: true
        // },
    },
    {
        timestanps: true
    })

export const Student = moo.model("Student", studentSchema)

/*
name
phonenumber
collage year
room number
parentsNo
your email
password
confirm password
*/