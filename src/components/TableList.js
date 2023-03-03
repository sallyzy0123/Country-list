import React, {useEffect, useState} from 'react';
import TableBody from './TableBody';
import {useCountry} from '../hooks/ApiHooks';
import {Table} from 'react-bootstrap';

function TableList() {
  const [countries, setCountries] = useState([]);
  const {getCountries} = useCountry();

  const getCountry = async () => {
    const countries = await getCountries();
    // console.log(countries);
    setCountries(countries);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="Home-tableList">
        <Table striped bordered hover 
          responsive="xl" >
            <tbody >
            <tr>
                <th>flag</th>
                <th>Nation</th>
                <th>Regions</th>
                <th>Population</th>
                <th>Languages</th>
                <th></th>
            </tr>
            {countries.map((country, index) => (
                <TableBody key={index} country={country}/>
            ))}
            </tbody>
            
            
        </Table>
    </div>
  )
}

export default TableList;
