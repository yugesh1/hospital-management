import axios from "axios";
import {
  GET_ALL_DOCTORS_REQUEST,
  GET_ALL_DOCTORS_SUCCESS,
  GET_ALL_DOCTORS_FAIL,
  GET_DOCTOR_REQUEST,
  GET_DOCTOR_SUCCESS,
  GET_DOCTOR_FAIL,
  UPDATE_DOCTORS_REQUEST,
  UPDATE_DOCTORS_SUCCESS,
  UPDATE_DOCTORS_FAIL,
} from "../constants/doctorConstants";
import ENDPOINT from "../constants/endpoint";
import { toast } from "react-toastify";

export const getAllDoctors = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DOCTORS_REQUEST });

    const { data } = await axios.get(ENDPOINT.DOCTORS.ALL);

    console.log("get all doctors", data);

    dispatch({ type: GET_ALL_DOCTORS_SUCCESS, payload: data.allDoctors });
  } catch (error) {
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch({ type: GET_ALL_DOCTORS_FAIL, payload: error.data });
  }
};

export const searchDoctor = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_DOCTOR_REQUEST });

    const { data } = await axios.get(ENDPOINT.DOCTORS.GET(id));

    console.log("doctor search data", data);
    dispatch({ type: GET_DOCTOR_SUCCESS, payload: data.doctor });
  } catch (error) {
    dispatch({ type: GET_DOCTOR_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(error);
  }
};

export const updateDoctor = (payload, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DOCTORS_REQUEST });

    const { data } = await axios.put(ENDPOINT.DOCTORS.UPDATE(id), payload);
    console.log("doctor update data", data);
    dispatch({ type: UPDATE_DOCTORS_SUCCESS });
    toast.success("patient data updated", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({ type: UPDATE_DOCTORS_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(error);
  }
};
