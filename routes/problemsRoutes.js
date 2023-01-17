import express from "express";
const router = express.Router();
import { ReportProblem } from "../controllers/problemsController.js";

//import authenticateUser from "../middleware/auth.js";

router.route("/report-problem").post(ReportProblem);
//must put stats above the id as the stats string will be used as the id

export default router;
