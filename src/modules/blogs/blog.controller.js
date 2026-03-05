import { Router } from "express";
import { createBlog, deleteBlog, getALLBlog, getBlogById, updateBlog } from "./blog.service.js";
const router = Router()

router.post('/create-blog', async (req,res)=>{
    let blogData = await createBlog(req.body)
    res.json(blogData)
})
router.get('/get-all-blogs', async(req,res)=>{
    let blogData = await getALLBlog()
    res.json(blogData)
})
router.get('/get-blog-by-id/:id', async(req,res)=>{
    let blogData = await getBlogById(req.params.id)
    res.json(blogData)
})
router.patch('/update-blog/:id', async(req,res)=>{
    let updatedBlog = await updateBlog(req.params.id, req.body)
    res.json(updatedBlog)
})
router.delete('/delete-blog/:id', async (req,res)=>{
    let deletedBlog = await deleteBlog(req.params.id)
    res.json(deletedBlog)
})

export default router