export const columns = [
  { field: "id", headerName: "UHID", width: 70 },
  { field: "firstName", headerName: "Issue No", width: 130 },
  { field: "lastName", headerName: "Issue Date", width: 130 },
  { field: "lastName", headerName: "Patient Name", width: 130 },
  { field: "lastName", headerName: "Age/Gender", width: 130 },
  { field: "lastName", headerName: "Payer", width: 130 },
  { field: "lastName", headerName: "Bill No", width: 130 },
  { field: "lastName", headerName: "Status", width: 130 },
  {
    field: "age",
    headerName: "Dispensed by",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

export const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
