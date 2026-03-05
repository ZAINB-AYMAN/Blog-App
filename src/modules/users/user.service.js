import { userModel } from "../../database/model/user.model.js"



export const signup = async (data)=>{
    let {name, email, phone} = data
    const addedUser = await userModel.insertOne({name, email, phone})

    if(addedUser){
        return {message: "user added"}
    }else{
        return {message: "failed to add user"}
    }
}
export const getAllUsers = async ()=>{
    let data = await userModel.find()
    if(data.length > 0){
        return {message: "users found", data}
    }else{
        return {message: "users not found"}
    }
}
export const getUserById = async (id)=>{
    let userData = await userModel.findById(id)
    if(userData){
        return {message: "user found", userData}
    }else{
        return{message: "user not found"}
    }
}
export const updateUser = async (id, data)=>{
    let {name, email} = data
    let updatedUser = await userModel.findByIdAndUpdate(id, {name,email},{new:true})
    if(updatedUser){
        return{message: "user updated", updatedUser}
    }else{
        return {message: "failed to update"}
    }    
}
export const deleteUser = async (id)=>{
    let deletedUser = await userModel.findByIdAndDelete(id)
    if (deletedUser){
        return {message: "user is deleted"}
    }else{
        return {message: "user not found"}
    }
}
export const disableUser = async (id)=>{
    let disable = await userModel.findByIdAndUpdate(id , {isDelete: true}, {new: true})
    if(disable){
        return {message: "user disabled"}
    }else {
        return {message: "user not found"}
    }
}
export const enableUser = async (id)=>{
    let enable = await userModel.findByIdAndUpdate(id , {isDelete: false}, {new: true})
    if(enable){
        return {message: "user enabled"}
    }else {
        return {message: "user not found"}
    }
}