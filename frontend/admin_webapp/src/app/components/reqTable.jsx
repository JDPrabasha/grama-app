import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckIcon from "@mui/icons-material/Check";
import DangerousIcon from "@mui/icons-material/Dangerous";
import ArticleIcon from "@mui/icons-material/Article";
import Stack from "@mui/material/Stack";
import Model from "../components/Model";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";

const columns = [
  { id: "nic", label: "NIC", minWidth: 120 },
  {
    id: "address",
    label: "Address",
    minWidth: 400,
  },
  {
    id: "more",
    label: "Document",
    minWidth: 100,
  },

  {
    id: "Accept",
    label: "Accept",
    minWidth: 60,
  },

  {
    id: "Reject",
    label: "Reject",
    minWidth: 60,
  },
];

function createData(nic, address, more) {
  //const density = population / size;
  return { nic, address, more };
}

const rows = [
  ["123666908234", "35, Odio Avenue, Colombo", " View Document"],
  ["732348956v", "40, Galle Road, Matara", " View Document"],
  ["988331229V", "22, Flower Road,Kandy", " View Document"],
  ["123666908234", "35, Odio Avenue, Colombo", " View Document"],
  ["732348956v", "40, Galle Road, Matara", " View Document"],
  ["988331229V", "22, Flower Road,Kandy", " View Document"],
  ["123666908234", "35, Odio Avenue, Colombo", " View Document"],
  ["732348956v", "40, Galle Road, Matara", " View Document"],
  ["988331229V", "22, Flower Road,Kandy", " View Document"],
  ["123666908234", "35, Odio Avenue, Colombo", " View Document"],
  ["732348956v", "40, Galle Road, Matara", " View Document"],
  ["988331229V", "22, Flower Road,Kandy", " View Document"],
  ["123666908234", "35, Odio Avenue, Colombo", " View Document"],
  ["732348956v", "40, Galle Road, Matara", " View Document"],
  ["988331229V", "22, Flower Road,Kandy", " View Document"],
  ["123666908234", "35, Odio Avenue, Colombo", " View Document"],
  ["732348956v", "40, Galle Road, Matara", " View Document"],
  ["988331229V", "22, Flower Road,Kandy", " View Document"],
];

export default function StickyHeadTable() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const rowsPerPage = "10";

  const handleOpen = () => setOpen(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "auto", boxShadow: 5 }}>
      <TableContainer
        sx={{
          maxHeight: 750,
          width: "100%",
          display: "table",
          tableLayout: "fixed",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ fontWeight: "bold", fontSize: 16 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row[0]}</TableCell>
                  <TableCell align="left">{row[1]}</TableCell>
                  <TableCell
                    align="left"
                    style={{ cursor: "pointer" }}
                    onClick={handleOpen}
                  >
                    <ArticleIcon
                      fontSize="large"
                      sx={{
                        color: "#757575",
                        ":hover": {
                          color: "#1188f0",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ cursor: "pointer" }}
                    onClick={handleOpen}
                  >
                    <CheckIcon
                      fontSize="large"
                      sx={{
                        color: "#757575",
                        ":hover": {
                          color: "#09914b",
                        },
                      }}
                    />
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{ cursor: "pointer" }}
                    onClick={handleOpen}
                  >
                    <DangerousIcon
                      fontSize="large"
                      sx={{
                        color: "#757575",
                        ":hover": {
                          color: "#cf0404",
                        },
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column, index) => {
                      return (
                        <TableCell>
                          <Stack direction="row" alignItems="center">
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={handleOpen}
                            >
                              {column}
                              {console.log(column)}
                            </div>
                            <NavigateNextIcon
                              fontSize="large"
                              sx={{ color: "#757575" }}
                            />
                          </Stack>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Model open={open} setOpen={setOpen} />
    </Paper>
  );
}
