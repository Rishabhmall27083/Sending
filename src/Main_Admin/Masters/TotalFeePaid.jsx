import React, { useEffect, useState } from "react";
import { Modal, label, Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TableCell, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import swal from "sweetalert";
import SearchIcon from "@mui/icons-material/Search";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

function TotalFeePaid() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState([]);




  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(
          `https://sssutms.ac.in/apitest/admin/students/paidlist`
        );
        const data = await response.json();
        setStudentData(data.students);
        setFilteredData(data.students);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, []);
  useEffect(() => {
    filterData()
  }, [searchQuery, studentdata])

  const filterData = () => {
    const filtered = studentdata.filter(student =>
      student.randomId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.courseBranch.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }





  // /////////////////////////////////name sort/////////////////////////

  const getSortedAndSlicedData = () => {
    // Sort the data
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      // Handle other columns for sorting if needed
      return 0;
    });

    // Get the sliced data based on current page and rows per page
    const startIndex = page * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  };

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminDashboard />
        <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "85px" }}>
          <CardContent>
            <Paper sx={{ width: "100%", overflow: "auto" }}>
              <Box sx={{ p: 2 }}>
                <SearchIcon sx={{ mr: 1 }} />
                <input
                  type="text"
                  placeholder="Search  by ID or Name"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </Box>
              <TableContainer sx={{ maxHeight: "430px" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          S.No.
                        </h1>
                      </TableCell>

                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Enrollment Status
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          AdmissionSession
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Registration ID
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                            width: "100px"
                          }}
                        >
                          Password
                        </h1>
                      </TableCell>

                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: "#004e92", color: 'white', minWidth: '200px', position: "sticky",
                          top: 0,
                          zIndex: 1,
                        }}
                        // /////////////for sorting name//////////////////
                        onClick={() => handleSort("name")}
                      >

                        <h5>
                          <b>Student Name</b>
                          {/* /////////////name sort////////////////////////// */}
                          {sortBy === "name" && (
                            <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                          )}
                        </h5>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                            width: "150px"
                          }}
                        >
                          Father's Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Mother's Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Email
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                            width: "100px"
                          }}
                        >
                          Mobile No.
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Course Type
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                            width: "200px"
                          }}
                        >
                          Course Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                            width: "200px"
                          }}
                        >
                          Course Branch
                        </h1>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{ backgroundColor: "#004e92" }}
                      >
                        <h1
                          style={{
                            fontSize: "20px",
                            fontWeight: "bolder",
                            color: "white",
                            fontFamily: "-moz-initial",
                          }}
                        >
                          Fee Status
                        </h1>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getSortedAndSlicedData().map((student, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">
                          {student?.IsEnrollGenerated ? <Button variant="success"> Generated</Button> : <Button variant="danger">Not generated</Button>}

                        </TableCell>
                        <TableCell align="center">
                          {student?.admissionSession}
                        </TableCell>
                        <TableCell align="center">
                          {student?.randomId}
                        </TableCell>
                        <TableCell align="center">
                          {student?.randomPassword}
                        </TableCell>

                        <TableCell align="center" sx={{ width: "500px" }}>
                          {student?.name}
                        </TableCell>
                        <TableCell align="center">
                          {student?.fathersname}
                        </TableCell>
                        <TableCell align="center">
                          {student?.mothersname}
                        </TableCell>
                        <TableCell align="center">
                          {student?.email}
                        </TableCell>
                        <TableCell align="center">
                          {student?.mobile}
                        </TableCell>
                        <TableCell align="center" >
                          {student?.courseType}
                        </TableCell>
                        <TableCell align="center" sx={{ width: "500px" }}>
                          {student?.courseName}
                        </TableCell>
                        <TableCell align="center" sx={{ width: "500px" }}>
                          {student?.courseBranch}
                        </TableCell>
                        <TableCell align="center" style={{ fontSize: "20px", color: "green", font: "bold" }}>
                          {student?.isPaid ? "Paid" : "Not Paid"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 25, 100]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />

            </Paper>
          </CardContent>
          {/* </Card> */}
          <br></br>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default TotalFeePaid