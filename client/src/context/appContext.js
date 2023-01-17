import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  //REGISTER_USER_BEGIN_ADMIN,
  REGISTER_USER_ERROR_ADMIN,
  REGISTER_USER_SUCCESS_ADMIN,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  REPORT_PROBLEM_BEGIN,
  REPORT_PROBLEM_SUCCESS,
  REPORT_PROBLEM_ERROR,
  GET_COURSES_INSTRUCTOR_BEGIN,
  GET_COURSES_INSTRUCTOR_SUCCESS,
  INC_VIEWERS_BEGIN,
  INC_VIEWERS_SUCCESS,
  CHANGE_ALERT_TEXT,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");
const type = localStorage.getItem("type");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null, //if the user exists turn it from string to object otherwise null
  token: token,
  userLocation: userLocation || "",
  type: type,
  showSidebar: false,
  //for instructor
  title: "",
  subject: "",
  subtitles: [],
  price: 0,
  summary: "",
  youtubeVideoLink: "",
  //for problems
  problemType: "technical",
  typeOptions: ["technical", "financial", "other"],
  courseName: "",
  description: "",
  aboutCourseOptions: ["true", "false"],
  answer: "false",
  //for admin creating new user
  name: "",
  email: "",
  password: "",
  userType: "corporate",
  userOptions: ["corporate", "instructor", "admin"],
  //for get courses (instruct)
  courses: [],
  totalCourses: 0,
  numOfPages: 1,
  page: 1,
  courseViews: 0,
  //
  money: user ? user.money : 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer /*function that handles dispatch*/,
    initialState
  );
  const changeAlertText = (text) => {
    dispatch({ type: CHANGE_ALERT_TEXT, payload: { text } });
    clearAlert();
  };
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT }); //Type of action must be present, and we can input other props/payload
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 4000);
  };
  const addUserToLocalStorage = ({ user, token, location, type }) => {
    localStorage.setItem("user", JSON.stringify(user)); //since the user is an object and the localStorage takes only strings
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
    localStorage.setItem("type", type);
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("location");
    localStorage.removeItem("type");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN }); //make isLoading true
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser); //??why use here response and not in the login too
      //console.log(response)
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      //local storage here for later....for storing user details if reloaded
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      //console.log(error.response)
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert(); //clear the alert after 3 secs
  };

  const registerAdmin = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN }); //make isLoading true
    try {
      await axios.post("/api/v1/admin/add-new", currentUser); //??why use here response and not in the login too
      //console.log(response)

      dispatch(
        {
          type: REGISTER_USER_SUCCESS_ADMIN,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
    } catch (error) {
      //console.log(error.response)
      dispatch({
        type: REGISTER_USER_ERROR_ADMIN,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert(); //clear the alert after 3 secs
  };

  const IncViewers = async (courseId) => {
    dispatch({ type: INC_VIEWERS_BEGIN });
    try {
      const { data } = await axios.patch(
        "/api/v1/trainee/inc-viewers",
        {
          courseId: courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );

      dispatch({
        type: INC_VIEWERS_SUCCESS,
        payload: { viewers: data.viewers },
      });
    } catch (error) {
      console.log(error.response);
      //logoutUser();
    }
    //console.log(`yes it went here `);
    clearAlert();
  };

  const GetInstructorCourses = async () => {
    dispatch({ type: GET_COURSES_INSTRUCTOR_BEGIN });
    try {
      const { data } = await axios.get("/api/v1/instructor/instructorCourses", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      const { courses, totalCourses, numOfPages } = data;
      console.log(courses);
      dispatch({
        type: GET_COURSES_INSTRUCTOR_SUCCESS,
        payload: { courses, totalCourses, numOfPages },
      });
      //return { courses, totalCourses, numOfPages };
    } catch (error) {
      console.log(error.response);
      //logoutUser();
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN }); //make isLoading true
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      //console.log(response)
      const { user, token, location, type } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location, type },
      });
      //local storage here for later....for storing user details if reloaded
      addUserToLocalStorage({ user, token, location, type });
    } catch (error) {
      //console.log(error.response)
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert(); //clear the alert after 3 secs
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const addNewCourse = async () => {
    dispatch({ type: CREATE_JOB_BEGIN });
    try {
      const { title, subject, subtitles, price, summary, youtubeVideoLink } =
        state;
      await axios.post(
        "/api/v1/instructor/add-courses",
        {
          title,
          subject,
          subtitles,
          price,
          summary,
          youtubeVideoLink,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      dispatch({ type: CREATE_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (err) {
      if (err.response.status === 401) return;
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };
  const reportProblem = async () => {
    dispatch({ type: REPORT_PROBLEM_BEGIN });
    try {
      const { problemType, courseName, description } = state;
      await axios.post(
        "/api/v1/problems/report-problem",
        {
          problemType,
          courseName,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      dispatch({ type: REPORT_PROBLEM_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (err) {
      if (err.response.status === 401) return;
      dispatch({
        type: REPORT_PROBLEM_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearValues();
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN }); //set isLoading to true
    try {
      const { data } = await axios.patch(
        "/api/v1/auth/updateUser",
        currentUser,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      // no token
      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS, //update global state and show alert success
        payload: { user, location, token },
      });

      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status === 401) {
        logoutUser();
      }
      dispatch({
        type: UPDATE_USER_ERROR, //show alert danger
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert(); //remove alert after 3 secs
  };

  return (
    //IMPORTANT!!! don't forget to add all new functions to the app context provider value
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        addNewCourse,
        reportProblem,
        registerAdmin,
        GetInstructorCourses,
        IncViewers,
        changeAlertText,
      }}
    >
      {/*objects and functions to be passed down to consuming components,,add every function you want passed down */}
      {children} {/*this is the app, so it would be re-rendered */}
    </AppContext.Provider>

    /* The Provider component accepts a value prop to be passed to consuming components
    that are descendants of this Provider. One Provider can be connected to many consumers.
    All consumers that are descendants of a Provider
    will re-render whenever the Provider’s value prop changes*/
  );
};

const useAppContext = () => {
  //the hook that can be accessed by other components to get the appContext

  return useContext(
    AppContext
  ); /*useContext returns the context value for the context you passed */
};

export { AppProvider, initialState, useAppContext };
