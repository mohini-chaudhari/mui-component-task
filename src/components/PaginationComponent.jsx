import { Box, Container, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

const TablePaginationActions=(props)=>{
  const theme = useTheme()
  const {count,page,rowsPerPage,onPageChange} = props

  const handleFirstPageButtonClick =(e)=>{
    onPageChange(e,0);
  }
  const handleBackButtonClick =(e)=>{
    onPageChange(e,page-1);
  }
  const handleNextButtonClick=(e)=>{
    onPageChange(e,page+1);
  }
  const handleLastPageButtonClick = (e)=>{
    onPageChange(e,Math.max(0,Math.ceil(count/rowsPerPage)-1))
  }
  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

TablePaginationActions.prototypes = {
  count: PropTypes.number.isRequired,
  onPageChange:PropTypes.func.isRequired,
  page:PropTypes.number.isRequired,
  rowsPerPage:PropTypes.number.isRequired,
}
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 19, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 20, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 21, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 22, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 23, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 24, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 25, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 26, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 27, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 28, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 29, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 30, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 31, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 32, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 33, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 34, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 35, lastName: 'Frances', firstName: 'Rossini', age: 36 },
];

const PaginationComponent = () => {
  const [page,setPage] = useState(0)
  const [rowsPerPage,setRowsPerPage] = useState(5)

  const emptyRows = page > 0 ? Math.max(0,(1+page)*rowsPerPage - rows.length):0;

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage =(e)=>{
    setRowsPerPage(parseInt(e.target.value,10));
    setPage(0);
  }
  return (
    <>
      <Container maxWidth='md'>
      <Typography variant="h4" align="center" gutterBottom>
        Pagination Component
      </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              :rows
            ).map((row)=>(
                <TableRow
                key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[3,5,8,10,{label:'All',value:-1}]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  ActionsComponent={TablePaginationActions}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default PaginationComponent
