import React from 'react';
import {useParams} from 'react-router';

function Single() {
    const {name} = useParams();

    return (
        <div>
            <h1>single{name}</h1>
        </div>
    )
}

export default Single;
