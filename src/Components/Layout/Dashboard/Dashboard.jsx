import React, { useEffect } from "react";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../../actions/appointmentActions";
import { getAllPatients } from "../../../actions/patientActions";
import { getAllRooms } from "../../../actions/roomActions";
import { PageHeader } from "../Header/Header";
import Layout from "../LayoutComponent/Layout";
import PatientDashboardIcon from "../../../images/icons/patient-dashboard-icon.svg";
import AppointmentDashboardIcon from "../../../images/icons/appointment-dashboard-icon.svg";
import OperationDashboardIcon from "../../../images/icons/operation-dashboard-icon.svg";
import ReportsDashboardIcon from "../../../images/icons/reports-dashboard-icon.svg";
import DashboardIllustration from "../../../images/dashboard-illustration.svg";
import MoreIcon from "../../../images/icons/more-icon.svg";
import Button from "../../Components/Button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { useHistory } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log("props", props);
  const { user } = useSelector((state) => state.user);

  const { appointments } = useSelector((state) => state.allappointments);
  const { patient } = useSelector((state) => state.patients);
  const { rooms, loading } = useSelector((state) => state.allrooms);

  console.log("patient", patient);
  // console.log("props", rooms);

  useEffect(() => {
    if (user) {
      dispatch(getAllAppointments(user._id));
      dispatch(getAllPatients(user._id));
      dispatch(getAllRooms(user._id));
    }
  }, [dispatch, user]);

  const columns = [
    {
      field: "patientName",
      headerName: "Patient name",
      headerClassName: "super-app-header",
      width: 250,
      // renderCell: (params) => {
      //   console.log(params);
      //   return (
      //     <>
      //       {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
      //       <span className="">
      //         {params.row.firstName} {params.row.lastName}
      //       </span>
      //     </>
      //   );
      // },
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "appointmentOnDate",
      headerClassName: "super-app-header",
      headerName: "Appointment Date",
      width: 170,
    },
    {
      field: "appointmentOnTime",
      headerClassName: "super-app-header",
      headerName: "Appointment Time",
      width: 170,
    },
    {
      field: "doctorsAttending",
      headerClassName: "super-app-header",
      headerName: "Doctor Attending",
      width: 250,
    },
    {
      field: "anticipatedTime",
      headerClassName: "super-app-header",
      headerName: "Anticipated Time",
      width: 150,
    },
    {
      field: "visitFor",
      headerClassName: "super-app-header",
      headerName: "Visit For",
      width: 200,
    },
  ];

  const rows = appointments?.map(
    ({ appointmentWith, doctorsAttending, anticipatedTime, _id }) => {
      return {
        id: _id,
        patientName: appointmentWith[0].patientName,
        // firstName: appointmentWith[0].patientName.split(" ")[0],
        // lastName: appointmentWith[0].patientName.split(" ")[1],
        doctorsAttending: doctorsAttending[0].doctorName,
        anticipatedTime: moment(anticipatedTime).format("LT") ?? "-",
        visitFor: appointmentWith[0].visitFor,
        appointmentOnDate: moment(appointmentWith[0].appointmentOn).format(
          "MMMM Do YYYY"
        ),
        appointmentOnTime: moment(anticipatedTime).format("LT"),
      };
    }
  );
  return (
    <>
      <div className="relative">
        <PageHeader title={"Dashboard"} />
        <Layout>
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-3 bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg grid grid-cols-2 gap-5 place-items-center">
              <div>
                <div className="text-3xl font-black pb-2">
                  Hello, {user?.userName}
                </div>
                <div className="text-lg text-gray-400 w-4/5 pb-4">
                  Find a doctor and make an appointment online!
                </div>
                <Button
                  onClick={() => {
                    history.push("/appointments");
                  }}
                  className="primary-button"
                  text={"Today's Appointment"}
                />
              </div>
              <img
                className="object-cover object-center w-80"
                src={DashboardIllustration}
                alt="Hello"
              />
            </div>
            <div className="grid grid-cols-2 col-span-2 gap-5">
              <div className="flex flex-col justify-center px-5 rounded-xl bg-white shadow-xl shadow-orange-50">
                <div className="flex justify-start items-center gap-3">
                  <img
                    src={PatientDashboardIcon}
                    alt="Rooms Occupied"
                    srcSet=""
                    width={50}
                  />
                  <div>
                    <div className="card-dashboard-title">Patients</div>
                    <div
                      className="card-dashboard-heading"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        history.push("/patientList");
                      }}
                    >
                      {patient?.length}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-5 rounded-xl bg-white shadow-xl shadow-orange-50">
                <div className="flex justify-start items-center gap-3">
                  <img
                    src={AppointmentDashboardIcon}
                    alt="Rooms Occupied"
                    srcSet=""
                    width={50}
                  />
                  <div>
                    <div className="card-dashboard-title">Appointments</div>
                    <div
                      className="card-dashboard-heading"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push("/appointments")}
                    >
                      {appointments?.length}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-5 rounded-xl bg-white shadow-xl shadow-orange-50">
                <div className="flex justify-start items-center gap-3">
                  <img
                    src={OperationDashboardIcon}
                    alt="Rooms Occupied"
                    srcSet=""
                    width={50}
                  />
                  <div>
                    <div className="card-dashboard-title">Operations</div>
                    <div
                      className="card-dashboard-heading"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push("/roomStatus")}
                    >
                      {rooms?.length}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-5 rounded-xl bg-white shadow-xl shadow-orange-50">
                <div className="flex justify-start items-center gap-3">
                  <img
                    src={ReportsDashboardIcon}
                    alt="Rooms Occupied"
                    srcSet=""
                    width={50}
                  />
                  <div>
                    <div className="card-dashboard-title">Rooms Occupied</div>
                    <div
                      className="card-dashboard-heading"
                      style={{ cursor: "pointer" }}
                      onClick={() => history.push("/roomStatus")}
                    >
                      {rooms?.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-5 my-10">
            <div className="col-span-6">
              <div>
                <div className="text-sm font-bold pb-5 uppercase">
                  Appointment Activity
                </div>
                <div className="bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg">
                  <DataGrid
                    sx={{
                      border: "none",
                      width: "100%",
                      "& .super-app-header": {
                        fontWeight: "700",
                        fontSize: "14px",
                      },
                    }}
                    autoHeight
                    rowHeight={70}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                  />
                </div>
              </div>
            </div>
            {/* <div className="my-5 col-span-4">
            <div className="text-sm font-bold pb-5 uppercase">
              Patient Statistics
            </div>
            <div className="bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg">
              <Line
                options={{
                  // animations: {
                  //   tension: {
                  //     easing: "linear",
                  //     from: 1,
                  //     to: 0,
                  //     loop: false,
                  //   },
                  // },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
                data={{
                  labels: [
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ],
                  datasets: [
                    {
                      label: "Indicator",
                      data: [33, 53, 85, 41, 44, 65],
                      fill: true,
                      backgroundColor: "#FF7B54",
                      borderColor: "#FF7B54",
                      borderWidth: 3,
                      bezierCurve: true,
                      tension: 0.5,
                    },
                  ],
                }}
              />
            </div>
          </div> */}
            {/* <div className="col-span-2 my-5"> */}
            {/* <div>
              <div className="text-sm font-bold pb-5 uppercase">Reports</div>
              <div className="grid grid-cols-1 gap-5">
                <div className="bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg flex flex-col justify-between">
                  <div className="flex flex-row justify-between font-bold text-md pb-5">
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </div>

                    <IconButton>
                      <img src={MoreIcon} alt={"edit profile"} width={24} />
                    </IconButton>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="text-sm text-gray-400">3 min ago</div>
                  </div>
                </div>
                <div className="bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg flex flex-col justify-between">
                  <div className="flex flex-row justify-between font-bold text-md pb-5">
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </div>

                    <IconButton>
                      <img src={MoreIcon} alt={"edit profile"} width={24} />
                    </IconButton>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="text-sm text-gray-400">3 min ago</div>
                  </div>
                </div>
                <div className="bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg flex flex-col justify-between">
                  <div className="flex flex-row justify-between font-bold text-md pb-5">
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </div>

                    <IconButton>
                      <img src={MoreIcon} alt={"edit profile"} width={24} />
                    </IconButton>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="text-sm text-gray-400">3 min ago</div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="my-10">
              <div className="text-sm font-bold pb-5 uppercase">Balance</div>
              <div className="grid grid-cols-1 gap-5">
                <div className="bg-white shadow-xl shadow-orange-50 py-5 px-5 rounded-lg flex flex-col justify-between">
                  <div className="flex flex-row justify-between font-bold text-md pb-5">
                    <div className="text-xl font-black text-black">
                      <div className="text-sm text-gray-400 pb-2 font-normal">
                        Income
                      </div>
                      $2000
                    </div>
                    <div className="w-3/6">
                      <Line
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            x: {
                              display: false,
                              grid: {
                                display: false,
                              },
                            },
                            y: {
                              display: false,
                              grid: {
                                display: false,
                              },
                            },
                          },
                          legend: {
                            display: false,
                          },
                          tooltips: {
                            enabled: false,
                          },
                        }}
                        data={{
                          labels: ["Red", "Blue", "Yellow"],
                          datasets: [
                            {
                              legend: {
                                display: false,
                              },
                              data: [33, 53, 41],
                              fill: false,
                              bezierCurve: true,
                              tension: 0.5,
                            },
                          ],
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between font-bold text-md pb-5">
                    <div className="text-xl font-black text-black">
                      <div className="text-sm text-gray-400 pb-2 font-normal">
                        Outcome
                      </div>
                      $2000
                    </div>
                    <div className="w-3/6">
                      <Line
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            x: {
                              display: false,
                              grid: {
                                display: false,
                              },
                            },
                            y: {
                              display: false,
                              grid: {
                                display: false,
                              },
                            },
                          },
                          legend: {
                            display: false,
                          },
                          tooltips: {
                            enabled: false,
                          },
                        }}
                        data={{
                          labels: ["Red", "Blue", "Yellow"],
                          fill: true,
                          datasets: [
                            {
                              legend: {
                                display: false,
                              },
                              data: [33, 53, 41],
                              fill: true,
                              bezierCurve: true,
                              tension: 0.5,
                            },
                          ],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* </div> */}
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Dashboard;
