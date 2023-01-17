import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide The Course Name"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    instructorName: {
      type: String,
      required: false,
      default: "N/A",
    },

    subject: {
      type: String,
      required: [true, "Please provide The Course Subject"],
    },
    subtitles: {
      type: [String],
      required: [true, "Please provide Minimum 1 subtitle per course"],
    },
    price: {
      type: Number,
      required: [true, "Please provide the course price"],
    },
    rating: {
      type: [String],
      required: false,
    },
    reviews: {
      type: [String],
      required: false,
    },
    summary: {
      type: String,
      required: true,
      default: "",
    },
    promotionInPercent: {
      type: Number,
      required: false,
      default: 0,
    },
    viewers: {
      type: Number,
      required: false,
      default: 0,
    },
    viewersArray: {
      type: [String],
      required: false,
      //default: ["1"],
    },
    youtubeVideoLink: {
      type: String,
      required: true,
    },
    totalHours: {
      type: Number,
      required: false,
      default: 22,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Courses", CourseSchema); //create the users collection in mongodb
