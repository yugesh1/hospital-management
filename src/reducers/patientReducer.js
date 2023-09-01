import { GET_DOCTOR_SUCCESS } from "../constants/doctorConstants";
import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAIL,
  CLEAR_ERRORS,
  GET_PATIENTS_REQUEST,
  GET_PATIENTS_FAIL,
  GET_PATIENTS_SUCCESS,
  GET_ALL_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_SUCCESS,
  GET_ALL_PATIENTS_FAIL,
  UPDATE_PATIENTS_REQUEST,
  UPDATE_PATIENTS_SUCCESS,
  UPDATE_PATIENTS_FAIL,
} from "../constants/patientConstants";

export const createPatientReducer = (state = { patient: {} }, action) => {
  switch (action.type) {
    case CREATE_PATIENT_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case UPDATE_PATIENTS_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case CREATE_PATIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        patient: action.payload,
      };
    case UPDATE_PATIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        patient: action.payload,
      };
    case CREATE_PATIENT_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        patient: null,
        error: action.payload,
      };
    case UPDATE_PATIENTS_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        patient: null,
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

export const patientReducer = (state = { patient: {} }, action) => {
  switch (action.type) {
    case GET_PATIENTS_REQUEST:
      return {
        ...state,
        loading: true,
        // searchCompleted: false,
      };
    case GET_ALL_PATIENTS_REQUEST:
      return {
        ...state,
        patient: null,
        loading: true,
      };
    case GET_PATIENTS_SUCCESS:
      console.log(state, action);
      return {
        ...state,
        loading: false,
        // searchCompleted: true,
        onePatient: action.payload,
      };
    case GET_ALL_PATIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        patient: action.payload,
      };
    case GET_PATIENTS_FAIL:
      return {
        ...state,
        loading: false,
        // searchCompleted: false,
        onePatient: null, //patient by id
        error: action.payload,
      };
    case GET_ALL_PATIENTS_FAIL:
      return {
        ...state,
        loading: false,
        patient: null, //all patients
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
