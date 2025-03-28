import moo, { Schema } from "mongoose";

const wardenSchema = new moo.Schema ({


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

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    }
    
});


export const Warden = moo.model("Warden" , wardenSchema);

/*
name
phonenumber
your email
password
confirm password
*/