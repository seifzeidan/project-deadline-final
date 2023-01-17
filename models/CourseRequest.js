import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema(
  {
    seen: {
      type: Boolean,
      default: false,
    },
    courseName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    status: {
      type: String,
      enum: ["Granted", "Pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Problem", ProblemSchema); //create the users collection in mongodb
