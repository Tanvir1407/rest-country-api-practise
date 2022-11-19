import React, { useEffect, useState } from 'react';
import CountryInfo from '../CountryInfo/CountryInfo';
import './Country.css';

const Country = () => {

    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data =>setCountry(data))
    },[])
    return (
        <div>
            <h1>Total Country No: {country.length}</h1>
            <div className='container'>
                 {
                country.map(landinfo => <CountryInfo
                    country={landinfo }
                    
                ></CountryInfo>)
            }
           </div>
        </div>
    );
};

export default Country;