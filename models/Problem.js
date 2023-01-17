import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema(
  {
    problemType: {
      type: String,
      enum: ["technical", "financial", "other"],
      default: "technical",
      required: [true, "Please provide Problem Type"],
    },
    seen: {
      type: Boolean,
      required: false,
      default: false,
    },
    courseName: {
      type: String,
      required: false,
      default: "",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },

    description: {
      type: String,
      required: [true, "Please provide The Problem Description"],
      maxlength: 600,
    },
    status: {
      type: String,
      enum: ["Resolved", "Pending"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Problem", ProblemSchema); //create the users collection in mongodb
