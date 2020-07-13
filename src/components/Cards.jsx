import React from 'react';
import '../assets/styles/Cards.css'

function Cards({name, flag, population, region, capital}) {

        return ( 
        <div className="content">
            <div className="card">
                <img loading='lazy' src={flag} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title"><strong>{name}</strong></p>
                    <p className="card-title"> <strong>Population:</strong> {population} </p>
                    <p className="card-title"> <strong>Region:</strong>{region} </p>
                    <p className="card-title"><strong>Capital:</strong>{capital} </p>
                </div>
            </div>
        </div>   
        )
}

export default Cards