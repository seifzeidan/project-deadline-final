import { Landing, Register, Error, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FindCourses,
  ReportProblem,
  Profile,
  SharedLayout,
  YourCourses,
  AddNewCourse,
  InstructorCourses,
  ViewReported,
  AddNewUser,
  ViewCourse,
  Pay,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      {/*The link must be above the Routes*/}
      {/*The protectedRoute wrapper will navigate the user out of the required pages if he logs out or is no longer authenticated*/}

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          {/*nested pages layout */}
          {/*relative by default */}
          {/*we use index here so that the first page when we go to the dashboard page is this one instead of empty */}

          <Route index element={<YourCourses />} />
          <Route path="find-courses" element={<FindCourses />} />
          <Route path="report-problem" element={<ReportProblem />} />
          <Route path="profile" element={<Profile />} />
          <Route path="instructor-courses" element={<InstructorCourses />} />
          <Route path="add-course" element={<AddNewCourse />} />
          <Route path="add-new" element={<AddNewUser />} />
          <Route path="view-problems" element={<ViewReported />} />
          <Route path="view-course" element={<ViewCourse />} />
          <Route path="pay" element={<Pay />} />
        </Route>
        <Route
          path="/register"
          element={
            <div>
              <Register />"
            </div>
          }
        />
        <Route
          path="/landing"
          element={
            <div>
              <Landing />"
            </div>
          }
        />
        <Route
          path="*"
          element={
            <h1>
              <Error />
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
