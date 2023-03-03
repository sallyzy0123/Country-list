import React from 'react';
import {useParams} from 'react-router';
import {AiOutlineLeft} from "react-icons/ai";
import {HiLocationMarker} from "react-icons/hi";
import {Link} from "react-router-dom";

function Single() {
  const { name } = useParams();

  return (
    <div class="card">
      <div class="card-header">
        <img src="" class="card-header-img" alt="..."></img>
        <h5 class="card-header-title">{name}</h5>
        <h6 class="card-header-subtitle">capital</h6>
      </div>
      <img src="..." class="card-img-middle" alt="..."></img>
      <div class="card-body">
        <p class="card-body-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div class="card-footer">
        <Link to="/">
          <AiOutlineLeft />
        </Link>
        <HiLocationMarker />
      </div>
    </div>
  );
}

export default Single;
