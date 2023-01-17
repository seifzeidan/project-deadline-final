import express from "express";
const router = express.Router();
import {
  AddCourse,
  GetInstructorCourses,
} from "../controllers/instructorController.js";

//import authenticateUser from "../middleware/auth.js";

router.route("/add-courses").post(AddCourse);
router.route("/instructorCourses").get(GetInstructorCourses);
//must put stats above the id as the stats string will be used as the id

export default router;
