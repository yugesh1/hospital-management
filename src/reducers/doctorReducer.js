import {
  GET_DOCTOR_FAIL,
  GET_DOCTOR_REQUEST,
  GET_DOCTOR_SUCCESS,
  CLEAR_ERRORS,
  GET_ALL_DOCTORS_REQUEST,
  GET_ALL_DOCTORS_SUCCESS,
  GET_ALL_DOCTORS_FAIL,
  UPDATE_DOCTORS_REQUEST,
  UPDATE_DOCTORS_SUCCESS,
  UPDATE_DOCTORS_FAIL,
} from "../constants/doctorConstants";

export const doctorReducer = (state = { doctor: {} }, action) => {
  switch (action.type) {
    case GET_DOCTOR_REQUEST:
      return {
        loading: true,
        searchCompleted: false,
      };
    case GET_ALL_DOCTORS_REQUEST:
      return {
        loading: true,
        searchCompleted: false,
      };
    case GET_ALL_DOCTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchCompleted: true,
        allDoctors: action.payload,
      };
    case GET_ALL_DOCTORS_FAIL:
      return {
        ...state,
        loading: false,
        searchCompleted: false,
        allDoctors: null,
        error: action.payload,
      };
    case GET_DOCTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        searchCompleted: true,
        doctor: action.payload,
      };
    case GET_DOCTOR_FAIL:
      return {
        ...state,
        loading: false,
        searchCompleted: false,
        doctor: null,
        error: action.payload,
      };
    case UPDATE_DOCTORS_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case UPDATE_DOCTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        Doctor: action.payload,
      };
    case UPDATE_DOCTORS_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        doctor: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
