import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {AiOutlineLeft} from "react-icons/ai";
import {HiLocationMarker} from "react-icons/hi";
import {Link} from "react-router-dom";
import {useCountry} from '../hooks/ApiHooks';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function Single() {
  const {name} = useParams();
  console.log(name);
  const [countryInfo, setCountryInfo] = useState([]);
  const [flag, setFlag] = useState("");
  const [flagAlt, setFlagAlt] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setlng] = useState("");
  const {getCountryByName} = useCountry();
  const [independent, setIndependent] = useState(true);

  const getCountryInfo = async () => {
    const countryInfoArray = await getCountryByName(name);
    const countryInfo = countryInfoArray[0];
    console.log(countryInfo);
    setCountryInfo(countryInfo);
    setFlag(countryInfo.flags.png);
    setFlagAlt(countryInfo.flags.alt);
    setLat(countryInfo.latlng[0]);
    setlng(countryInfo.latlng[1]);
    setIndependent(countryInfo.independent);
  };

  useEffect(() => {
    getCountryInfo();
  }, []);

  return (
    <Card style={{ width: "600px" }}>
       <Card.Header className="single-card-header">
        <Image src={flag} alt={flagAlt} className="single-card-avatar"/> 
        <Card.Text>{name}</Card.Text>
        <Card.Text>{countryInfo.capital}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Image
          src={flag}
          alt={flagAlt}
          className="single-card-image"
        />
        <Card.Text>
          The country belongs to region and {countryInfo.subregion} sub-region.
          Located at the {lat} &#176;N and {lng} &#176;W, this country has population of {countryInfo.population}.
        </Card.Text>
        {independent ? (
          <Card.Text>
              it has gained the independent, according to the CIA World Factbook.
          </Card.Text>
        ) : (
          <Card.Text>
              it did not gain the indenpendent, according to the CIA World Factbook.
          </Card.Text>
        )}
      </Card.Body>
      <Card.Footer className="single-card-footer">
        <Link to="/">
          <AiOutlineLeft />
        </Link>
        <Link to="/">
          <HiLocationMarker />
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default Single;
