import React, { useEffect } from "react";

import Layout from "../Layout/LayoutComponent/Layout";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deletePatient, getAllPatients } from "../../actions/patientActions";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { PageHeader } from "../Layout/Header/Header";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom";
import AddPatientModal from "../Components/FilterModal";
import moment from "moment";

const PatientList = () => {
  const history = useHistory();
  // const navigate = useLocation();
  const dispatch = useDispatch();
  const { patient, onePatient, loading } = useSelector(
    (state) => state.patients
  );
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    user && dispatch(getAllPatients(user._id));
  }, [dispatch, user]);

  const deleteUser = React.useCallback(
    (id) => async () => {
      await dispatch(deletePatient(id));
      dispatch(getAllPatients(user._id));
    },
    [dispatch]
  );

  const columns = () => [
    {
      field: "patientName",
      headerName: "Patient name",
      className: "super-app-theme-header",
      width: 170,
      renderCell: (params) => {
        return (
          <div
            onClick={() => {
              // console.log("onCellClick", abc);
              history.push(`/patient/${params.id}`, {
                data: patient.find((item) => item._id === params.id),
              });
            }}
          >
            {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
            <span className="px-3 underline cursor-pointer text-blue-600">
              {params.row.firstName} {params.row.lastName}
            </span>
          </div>
        );
      },
    },
    // {
    //   field: "patientID",
    //   headerClassName: "super-app-theme-header",
    //   headerName: "Patient ID",
    //   width: 200,
    // },
    {
      field: "patientEmail",
      className: "super-app-theme-header",
      headerName: "Patient Email",
      width: 200,
    },
    {
      field: "patientPhoneNo",
      className: "super-app-theme-header",
      headerName: "Phone No.",
      width: 170,
    },
    {
      field: "patientAge",
      className: "super-app-theme-header",
      headerName: "Patient Age",
    },
    {
      field: "patientBloodGroup",
      className: "super-app-theme-header",
      headerName: "Patient Blood Group",
    },
    {
      field: "patientInRoom",
      className: "super-app-theme-header",
      headerName: "Room No.",
    },

    {
      field: "patientAdmissionStatus",
      className: "super-app-theme-header",
      headerName: "Status",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
            <div
              className={`flex justify-center items-center px-4 py-2 rounded-full font-bold text-xs ${
                params.row.patientAdmissionStatus === "Admitted"
                  ? "bg-blue-100 text-blue-600 "
                  : "bg-amber-100 text-amber-600"
              } `}
            >
              {params.row.patientAdmissionStatus}
            </div>
          </>
        );
      },
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<FiEdit size={16} />}
          label="Edit"
          onClick={() => {
            history.push(`/updatepatient/${params.id}`, {
              data: patient.find((item) => item._id === params.id),
            });
          }}
        />,
        <GridActionsCellItem
          icon={<FiTrash2 size={16} />}
          label="Delete"
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];

  const rows = () =>
    patient?.map(
      ({
        _id,
        patientName,
        patientEmail,
        patientPhoneNo,
        patientAdmissionStatus,
        patientInRoom,
        patientDOB,
        patientAge,
        patientBloodGroup,
      }) => {
        return {
          id: _id,
          // patientName: patientName,
          firstName: patientName.split(" ")[0],
          lastName: patientName.split(" ")[1],
          patientEmail: patientEmail,
          patientPhoneNo: patientPhoneNo,
          patientAdmissionStatus: patientAdmissionStatus,
          patientInRoom: patientInRoom,
          patientAge: patientAge || moment().diff(patientDOB, "years", false),
          patientBloodGroup: patientBloodGroup,
        };
      }
    );

  return (
    <div className="relative">
      <PageHeader title={"Patient List"} />
      <Layout>
        <Box
          style={{
            overflow: "auto",
            backgroundColor: "#fff",
            borderRadius: "4px",
            padding: "16px 16px",
          }}
        >
          <div className="flex justify-between items-center pb-5 border-b border-gray-200">
            <div className="font-bold text-xl">All Patients</div>
            <div className="flex space-x-6">
              <Button
                onClick={
                  // handleOpen
                  () => {
                    history.push("/newpatient");
                  }
                }
                className="primary-button"
                text={"Add Patient"}
              />
              <Button
                onClick={
                  // handleOpen
                  () => {
                    history.push("/patientadmission");
                  }
                }
                className="primary-button"
                text={"Patient Addmission"}
              />
            </div>
            <AddPatientModal open={open} onClose={handleClose} />
          </div>
          {loading ? (
            <div>loading...</div>
          ) : patient && patient.length > 0 ? (
            <>
              <DataGrid
                sx={{
                  border: "none",
                  "& .super-app-theme-header": {
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
                componentsProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: { debounceMs: 500 },
                  },
                }}
                autoHeight
                rowHeight={70}
                rows={rows()}
                columns={columns()}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </>
          ) : (
            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginBlock: "5px",
              }}
            >
              No data found
            </h3>
          )}
        </Box>
      </Layout>
    </div>
  );
};

export default PatientList;
