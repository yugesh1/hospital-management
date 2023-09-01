import {
  CLEAR_ERRORS,
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  GET_ALL_APPOINTMENTS_REQUEST,
  GET_ALL_APPOINTMENTS_RESPONSE,
  GET_ALL_APPOINTMENTS_FAIL,
  GET_ALL_APPOINTMENTS_SUCCESS,
} from "../constants/appointmentConstants";

export const createAppointmentReducer = (
  state = { appointment: [] },
  action
) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return {
        loading: true,
        createAppointment: false,
      };
    case CREATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        createAppointment: true,
        appointment: action.payload,
      };
    case CREATE_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        createAppointment: false,
        appointment: null,
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

export const allAppointmentsReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: action.payload,
      };
    case GET_ALL_APPOINTMENTS_FAIL:
      return {
        ...state,
        loading: false,
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
