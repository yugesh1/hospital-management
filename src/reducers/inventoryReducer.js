import {
  CLEAR_ERRORS,
  CREATE_INVENTORY_FAIL,
  CREATE_INVENTORY_REQUEST,
  CREATE_INVENTORY_SUCCESS,
  GET_ALL_INVENTORY_FAIL,
  GET_ALL_INVENTORY_REQUEST,
  GET_ALL_INVENTORY_SUCCESS,
} from "../constants/inventoryConstants";

export const createInventoryReducer = (state = { room: [] }, action) => {
  switch (action.type) {
    case CREATE_INVENTORY_REQUEST:
      return {
        loading: true,
        createdRoom: false,
      };
    case CREATE_INVENTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        createdRoom: true,
        room: action.payload,
      };
    case CREATE_INVENTORY_FAIL:
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

export const allInventoryReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_ALL_INVENTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_INVENTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case GET_ALL_INVENTORY_FAIL:
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
