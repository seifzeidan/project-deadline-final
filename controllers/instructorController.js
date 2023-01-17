import Course from "../models/Course.js";
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const AddCourse = async (req, res) => {
  const { title, subject, subtitles, price, summary, youtubeVideoLink } =
    req.body;
  if (
    !title ||
    !subject ||
    !subtitles ||
    !price ||
    !summary ||
    !youtubeVideoLink
  ) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;
  const instructor = await User.findOne({ _id: req.user.userId });
  const instructorName = instructor.name;
  req.body.instructorName = instructorName;
  const course = await Course.create(req.body);
  res.status(StatusCodes.CREATED).json({ course });
};

const GetInstructorCourses = async (req, res) => {
  //console.log(req.user);
  const courses = await Course.find({ createdBy: req.user.userId }); //array

  res
    .status(StatusCodes.OK)
    .json({ courses, totalCourses: courses.length, numOfPages: 1 });
};

export { AddCourse, GetInstructorCourses };
