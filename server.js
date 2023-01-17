import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors"; //we use this package to send the error directly to the error handler middleware directly without try and catch and using next func

import morgan from "morgan";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import AuthenticateUser from "./middleware/auth.js";

//db
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import instructorRouter from "./routes/instructorRoutes.js";
import problemsRouter from "./routes/problemsRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import traineeRouter from "./routes/traineeRoutes.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json()); //above all routes // makes the json data available in the controllers to post funcs etc..
//json is used to represent objects in js in text format
app.get("/", (req, res) => {
  //throw new Error('error')
  res.send("Welcome!");
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/instructor", AuthenticateUser, instructorRouter);
app.use("/api/v1/problems", AuthenticateUser, problemsRouter);
app.use("/api/v1/admin", AuthenticateUser, adminRouter);
app.use("/api/v1/trainee", AuthenticateUser, traineeRouter);
app.use(notFoundMiddleware); //matches with any http requests or routes so must be last thing after all routes
app.use(errorHandlerMiddleware); //express automatically knows this is the error handler as it has 4 arguments not only 3

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
