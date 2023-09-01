import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "./actions/userActions";
import "./App.css";
import Login from "./Components/Auth/Login";
import DoctorAppointment from "./Components/DoctorComponent/DoctorAppointment";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Layout/Dashboard/Dashboard";
import Inventory from "./Components/Layout/Dashboard/Inventory";
import InvestigationAcknowledge from "./Components/Layout/Dashboard/InvestigationAcknowledge";
import PatientIssue from "./Components/Layout/Dashboard/PatientIssue";
import Room from "./Components/Layout/Dashboard/Room";
import SampleAcknowledge from "./Components/Layout/Dashboard/SampleAcknowledge";
import SampleCollection from "./Components/Layout/Dashboard/SampleCollection";
import AllAppointments from "./Components/Layout/OutPatientModal/AllAppointments";
import OutPatientBilling from "./Components/Layout/OutPatientModal/OutPatientBilling";
import MaterialDrawer from "./Components/Layout/Sidebar/MaterialDrawer";
import Advice from "./Components/PatientComponent/Advice";
import Diagnosis from "./Components/PatientComponent/Diagnosis";
import AllDoctors from "./Components/PatientComponent/AllDoctors";
import HistoryAndExam from "./Components/PatientComponent/HistoryAndExam";
import InvestigationProcedure from "./Components/PatientComponent/InvestigationProcedure";
import MedicalCertificate from "./Components/PatientComponent/MedicalCertificate";
import Medication from "./Components/PatientComponent/Medication";
import NewPatient from "./Components/PatientComponent/NewPatient";
import PatientAdmission from "./Components/PatientComponent/PatientAdmission";
import PatientList from "./Components/PatientComponent/PatientList";
import PatientVisit from "./Components/PatientComponent/PatientVisit";
import PrescriptionMedicine from "./Components/PatientComponent/PrescriptionMedicine";
import PresentingComplaint from "./Components/PatientComponent/PresentingComplaint";
import ReferToDoctor from "./Components/PatientComponent/ReferToDoctor";
import RoomStatus from "./Components/PatientComponent/RoomStatus";
import RoomTransfer from "./Components/PatientComponent/RoomTransfer";
import RoomsOccupied from "./Components/RoomComponent/RoomsOccupied";
import ProtectedRoute from "./routes/ProtectedRoute";
import store from "./store";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TodaysAppointment from "./Components/Layout/Appointments/TodaysAppointments";
import PatientView from "./Components/PatientComponent/PatientView";
import DoctorView from "./Components/PatientComponent/DoctorView";
import ContractManagement from "./Components/ContractManagementSystem/ContractManagement";
import SearchPage from "./Components/Layout/SearchComponent/SearchPage";
import UpdatePatient from "./Components/PatientComponent/UpdatePatient";
import AddDoctor from "./Components/DoctorComponent/AddDoctor";
import { AdmittedPatientList } from "./Components/Layout/InPatient/AdmittedPatientList";
import DischargePatient from "./Components/Layout/InPatient/DischargePatient";
import InventoryManagement from "./Components/InventoryManagementSystem/InventoryManagement";
import Billing from "./Components/Layout/Billing/Billing";
import ProductList from "./Components/InventoryManagementSystem/ProductList";
import AddProduct from "./Components/InventoryManagementSystem/AddProduct";
import NotificationsList from "./Components/Notifications/NotificationsList";
import CreateRoom from "./Components/RoomComponent/CreateRoom";
import NotFound from "./Components/Pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateDoctor from "./Components/PatientComponent/UpdateDoctor";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Nunito Sans, sans-serif",
      textTransform: "none",
      fontSize: 14,
    },
  },
});

function App(props) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const { user } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex", position: "relative" }}>
          {/* <Header isOpen={isOpen} setIsOpen={setIsOpen} user={user} /> */}
          <MaterialDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              position: "relative",
              minHeight: "100vh",
              backgroundColor: "#F5F0ED",
            }}
          >
            {/* <Toolbar /> */}
            <Switch>
              <Route exact path="/" component={Login} />
              <ProtectedRoute
                exact
                path="/dashboard"
                component={Dashboard}
                user={user}
              />
              <ProtectedRoute exact path="/home" component={Home} />
              <ProtectedRoute exact path="/newpatient" component={NewPatient} />
              <ProtectedRoute
                exact
                path="/notifications"
                component={NotificationsList}
              />
              <ProtectedRoute
                exact
                path="/updatepatient/:id"
                component={UpdatePatient}
              />
              <ProtectedRoute
                exact
                path="/patientvisit"
                component={PatientVisit}
                user={user}
              />
              {/* <Route exact path="/allergies" component={PatientAllergies} /> */}
              <ProtectedRoute
                exact
                path="/complaint"
                component={PresentingComplaint}
              />
              <ProtectedRoute exact path="/medication" component={Medication} />
              <ProtectedRoute exact path="/diagnosis" component={Diagnosis} />
              <ProtectedRoute
                exact
                path="/historyandexam"
                component={HistoryAndExam}
              />
              <ProtectedRoute
                exact
                path="/investigation"
                component={InvestigationProcedure}
              />
              <ProtectedRoute
                exact
                path="/prescription"
                component={PrescriptionMedicine}
              />
              <ProtectedRoute exact path="/advice" component={Advice} />
              <ProtectedRoute
                exact
                path="/medicalcertificate"
                component={MedicalCertificate}
              />
              <ProtectedRoute
                exact
                path="/roomstatus"
                component={RoomsOccupied}
              />
              <ProtectedRoute exact path="/createroom" component={CreateRoom} />
              <ProtectedRoute
                exact
                path="/refertodoctor"
                component={ReferToDoctor}
              />
              {/* <ProtectedRoute exact path="/inventory" component={Inventory} /> */}
              <ProtectedRoute
                exact
                path="/patientissue"
                component={PatientIssue}
              />
              <ProtectedRoute
                exact
                path="/allappointments"
                component={AllAppointments}
              />
              <ProtectedRoute
                exact
                path="/samplecollection"
                component={SampleCollection}
              />
              <ProtectedRoute
                exact
                path="/sampleacknowledge"
                component={SampleAcknowledge}
              />
              <ProtectedRoute
                exact
                path="/newAppointment"
                component={DoctorAppointment}
              />
              <ProtectedRoute
                exact
                path="/appointments"
                component={TodaysAppointment}
              />
              <ProtectedRoute exact path="/room" component={Room} />
              <ProtectedRoute
                exact
                path="/investigationacknowledge"
                component={InvestigationAcknowledge}
              />
              <ProtectedRoute
                exact
                path="/outpatientbilling"
                component={OutPatientBilling}
              />
              <ProtectedRoute
                exact
                path="/patientlist"
                component={PatientList}
              />
              <ProtectedRoute
                exact
                path="/patient/:id"
                component={PatientView}
              />
              {/* <ProtectedRoute exact path="/roomstatus" component={RoomStatus} /> */}
              <ProtectedRoute
                exact
                path="/roomtransfer"
                component={RoomTransfer}
              />
              <ProtectedRoute exact path="/alldoctors" component={AllDoctors} />
              <ProtectedRoute exact path="/newdoctor" component={AddDoctor} />
              <ProtectedRoute exact path="/doctor/:id" component={DoctorView} />
              <ProtectedRoute
                exact
                path="/updatedoctor/:id"
                component={UpdateDoctor}
              />
              <ProtectedRoute
                exact
                path="/admittedpatient"
                component={AdmittedPatientList}
              />
              <ProtectedRoute
                exact
                path="/patientadmission"
                component={PatientAdmission}
              />
              <ProtectedRoute
                exact
                path="/patientdischarge"
                component={DischargePatient}
              />
              <ProtectedRoute
                exact
                path="/contractmanagement"
                component={ContractManagement}
              />
              <ProtectedRoute
                exact
                path="/inventory"
                component={InventoryManagement}
              />
              <ProtectedRoute
                exact
                path="/inventory/products"
                component={ProductList}
              />
              <ProtectedRoute
                exact
                path="/inventory/products/addproduct"
                component={AddProduct}
              />
              <ProtectedRoute exact path="/search" component={SearchPage} />
              <ProtectedRoute exact path="/billing" component={Billing} />
              <ProtectedRoute path="*" component={NotFound} />
            </Switch>
            <ToastContainer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
