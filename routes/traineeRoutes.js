import express from "express";
const router = express.Router();
import {
  IncViewers,
  registerCourseTrainee,
} from "../controllers/traineeController.js";

//import authenticateUser from "../middleware/auth.js";

router.route("/inc-viewers").patch(IncViewers);
router.route("/pay-course").post(registerCourseTrainee);
//must put stats above the id as the stats string will be used as the id

export default router;
