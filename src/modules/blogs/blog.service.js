import { blogModel } from "../../database/model/blog.model.js";

export const createBlog = async (data)=>{
    let {title, content, userId} = data
    let createdBlog = await blogModel.insertOne({title, content, userId})
    if(createdBlog){
        return {mesaage: "blog created successfully", data}
    }else{
        return {message: "failed to create new blog"}
    }
}
export const getALLBlog = async ()=>{
    let blogData = await blogModel.find().populate('userId',{
        phone: 0,
        isDelete: 0
    })
    if(blogData.length > 0){
        return {message: "blog found", blogData}
    }else{
        return {message: "blog not found"}
    }
}
export const getBlogById = async (id)=>{
    let blogData = await blogModel.findById(id).populate('userId')
    if (blogData) {
        return {message: "blog found", blogData}
    }else{
        return {message: "blog not found"}
    }
}
export const updateBlog = async (id, data)=>{
    let {title , content} = data
    let blogData = await blogModel.findByIdAndUpdate(id, {title,content}, {new: true})
    if(blogData) {
        return {message: "blog updated successfully", blogData}
    }else{
        return {message: "blog not found"}
    }
}
export const deleteBlog = async (id)=>{
    let blogData = await blogModel.findByIdAndDelete(id)
    if(blogData){
        return {message: "blog deleted successfully"}
    }else{
        return {message: "blog not found"}
    }
}