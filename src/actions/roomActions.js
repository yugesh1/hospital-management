import axios from "axios";
import {
  CREATE_ROOM_FAIL,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  GET_ALL_ROOM_REQUEST,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAIL,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_FAIL,
} from "../constants/roomConstants";
import ENDPOINT from "../constants/endpoint";
import { toast } from "react-toastify";

export const createRoom = (roomData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ROOM_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(ENDPOINT.ROOM.CREATE, roomData, config);

    dispatch({
      type: CREATE_ROOM_SUCCESS,
      payload: data,
    });
    toast.success("room created ", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ROOM_FAIL,
      payload: error.data,
    });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const getAllRooms = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ROOM_REQUEST });

    const { data } = await axios.get(ENDPOINT.ROOM.ALL);

    dispatch({ type: GET_ALL_ROOM_SUCCESS, payload: data.rooms });
  } catch (error) {
    dispatch({ type: GET_ALL_ROOM_FAIL, payload: error.response });

    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};

export const deleteRoom = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ROOM_REQUEST });

    const { data } = await axios.delete(ENDPOINT.ROOM.DELETE(id));

    console.log("Room Delete data", data);
    if (data.success) {
      toast.success("room deleted ", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  } catch (error) {
    dispatch({ type: DELETE_ROOM_FAIL, payload: error.data });
    toast.error(error.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(error);
  }
};
