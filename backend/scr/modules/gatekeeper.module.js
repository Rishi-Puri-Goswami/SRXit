import moo, { Schema } from "mongoose";

const gateKeeperSchema = new moo.Schema ({


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


export const Gatekeeper = moo.model("Gatekeeper" , gateKeeperSchema);

/*
name
phonenumber
your email
password
confirm password
*/