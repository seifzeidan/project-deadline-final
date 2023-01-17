import { useAppContext } from "../../context/appContext";

const ViewCourse = () => {
  const { courseViews } = useAppContext();
  return <h2>the course has been viewed : {courseViews} times </h2>;
};
export default ViewCourse;
