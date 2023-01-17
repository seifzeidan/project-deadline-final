//where login/register/update user functionalities
//we use the async as we are communicating with the db
//we use a package(express async errors) that handles the try and catch error
//we use the status codes package so that its easier to write the error status codes for http
import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password, type } = req.body;
  if (!name || !email || !password || !type) {
    throw new BadRequestError("please provide all values"); //the new error() constructor in js can take as input a message that can be accessed by err.message
  }

  //another way
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use!,login?");
  }

  const user = await User.create({ name, email, password, type });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      //we do this so we don't return the password to the frontend as select prop doesn't work with .create()
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
      type: user.type,
      money: user.money,
    },
    token,
    location: user.location,
  }); //returns the token object with the user object to the frontend
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }); //.select('+password')//doesn't get the password because of the select:false
  //so we put the select override
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  //console.log(user);
  const isPasswordCorrect = user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined; //so it's not sent to the frontend "security"
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
  //res.send('login user')
};

/*Update Later!!!!!!! */
const updateUser = async (req, res) => {
  const { name, lastName, location, email, miniBio } = req.body;
  if (!email || !name || !lastName || !location || !miniBio) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;
  user.miniBio = miniBio;

  await user.save();
  //so new expiration time..not really Needed... DO IT if you are going to update a value in the token payload
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

export { register, login, updateUser };
