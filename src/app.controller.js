import express from "express"
import { databaseConntection } from "./database/connection.js"
import userRouter from "./modules/users/user.controller.js"
import blogRouter from "./modules/blogs/blog.controller.js"

export const bootstrap = async ()=>{
    const app = express()
    app.use(express.json())
    app.use('/users', userRouter)
    app.use('/blogs', blogRouter)
    await databaseConntection()

    app.listen (3001, ()=>{
    console.log("server is running on port 3001");
    
})
}



