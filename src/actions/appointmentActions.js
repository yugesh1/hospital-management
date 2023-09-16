import axios from "axios";
import {
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  GET_ALL_APPOINTMENTS_FAIL,
  GET_ALL_APPOINTMENTS_REQUEST,
  GET_ALL_APPOINTMENTS_SUCCESS,
} from "../constants/appointmentConstants";
import ENDPOINT from "../constants/endpoint";
import { toast } from "react-toastify";

export const createAppointment = (appointmentData, id) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_APPOINTMENT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };
    console.log(appointmentData, "appointment");
    const { data } = await axios.post(
      `${ENDPOINT.APPOINTMENT.CREATE}?id=${id}`,
      appointmentData,
      config
    );

    dispatch({
      type: CREATE_APPOINTMENT_SUCCESS,
      payload: data,
    });
    toast.success("Appointment created successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({
      type: CREATE_APPOINTMENT_FAIL,
      payload: error.response,
    });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const getAllAppointments = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_APPOINTMENTS_REQUEST });

    const { data } = await axios.get(`${ENDPOINT.APPOINTMENT.ALL}?id=${id}`);

    dispatch({
      type: GET_ALL_APPOINTMENTS_SUCCESS,
      payload: data.appointments,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_APPOINTMENTS_FAIL,
      payload: error.response,
    });
    // toast.error(error.response.data.message, {
    //   position: toast.POSITION.TOP_CENTER,
    // });
  }
};
