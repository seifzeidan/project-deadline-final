import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail, //don't invoke the func. here
      message: "please provide a valid email",
    },
    unique: true, //doesn't validate
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    maxlength: 20,
    //select : false, // but it doesn't work with the create() func
    //remove for testing purposes
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "lastName",
  },
  location: {
    type: String,
    maxlength: 20,
    default: "my city",
  },
  miniBio: {
    type: String,
    required: false,
    default: "this is my bio",
  },
  type: {
    type: String,
    required: [true, "Please provide Account Type"],
  },
  enrolledCourses: {
    type: [String],
    required: false,
    //default: ["1"],
  },
  money: {
    type: Number,
    required: false,
    default: 0,
  },
});

UserSchema.methods.createJWT = function () {
  //jwt.sign(payload,secret to sign the token,options)
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = function (candidatePassword) {
  // console.log(
  //   `candidatePassword = ${candidatePassword} && user.password = ${this.password}`
  // );
  //return true;
  if (candidatePassword === this.password) {
    return true;
  } else {
    return false;
  }
};

export default mongoose.model("User", UserSchema); //create the users collection in mongodb
