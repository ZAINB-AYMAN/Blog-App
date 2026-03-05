import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true
    },
     phone: {
        type: String,
        required: true
    },
     isDelete : {
        type: Boolean,
        default: false
    }
})


export const userModel = mongoose.model('user', userSchema)