import { Router } from "express";
import { registerstudent } from "../controllers/studentcontrol.js";

const router = Router();

router.route("/register").post(registerstudent);

export default router ; 