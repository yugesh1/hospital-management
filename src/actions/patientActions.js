import { toast } from "react-toastify";
import ENDPOINT from "../constants/endpoint";
import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAIL,
  CLEAR_ERRORS,
  GET_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_SUCCESS,
  GET_ALL_PATIENTS_FAIL,
  DELETE_PATIENT_REQUEST,
  DELETE_PATIENT_FAIL,
  UPDATE_PATIENTS_REQUEST,
  UPDATE_PATIENTS_SUCCESS,
  UPDATE_PATIENTS_FAIL,
  GET_PATIENTS_SUCCESS,
} from "../constants/patientConstants";
import axios from "axios";

export const createNewPatient = (patientData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PATIENT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    console.log("patientData", patientData);

    const { data } = await axios.post(
      ENDPOINT.PATIENTS.CREATE,
      patientData,
      config
    );

    dispatch({
      type: CREATE_PATIENT_SUCCESS,
      payload: data,
    });
    toast.success("Patient added successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_PATIENT_FAIL,
      payload: error.data,
    });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const getAllPatients = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PATIENTS_REQUEST });

    const { data } = await axios.get(ENDPOINT.PATIENTS.ALL);

    console.log("get all patients", data);

    dispatch({ type: GET_ALL_PATIENTS_SUCCESS, payload: data.patients });
  } catch (error) {
    dispatch({ type: GET_ALL_PATIENTS_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const searchPatient = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PATIENTS_REQUEST });

    const { data } = await axios.get(ENDPOINT.PATIENTS.GET(id));

    console.log("patient search data", data);
    dispatch({ type: GET_PATIENTS_SUCCESS, payload: data.patient });
  } catch (error) {
    dispatch({ type: GET_ALL_PATIENTS_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(error);
  }
};

export const deletePatient = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PATIENT_REQUEST });

    const { data } = await axios.delete(ENDPOINT.PATIENTS.DELETE(id));

    console.log("patient Delete data", data);
    if (data.success) {
      toast.success("patient deleted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  } catch (error) {
    dispatch({ type: DELETE_PATIENT_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(error);
  }
};

export const updatePatient = (payload) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PATIENTS_REQUEST });

    const { data } = await axios.put(
      ENDPOINT.PATIENTS.UPDATE(payload.patientUHID),
      payload
    );
    console.log("patient update data", data);
    dispatch({ type: UPDATE_PATIENTS_SUCCESS });
    toast.success("patient data updated", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({ type: UPDATE_PATIENTS_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(error);
  }
};

export const updateMedicalHistory = (id, meddata) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PATIENTS_REQUEST });

    console.log(id, meddata);

    const { data } = await axios.put(
      ENDPOINT.PATIENTS.MEDICAL_HISTORY.UPDATE(id),
      meddata
    );

    console.log("patient update data", data);

    dispatch({ type: UPDATE_PATIENTS_SUCCESS });
    toast.success("patient medical history updated", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({ type: UPDATE_PATIENTS_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(error);
  }
};

export const updatePrescribedTests = (id, meddata) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PATIENTS_REQUEST });

    console.log(id, meddata);

    const { data } = await axios.put(
      ENDPOINT.PATIENTS.PRESCRIBTION.UPDATE(id),
      meddata
    );

    console.log("patient update data", data);

    dispatch({ type: UPDATE_PATIENTS_SUCCESS });
    toast.success("patient prescribed tests updated", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({ type: UPDATE_PATIENTS_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(error);
  }
};
