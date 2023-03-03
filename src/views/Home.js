import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {useCountry} from '../hooks/ApiHooks';
import TableRow from '../components/TableRow';
import {Table} from 'react-bootstrap';

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);
  const {getCountries} = useCountry();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getCountry = async () => {
    const countries = await getCountries();
    setCountries(countries);
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
        <div className="Home-tableList">
          <Table striped bordered hover responsive="xl">
            <tbody>
              <tr>
                <th>flag</th>
                <th>Name</th>
                <th>Regions</th>
                <th>Population</th>
                <th>Languages</th>
                <th></th>
              </tr>
              {countries
                .filter((item) =>
                  item.name.common.toLowerCase().includes(searchInput)
                )
                .map((country, index) => (
                  <TableRow key={index} country={country} />
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
}

export default Home;
