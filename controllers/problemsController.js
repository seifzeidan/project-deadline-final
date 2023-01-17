import Problem from "../models/Problem.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const ReportProblem = async (req, res) => {
  const { problemType, description } = req.body;
  if (!problemType || !description) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;
  const problem = await Problem.create(req.body);
  res.status(StatusCodes.CREATED).json({ problem });
};

export { ReportProblem };
