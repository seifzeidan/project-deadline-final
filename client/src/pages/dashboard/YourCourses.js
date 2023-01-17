import { useAppContext } from "../../context/appContext";
import InstructorCourses from "./InstructorCourses";
import ViewReported from "./ViewReported";

const YourCourses = () => {
  const { user } = useAppContext();
  if (user.type === "admin") {
    return <ViewReported />;
  } else if (user.type === "instructor") {
    return <InstructorCourses />;
  } else {
    return <h2>Your Courses Page</h2>;
  }
  // return <h2>Your Courses Page</h2>;
};
export default YourCourses;
