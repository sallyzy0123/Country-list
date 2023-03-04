import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {orange} from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import {useParams} from 'react-router';
import {useCountry} from '../hooks/ApiHooks';

const Single = () => {
  const {name} = useParams();
  const [countryInfo, setCountryInfo] = useState([]);
  const [firstLetter, setFirstLetter] = useState("");
  const [flag, setFlag] = useState("");
  const [flagAlt, setFlagAlt] = useState("");
  const [independent, setIndependent] = useState(true);
  const [lat, setLat] = useState("");
  const [lng, setlng] = useState("");
  const {getCountryByName} = useCountry();

  const getCountryInfo = async () => {
    const countryInfoArray = await getCountryByName(name);
    const countryInfo = countryInfoArray[0];
    setCountryInfo(countryInfo);
    setFirstLetter(countryInfo.altSpellings[0].substring(0,1))
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
    <Card className="single-card">
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: orange[500] }}>{firstLetter}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={countryInfo.capital}
      />
      <CardMedia component="img" height="194" image={flag} alt={flagAlt} />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          The country belongs to <b>{countryInfo.region}</b> region and{" "}
          <b>{countryInfo.subregion}</b> sub-region. Located at the <b>{lat}</b>{" "}
          &#176;N and <b>{lng}</b> &#176;W, this country has population of{" "}
          <b>{countryInfo.population}</b> and it
          {independent ? " has " : " has not "} gained the independent,
          according to the CIA World Factbook.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="back-to-home">
          <Link to="/">
            <ChevronLeftIcon />
          </Link>
        </IconButton>
        <IconButton aria-label="location">
          <LocationOnIcon />
        </IconButton>
        <IconButton aria-label="expand">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Single;
