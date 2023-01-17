import { UnAuthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";
const AuthenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError(
      "Authentication Invalid Header Didn't Reach"
    );
  }
  const token = authHeader.split(" ")[1]; //returns array so index 1 is the token

  //console.log(authHeader);
  //console.log(token);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId }; //so that we can view the user id (userId) elsewhere to verify or find him
    next();
  } catch (error) {
    throw new UnAuthenticatedError(
      "Authentication invalid couldn't verify token"
    );
  }
};

export default AuthenticateUser;
