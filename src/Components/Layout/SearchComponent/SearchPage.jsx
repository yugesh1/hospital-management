import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getAllDoctors } from "../../../actions/doctorActions";
import { getAllPatients } from "../../../actions/patientActions";
import { PageHeader } from "../Header/Header";
import Layout from "../LayoutComponent/Layout";

const SearchPage = () => {
  const history = useHistory();

  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  const query = useQuery();
  const dispatch = useDispatch();
  const { patient } = useSelector((state) => state.patients);
  const { allDoctors } = useSelector((state) => state.allDoctors);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = React.useState([]);
  console.log("patient in search", patient);
  console.log("doctos in search", allDoctors);

  useEffect(() => {
    if (user) {
      dispatch(getAllPatients(user._id));
      dispatch(getAllDoctors(user._id));
    }
  }, [dispatch, user]);

  const columns = () => [
    {
      field: "id",
      className: "super-app-theme-header",
      width: 100,
    },
    {
      field: "name",
      className: "super-app-theme-header",
      width: 200,
      renderCell: (params) => {
        return (
          <div
            onClick={() => {
              // console.log("onCellClick", abc);
              params.row.type === "Doctor"
                ? history.push(`/doctor/${params.id}`, {
                    data: allDoctors.find((item) => item._id === params.id),
                  })
                : history.push(`/patient/${params.id}`, {
                    data: patient.find((item) => item._id === params.id),
                  });
            }}
          >
            {/* <Avatar sx={{ width: 35, height: 35 }} src={params.value.avatar} /> */}
            <span className="px-3 underline cursor-pointer text-blue-600">
              {params.row.name}
            </span>
          </div>
        );
      },
    },
    {
      field: "type",
      className: "super-app-theme-header",
      width: 200,
    },
  ];

  const rows = () =>
    searchResult?.map((item) => {
      return {
        id: item._id,
        name: item?.patientName || item?.userName,
        type: item?.userRole === "doctor" ? "Doctor" : "Patient",
      };
    });

  const searchQuery = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    if (patient && patient.length > 0 && allDoctors) {
      const searchable = patient.concat(allDoctors);
      const res = searchable?.filter((item) => {
        const name = item?.patientName || item?.userName;
        return name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setSearchResult(res);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [patient, allDoctors, searchQuery]);

  return (
    <div className="relative">
      <PageHeader
        title={"Search"}
        back
        onClick={history.goBack}
        value={query.get("search")}
      />
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
            <div className="font-bold text-xl">Search Result</div>
          </div>
          {searchResult.length > 0 ? (
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
            <div className="flex justify-center items-center py-5 text-lg font-bold">
              {isLoading ? "Loading" : " No search result found"}
            </div>
          )}
          {console.log(isLoading, "isloading")}
        </Box>
      </Layout>
    </div>
  );
};

export default SearchPage;
