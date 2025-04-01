import express from "express";
import { registerstudent } from "../controllers/studentcontrol.js";
import { loginstudent } from "../controllers/studentcontrol.js";
const router = express.Router();



router.route("/register").post(registerstudent);
router.route("/login").post(loginstudent);


export default router;