import mongoose from "mongoose";

export const databaseConntection = async ()=>{
   const conntection = await mongoose.connect('mongodb://localhost:27017/blogApp').then(()=>{
        console.log("database conntected");
     }).catch ((err)=>{
        console.log(err);
     })
}