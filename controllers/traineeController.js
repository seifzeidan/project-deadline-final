import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import Course from "../models/Course.js";

const IncViewers = async (req, res) => {
  //console.log(req.user);
  let alreadyViewed = false;

  //const user = await User.findOne({ _id: req.user.userId });
  const courseBeforeUpdate = await Course.findOne({ _id: req.body.courseId });

  if (!courseBeforeUpdate) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Course not found" });
  }

  courseBeforeUpdate.viewersArray.map((id) => {
    if (req.user.userId === id) {
      return (alreadyViewed = true);
    }
  });
  if (!alreadyViewed) {
    const course = await Course.findOneAndUpdate(
      { _id: req.body.courseId },
      { $inc: { viewers: 1 }, $push: { viewersArray: req.user.userId } },
      { upsert: true, new: true }
    );
    res.status(StatusCodes.OK).json({ viewers: course.viewers });
  } else {
    res.status(StatusCodes.OK).json({ viewers: courseBeforeUpdate.viewers });
  }
};

const registerCourseTrainee = async (req, res) => {
  const course = await Course.findOne({ _id: req.body.courseId });
  const user = await User.findOne({ _id: req.user.userId });
  let registeredFlag = false;
  //const course

  for (let i = 0; i < user.enrolledCourses.length; i++) {
    let id = user.enrolledCourses[i];
    //console.log(id);
    //console.log(req.body.courseId);
    if (req.body.courseId === id) {
      registeredFlag = true;
    }
  }

  if (!registeredFlag) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user.userId },
      { $push: { enrolledCourses: req.body.courseId } },
      { upsert: true, new: true }
    );

    const instructor = await User.findOneAndUpdate(
      { _id: course.createdBy._id },
      { $inc: { money: course.price * 0.95 } },
      { upsert: true, new: true }
    );

    res
      .status(StatusCodes.OK)
      .json({
        user: updatedUser,
        AlreadyRegistered: false,
        instructor: instructor,
      });
  } else {
    res.status(StatusCodes.OK).json({ AlreadyRegistered: true, user: user });
  }
};

export { IncViewers, registerCourseTrainee };
