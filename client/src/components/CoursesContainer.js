import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Course from "./Course";
import Wrapper from "../assets/wrappers/JobsContainer";

const CoursesContainer = () => {
  const { GetInstructorCourses, courses, isLoading, page, totalCourses } =
    useAppContext();

  //GetInstructorCourses();

  useEffect(() => {
    GetInstructorCourses();
    console.log(`courses = ${courses}`);
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (courses.length === 0) {
    return (
      <Wrapper>
        <h2> No courses to display...</h2>
      </Wrapper>
    );
  }
  //if we are not loading and we are not empty...
  return (
    <Wrapper>
      <h5>
        {totalCourses} course{courses.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {courses.map((course) => {
          return <Course key={course._id} {...course} />;
        })}
      </div>
      {/*could put pagination buttons here */}
    </Wrapper>
  );
};
export default CoursesContainer;
