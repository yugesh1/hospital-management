import {
  CLEAR_ERRORS,
  CREATE_ROOM_FAIL,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  GET_ALL_ROOM_REQUEST,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAIL,
} from "../constants/roomConstants";

export const createRoomReducer = (state = { room: [] }, action) => {
  switch (action.type) {
    case CREATE_ROOM_REQUEST:
      return {
        loading: true,
        createdRoom: false,
      };
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        createdRoom: true,
        room: action.payload,
      };
    case CREATE_ROOM_FAIL:
      return {
        ...state,
        loading: false,
        createRoom: false,
        room: null,
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

export const allRoomReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ROOM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
      };
    case GET_ALL_ROOM_FAIL:
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
