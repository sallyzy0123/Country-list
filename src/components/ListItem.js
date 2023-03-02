import React from 'react';
import { AiOutlineRight } from "react-icons/ai";
import {useNavigate} from 'react-router';
import {Link} from "react-router-dom";

const ListItem = ({country}) => {
    const languages = country.languages;
    const navigate = useNavigate();

    return (
      <tr>
        <td>
          <img src={country.flags.png} alt={country.flags.alt} />
        </td>
        <td>{country.name.common}</td>
        <td>{country.region}</td>
        <td>{country.population}</td>
        {Object.values(languages || {}).map((item, index) => {
          return (
            <td>
              <ul>
                <li key={index}>{item}</li>
              </ul>
            </td>
          );
        })}
        <td>
          <Link to={`/single/${country.name.common}`}>
            <AiOutlineRight />
          </Link>
        </td>
      </tr>
    );
}

export default ListItem;
