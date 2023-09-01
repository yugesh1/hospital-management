// const BASE_URL = "https://hospital-mmg.dataminestech.com";

const BASE_URL = "http://localhost:5000";

const API_BASE_URL = `${BASE_URL}/api/v1`;

console.log(process.env);
const ENDPOINT = {
  APPOINTMENT: {
    CREATE: `${API_BASE_URL}/appointment/new`,
    ALL: `${API_BASE_URL}/appointments`,
  },
  DOCTORS: {
    ALL: `${API_BASE_URL}/doctors/all`,
    GET: (id) => `${API_BASE_URL}/doctor/${id}`,
    DELETE: (id) => `${API_BASE_URL}/doctor/${id}`,
    UPDATE: (id) => `${API_BASE_URL}/doctor/${id}`,
  },
  INVENTORY: {
    CREATE: `${API_BASE_URL}/create/new`,
    ALL: `${API_BASE_URL}/getall/inventory`,
  },
  PATIENTS: {
    CREATE: `${API_BASE_URL}/patient/new`,
    ALL: `${API_BASE_URL}/patients`,
    GET: (id) => `${API_BASE_URL}/patient/${id}`,
    DELETE: (id) => `${API_BASE_URL}/patient/${id}`,
    UPDATE: (id) => `${API_BASE_URL}/patient/${id}`,
    MEDICAL_HISTORY: {
      UPDATE: (id) => `${API_BASE_URL}/patient/medical/${id}`,
    },
    PRESCRIBTION: {
      UPDATE: (id) => `${API_BASE_URL}/patient/prescribed/${id}`,
    },
  },
  ROOM: {
    CREATE: `${API_BASE_URL}/room/new`,
    ALL: `${API_BASE_URL}/rooms`,
    DELETE: (id) => `${API_BASE_URL}/room/${id}`,
  },
  USER: {
    LOGIN: `${API_BASE_URL}/login`,
    PROFILE: `${API_BASE_URL}/me`,
    ALL: `${API_BASE_URL}/users`,
    LOGOUT: `${API_BASE_URL}/logout`,
    CREATE: `${API_BASE_URL}/user/new`,
  },
};

export default ENDPOINT;
