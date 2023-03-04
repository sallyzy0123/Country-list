import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {useCountry} from '../hooks/ApiHooks';
import TableRows from '../components/TableRows';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const {getCountries} = useCountry();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getCountry = async () => {
    const countries = await getCountries();
    setCountries(countries);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    getCountry();
  },[]);
  
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <h1>Country</h1>
            <input
              type="text"
              placeholder="Search here"
              onChange={handleChange}
              value={searchInput}
            />
          </Container>
        </Navbar>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Flag</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Regions</TableCell>
                <TableCell align="center">Population</TableCell>
                <TableCell align="center">Languages</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries
                .filter((item) =>
                  item.name.common.toLowerCase().includes(searchInput)
                ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((country, index) => (
                  <TableRows key={index} country={country} />
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  count={countries.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    );
}

export default Home;
