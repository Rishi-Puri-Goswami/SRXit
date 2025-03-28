import moo from "mongoose" //"moo" for cowsay
const studentSchema = new moo.Schema(
    {
        name:{
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
        wardenname:{
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
        timestamps: true
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