import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Movie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>
                Movie Form {id}
            </h1>
            <button className='btn btn-primary' onClick={() => navigate('/')}>
                Save
            </button>
        </div>
    );
}
 
export default Movie;