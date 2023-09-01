import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { allUsers, userReducer } from "./reducers/userReducer";
import { patientReducer } from "./reducers/patientReducer";
import {
  createAppointmentReducer,
  allAppointmentsReducer,
} from "./reducers/appointmentReducer";
import { allRoomReducer, createRoomReducer } from "./reducers/roomReducer";
import { doctorReducer } from "./reducers/doctorReducer";
import { allInventoryReducer } from "./reducers/inventoryReducer";

const reducer = combineReducers({
  user: userReducer,
  patients: patientReducer,
  appointments: createAppointmentReducer,
  rooms: createRoomReducer,
  allappointments: allAppointmentsReducer,
  allrooms: allRoomReducer,
  allDoctors: doctorReducer,
  allUsers: allUsers,
  allInventory: allInventoryReducer,
});

const middleware = [thunk];

let initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
