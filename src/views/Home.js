import React, {useEffect, useState} from 'react';
import {useCountry} from '../hooks/ApiHooks';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TableRows from '../components/TableRows';

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
  },);
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Country
            </Typography>
            <input
              className="search-input"
              type="text"
              placeholder="Search here"
              onChange={handleChange}
              value={searchInput}
            />
          </Toolbar>
        </AppBar>
        <TableContainer className="table-container" component={Paper}>
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
                )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
      </Box>
    );
}

export default Home;
