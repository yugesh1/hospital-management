import { Box } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
import { PageHeader } from "../Layout/Header/Header";
import Layout from "../Layout/LayoutComponent/Layout";

const ContractManagement = () => {
  const history = useHistory();
  const columns = () => [
    {
      field: "signeeName",
      headerName: "Signee Name",
      className: "super-app-theme-header",
      width: 240,
      renderCell: (params) => {
        return (
          <div
          // onClick={() => {
          //   // console.log("onCellClick", abc);
          //   history.push(`/patient/${params.id}-${params.row.firstName}`, {
          //     data: patient.find((item) => item._id === params.id),
          //   });
          // }}
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
      field: "signeeType",
      className: "super-app-theme-header",
      headerName: "Signee Type",
      width: 200,
    },
    {
      field: "signeeExpiry",
      className: "super-app-theme-header",
      headerName: "Expiry",
      width: 220,
    },
    {
      field: "signeeStatus",
      className: "super-app-theme-header",
      headerName: "Status",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
            <div
              className={`flex justify-center items-center px-4 py-2 rounded-full font-bold text-xs ${
                params.row.signeeStatus === "Opened"
                  ? "bg-green-100 text-green-600 "
                  : params.row.signeeStatus === "Signed"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-amber-100 text-amber-600"
              } `}
            >
              {params.row.signeeStatus}
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
          // onClick={(e) => {}}
        />,
        <GridActionsCellItem
          icon={<FiTrash2 size={16} />}
          label="Delete"
          // onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];

  const rows = () => [
    {
      id: "1",
      firstName: "Akash",
      lastName: "User",
      signeeType: "Vendor",
      signeeExpiry: new Date(),
      signeeStatus: "Signed",
    },
    {
      id: "2",
      firstName: "Dayitava",
      lastName: "Upadhyay",
      signeeType: "Supplier",
      signeeExpiry: new Date(),
      signeeStatus: "Opened",
    },
    {
      id: "3",
      firstName: "Contracter",
      lastName: "Test 3",
      signeeType: "Contract",
      signeeExpiry: new Date(),
      signeeStatus: "Sent",
    },
    {
      id: "4",
      firstName: "Akash",
      lastName: "User",
      signeeType: "Vendor",
      signeeExpiry: new Date(),
      signeeStatus: "Sent",
    },
    {
      id: "5",
      firstName: "Dayitava",
      lastName: "Upadhyay",
      signeeType: "Supplier",
      signeeExpiry: new Date(),
      signeeStatus: "Opened",
    },
    {
      id: "6",
      firstName: "Contracter",
      lastName: "Test 3",
      signeeType: "Contract",
      signeeExpiry: new Date(),
      signeeStatus: "Opened",
    },
  ];

  return (
    <div className="relative">
      <PageHeader title={"Contract Management System"} />
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
            <div className="font-bold text-xl">All Contracts</div>
            {/* <div className="flex space-x-6">
              <Button
                onClick={
                  // handleOpen
                  () => {
                    history.push("/newpatient");
                  }
                }
                className="primary-button"
                text={"Add New Contract"}
              />
            </div> */}
          </div>
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
        </Box>
      </Layout>
    </div>
  );
};

export default ContractManagement;
