import express from "express";
//import { addUser } from "../controllers/adminController.js";
import { register } from "../controllers/authController.js";
const router = express.Router();

router.route("/add-new").post(register);

export default router;
