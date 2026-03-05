import { Router } from "express";
import { userModel } from "../../database/model/user.model.js";
import { deleteUser, disableUser, enableUser, getAllUsers, getUserById, signup, updateUser } from "./user.service.js";
const router = Router()

router.post('/signup', async (req, res)=>{
    let userData = await signup(req.body)
    res.json(userData)
})
router.get('/get-users', async (req,res)=>{
    let usersData = await getAllUsers()
    res.json(usersData)
})
router.get('/get-user-by-id/:id', async (req,res)=>{
    let userData = await getUserById(req.params.id)
    res.json(userData)
})
router.patch('/update-user/:id', async(req,res)=>{
    let updatedUser = await updateUser(req.params.id, req.body)
    res.json(updatedUser)
})
router.delete('/delete-user/:id', async(req,res)=>{
    let deletedUser = await deleteUser(req.params.id)
    res.json(deletedUser)
})

router.patch('/disable-user/:id', async(req,res)=>{
    let disabledUser = await disableUser(req.params.id)
    res.json(disabledUser)
})
router.patch('/enable-user/:id', async(req,res)=>{
    let enabledUser = await enableUser(req.params.id)
    res.json(enabledUser)
})

export default router