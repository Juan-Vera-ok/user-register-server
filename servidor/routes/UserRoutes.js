import express from "express";
import { addUser,getUsers } from "../controllers/UserControllers.js";
const router = express.Router();

router.post("/add-user",addUser)
router.get("/get-users",getUsers)
export default router