import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllPatients } from "../../../actions/patientActions";
import Button from "../../Components/Button";
import { PageHeader } from "../Header/Header";
import Layout from "../LayoutComponent/Layout";

export const AdmittedPatientList = () => {
  const [patientFilter, setPatientFilter] = useState("Admitted");
  const history = useHistory();
  const dispatch = useDispatch();
  const { patient, loading } = useSelector((state) => state.patients);
  console.log("patient admission list", patient);
  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

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
      ],
    },
  ];

  const rows = () =>
    patient
      ?.filter(({ patientAdmissionStatus }) =>
        patientAdmissionStatus.includes(patientFilter)
      )
      ?.map(
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
    <>
      {!loading && patient && (
        <div className="relative">
          <PageHeader title={"Admitted Patient List"} />
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
                <div className="font-bold text-xl flex items-center space-x-5">
                  <div>Admitted Patients</div>

                  <select
                    onChange={(e) => setPatientFilter(e.target.value)}
                    className="border-2 rounded-lg border-primaryColor text-primaryColor font-bold text-base outline-none py-2 px-3"
                  >
                    <option value="Admitted">Admitted</option>
                    <option value="Discharged">Discharged</option>
                  </select>
                </div>
                <div className="flex space-x-6">
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
                  <Button
                    onClick={
                      // handleOpen
                      () => {
                        history.push("/patientdischarge");
                      }
                    }
                    className="primary-button"
                    text={"Patient Discharge"}
                  />
                </div>
              </div>
              {patient.length > 0 && (
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
                    // onCellClick={(data) => {
                    //   // console.log("onCellClick", abc);
                    //   history.push(`/patient/${data.id}-${data.row.firstName}`, {
                    //     data: patient.find((item) => item._id === data.id),
                    //   });
                    // }}
                    autoHeight
                    rowHeight={70}
                    rows={rows()}
                    columns={columns()}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                </>
              )}
            </Box>
          </Layout>
        </div>
      )}
    </>
  );
};
