import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";

const columns = [
  { id: 'nic', label: 'NIC', minWidth: 100 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 500,
  },
  {
    id: 'more',
    label: 'Document',
    minWidth: 170,
  },
];

function createData(nic, address, more) {
  //const density = population / size;
  return { nic, address, more };
}

const rows = [
  createData('123666908234', '35, Odio Avenue, Colombo', ' View Document'),
  createData('732348956v','40, Galle Road, Matara' ,' View Document'),
  createData('988331229V', '22, Flower Road,Kandy'  ,' View Document'),
  createData('123666908234', '35, Odio Avenue, Colombo', ' View Document'),
  createData('732348956v','40, Galle Road, Matara' ,' View Document'),
  createData('988331229V', '22, Flower Road,Kandy'  ,' View Document'),
  createData('123666908234', '35, Odio Avenue, Colombo', ' View Document'),
  createData('732348956v','40, Galle Road, Matara' ,' View Document'),
  createData('988331229V', '22, Flower Road,Kandy'  ,' View Document'),
  createData('123666908234', '35, Odio Avenue, Colombo', ' View Document'),
  createData('732348956v','40, Galle Road, Matara' ,' View Document'),
  createData('988331229V', '22, Flower Road,Kandy'  ,' View Document'),
  createData('123666908234', '35, Odio Avenue, Colombo', ' View Document'),
  createData('732348956v','40, Galle Road, Matara' ,' View Document'),
  createData('988331229V', '22, Flower Road,Kandy'  ,' View Document'),
  createData('123666908234', '35, Odio Avenue, Colombo', ' View Document'),
  createData('732348956v','40, Galle Road, Matara' ,' View Document'),
  createData('988331229V', '22, Flower Road,Kandy'  ,' View Document'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = "10";

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'auto', boxShadow: 5 }}>
      <TableContainer sx={{ maxHeight: 750, width: "100%", display: "table", tableLayout: "fixed"}}>
        <Table stickyHeader aria-label="sticky table" sx={{fontSize: "7rem"}}>
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{fontWeight:"bold", fontSize:16}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * 10, page * 10 + 10)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      if(column.id === 'more'){
                        return (
                          <TableCell key={column.id} align={column.align} sx={{padding: "1px"}}>
                            <Stack direction='row' alignItems='center' >
                            <Link to='/admin/document' style={{textDecoration: 'none', color:'#616161'}}>{value}</Link>
                            <NavigateNextIcon sx={{ color: '#757575' }}/>
                            </Stack>
                          </TableCell>
                        );
                      }else{
                        return (
                            <TableCell key={column.id} align={column.align} sx={{fontWeight:'medium', p:1, pl:2}}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={rows.length}
        rowsPerPage= "10"
        page={page}
        onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}