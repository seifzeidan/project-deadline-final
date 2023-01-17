import { StatusCodes } from "http-status-codes";

//takes 4 inputs and first is the error(express knows it's used for errors)
//if the error has a message go with it otherwise use generic ''
//err.keyValue object has the name of the fields that has this error
//object.values() takes input an object and returns an array with its properties
//err.errors gets the missing objects for ex. name , email
//.map()...creates a new array from calling a function for every array element.
//array.map(function(currentValue, index, arr), thisValue)//index,arr,thisValue are optional
//The Object.keys() method returns an array of a given object's own enumerable string-keyed property names.

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    // defaultError.msg = err.message
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
