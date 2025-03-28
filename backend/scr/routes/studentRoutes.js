import express from "express";
import { registerstudent } from "../controllers/studentcontrol.js";

const router = express.Router();

router.route("/register").get(registerstudent);


export default router;