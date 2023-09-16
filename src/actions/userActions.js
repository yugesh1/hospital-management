import ENDPOINT from "../constants/endpoint";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from "../constants/userConstants";
import Cookies from "js-cookie";

import axios from "axios";
import { toast } from "react-toastify";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      ENDPOINT.USER.LOGIN,
      { email, password },
      config
    );

    // console.log(data, "data111");
    // console.log(data.token, "token");
    localStorage.setItem("token", data.token);
    Cookies.set("token", data.token, { expires: 1 }); // Expires in 1 day

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    toast.success("Logged In", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(ENDPOINT.USER.PROFILE, {
      withCredentials: true,
    });

    console.log(data, "load user data current");

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.message });
    // toast.error(error.response.data.message, {
    //   position: toast.POSITION.TOP_CENTER,
    // });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_USERS_REQUEST });

    const { data } = await axios.get(ENDPOINT.USER.ALL);

    console.log(data, "all users current");

    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(ENDPOINT.USER.LOGOUT);

    dispatch({ type: LOGOUT_USER_SUCCESS });
    toast.success("Logged Out", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const createNewUser = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    console.log("userData", userData);

    const { data } = await axios.post(
      `${ENDPOINT.USER.CREATE}?id=${id}`,
      userData,
      config
    );

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
    toast.success("user created", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error.data,
    });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};
