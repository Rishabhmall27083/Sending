import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import { Button, Form, FormControl } from "react-bootstrap";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AdminDashboard from '../Admin_Dashboard/AdminDashboard'

const theme = createTheme();

const Sub = () => {    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    // ///////////////////pagination///////////////////////////////////
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            <AdminDashboard />
            <ThemeProvider theme={theme}>

                <div
                    className="shadow p-3 mb-3 bg-body rounded"
                    style={{
                        backgroundColor: "#e8e5d5",
                        width: "90%",
                        marginLeft: "80px",
                        marginRight: "auto",
                        marginTop: "50px",
                        textAlign: "left",
                        maxWidth: "1200px",
                    }}
                >
                    <br />


                    <Paper sx={{ width: "100%" }}>
                        <TableContainer sx={{ maxHeight: "440px" }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: "#023047",
                                                color: "white",
                                                position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                                minWidth: '70px'
                                            }}
                                        >
                                            <h5>
                                                <b>S.No.</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', minWidth: '90px', color: 'white', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Comp Opt</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', position: "sticky", minWidth: '100px',
                                                top: 0,
                                                zIndex: 1,
                                            }}>
                                            <h5>
                                                <b>Subject Sequence</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', minWidth: '180px', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}

                                        >
                                            <h5>
                                                <b>Subject Sequence (Print)</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', position: "sticky", minWidth: '100px',
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >

                                            <h5>
                                                <b>Subject Count</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', minWidth: '140px', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Subject Code</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', minWidth: '140px', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Paper Code</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Subject Name</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', position: "sticky", minWidth: '150px',
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Theory/Paper1</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', position: "sticky", minWidth: '120px',
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Mid Sem/Paper2</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', minWidth: '120px', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Term Quiz/Paper3</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', position: "sticky", minWidth: '120px',
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Term Work/Sess1</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', minWidth: '120px', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Practical</b>
                                            </h5>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            style={{
                                                backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                                                top: 0,
                                                zIndex: 1,
                                            }}
                                        >
                                            <h5>
                                                <b>Lab Work</b>
                                            </h5>
                                        </TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell align="left"
                                        > <Form.Control
                                            type="text"



                                            style={{
                                                borderRadius: "5px",
                                                width: "40px",
                                                height: "35px",
                                                borderColor: 'black'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Form.Control
                                                type="text"



                                                style={{
                                                    borderRadius: "5px",
                                                    width: "60px",
                                                    height: "35px",
                                                    borderColor: 'black'
                                                }}
                                            ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"



                                            style={{
                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: 'black'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="center">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: 'black'
                                            }}


                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: 'black'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "120px",
                                                height: "35px",
                                                borderColor: 'black'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "120px",
                                                height: "35px",
                                                borderColor: 'black'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "300px",
                                                height: "35px",
                                                borderColor: 'black'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="center">  <Form.Control
                                            type="text"
                                            style={{


                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: '#e85d04',
                                                margin: 'auto', // to center horizontally within TableCell
                                                textAlign: 'center' // to center text inside the input box
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: '#e85d04'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: '#e85d04'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: '#e85d04'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: '#e85d04'
                                            }}
                                        ></Form.Control>
                                        </TableCell>

                                        <TableCell align="left">  <Form.Control
                                            type="text"
                                            style={{
                                                borderRadius: "5px",
                                                width: "60px",
                                                height: "35px",
                                                borderColor: '#e85d04'
                                            }}
                                        ></Form.Control>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            component="div"
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Sub