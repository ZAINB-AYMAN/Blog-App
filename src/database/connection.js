import  dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()

export const databaseConntection = async ()=>{
   const url = process.env.MONGO_URI
   const conntection = await mongoose.connect(url).then(()=>{
        console.log("database conntected");
     }).catch ((err)=>{
        console.log(err);
     })
}