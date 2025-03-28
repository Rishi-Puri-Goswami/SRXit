import { Router, Router } from "express";
import { registerstudent } from "../../controller/studentcontrol.js";

const router = Router();

router.route("/register").post(registerstudent);

export default router ; 