import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';
import {useCountry} from '../hooks/ApiHooks';

function List() {
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
    <div>
        <table>
            <tbody>
            <tr>
                <th>flag</th>
                <th>Nation</th>
                <th>Regions</th>
                <th>Population</th>
                <th>Languages</th>
            </tr>
            {countries.map((country) => (
                <ListItem key={country.id} country={country}/>
            ))}
            </tbody>
            
            
        </table>
    </div>
  )
}

export default List;
