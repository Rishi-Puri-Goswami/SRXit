import express from "express";
import { registerstudent } from "../controllers/studentcontrol.js";
const router = express.Router();



router.route("/register").post(registerstudent);


export default router;