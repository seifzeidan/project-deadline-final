import Problem from "../models/Problem.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createProblem = async (req, res) => {
  const { type, description, courseName } = req.body;
  if (!type || !description) {
    throw new BadRequestError("Please Provide All Values");
  }
  //the user comes from the authenticate user middleware as it attaches the userId to the req body
  req.body.createdBy = req.user.userId;
  const problem = await Problem.create(req.body);
  res.status(StatusCodes.CREATED).json({ problem });
};
export { createProblem };
