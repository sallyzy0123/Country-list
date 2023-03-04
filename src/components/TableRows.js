import React from 'react';
import {AiOutlineRight} from "react-icons/ai";
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TableRows = ({country}) => {
    const languages = country.languages;

    return (
      <TableRow>
        <TableCell align="center">
          <Image className="table-body-flag" thumbnail 
             src={country.flags.png} alt={country.flags.alt} 
           />
          </TableCell>
        <TableCell align="center">{country.name.common}</TableCell>
        <TableCell align="center">{country.region}</TableCell>
        <TableCell align="center">{country.population}</TableCell>
        <TableCell align="center">
        <ul>
            {Object.values(languages || {}).map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </TableCell>
        <TableCell align="center">
        <Link to={`/single/${country.name.common}`}>
            <AiOutlineRight />
          </Link>
        </TableCell>
      </TableRow>
    );
}

export default TableRows;
