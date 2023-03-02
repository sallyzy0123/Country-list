import React from 'react';

const ListItem = ({country}) => {
    const languages = country.languages;

    return (
      <tr>
        <td>
          <img src={country.flags.png} alt={country.flags.alt} />
        </td>
        <td>{country.name.common}</td>
        <td>{country.region}</td>
        <td>{country.population}</td>
        {Object.values(languages || {}).map((item) => {
          return (
            <td>
              <ul>
                <li>{item}</li>
              </ul>
            </td>
          );
        })}
      </tr>
    );
}

export default ListItem;
