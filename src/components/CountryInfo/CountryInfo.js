import React from 'react';
import './CountryInfo.css';

const CountryInfo = (props) => {
    
    const {name,area,population ,flags} = props.country;
    return (
        <div className='landBox' id='black'>
            <h3 className='name-box'>Country Name: {name.common}</h3>
            <div>
                <img src={flags.png} alt="" />
            </div>
            <h6>Area: { area}</h6>
            <p>Population: {population }</p>
        </div>
    );
};

export default CountryInfo;