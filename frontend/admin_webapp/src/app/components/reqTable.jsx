import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Axios from "axios";

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
        <Table stickyHeader aria-label="sticky table">
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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      if(column.id === 'more'){
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Stack direction='row' alignItems='center' >
                            <Link href='/admin/document' underline='none' color='#616161'>{value}</Link>
                            <NavigateNextIcon fontSize='large' sx={{ color: '#757575' }}/>
                            </Stack>
                          </TableCell>
                        );
                      }else{
                        return (
                            <TableCell key={column.id} align={column.align} sx={{fontWeight:'medium'}}>
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
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}