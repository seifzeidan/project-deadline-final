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

import { initialState } from "./appContext";

const reducer = (state, action) => {
  //function that handles dispatch
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "please provide all values!",
    };
  }
  if (action.type === CHANGE_ALERT_TEXT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.text,
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }
  ///////////
  if (action.type === INC_VIEWERS_BEGIN) {
    return { ...state };
  }
  if (action.type === INC_VIEWERS_SUCCESS) {
    return {
      ...state,
      courseViews: action.payload.viewers,
    };
  }
  //////////////////////////
  if (action.type === REGISTER_USER_SUCCESS_ADMIN) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User/Admin Created Successfully!",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === REGISTER_USER_ERROR_ADMIN) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_COURSES_INSTRUCTOR_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_COURSES_INSTRUCTOR_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      courses: action.payload.courses,
      totalCourses: action.payload.totalCourses,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "Logged In Successfully! Redirecting...",
      money: action.payload.user.money,
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      showSidebar: !state.showSidebar,
      user: null,
      token: null,
      userLocation: "",
    };
  }

  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REPORT_PROBLEM_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Course Added!",
    };
  }
  if (action.type === REPORT_PROBLEM_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Problem Reported Successfully!",
    };
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === REPORT_PROBLEM_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,

      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      //for instructor
      title: "",
      subject: "",
      subtitles: [],
      price: 0,
      summary: "",
      youtubeVideoLink: "",
      //for problem
      problemType: "technical",
      courseName: "",
      description: "",
      answer: "false",
      //for admin
      name: "",
      email: "",
      password: "",
      userType: "corporate",
    };
    return {
      ...state,
      ...initialState,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
