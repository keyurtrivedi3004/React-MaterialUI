import axios from "axios";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const MuiTable = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";

  const colums = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "postId", headerName: "POST I'D", width: 100 },
    { field: "name", headerName: "NAME", width: 300 },
    { field: "email", headerName: "EMAIL", width: 300 },
    { field: "body", headerName: "COMMENTS", width: 700 },
  ];

  const [tabledata, setTabledata] = useState([]);

  useEffect(() => {
    axios.get(url).then((resp) => {
      setTabledata(resp.data);
    });
  }, []);

  return (
    <>
      <h1>Table</h1>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={tabledata}
          columns={colums}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
};

export default MuiTable;
