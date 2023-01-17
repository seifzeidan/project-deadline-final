import { StatusCodes } from "http-status-codes";
import problem from "../models/Problem.js";
import CourseRequest from "../models/CourseRequest.js";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import { register } from "./authController.js";

const addUser = async (req, res) => {
  req.body.admin = true;
  register(req, res);
};
const markProblem = async (req, res) => {
  const { markAs } = req.body;
  if (!markAs) {
    throw new Error("server error"); //check error type
  }
};
export { addUser };
