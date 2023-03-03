import React from 'react';
import {AiOutlineRight} from "react-icons/ai";
import {Link} from "react-router-dom";
import Image from 'react-bootstrap/Image';

const TableBody = ({country}) => {
    const languages = country.languages;

    return (
      <tr>
        <td>
          <Image className="table-body-flag" thumbnail 
            src={country.flags.png} alt={country.flags.alt} 
          />
        </td>
        <td>{country.name.common}</td>
        <td>{country.region}</td>
        <td>{country.population}</td>
        <td>
          <ul>
            {Object.values(languages || {}).map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </td>
        <td>
          <Link to={`/single/${country.name.common}`}>
            <AiOutlineRight />
          </Link>
        </td>
      </tr>
    );
}

export default TableBody;
