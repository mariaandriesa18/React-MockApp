import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const DisplayInfo = ({match}) =>{
    
    const [country, setCountry] = useState({hits : []});
    
    React.useEffect( () => {

        const fetchCountry = async () =>{
            const result = await getCountryInfo(match.params.country);
            setCountry(result[0]);
        };

        fetchCountry()

    }, []);
     
    async function getCountryInfo(country){
        let queryStr = "https://restcountries.eu/rest/v2/name/" + country;
        let res;
        await fetch(queryStr, {method:'GET'}).then(response => response.json()).then(data => {res = data; console.log("data is"); console.log(data)});
        return res;
    }

    console.log(country);
    return(
        <div>
        {country != undefined}
        
            <ul>
            <li> Country : {country.name}</li>
            <li>Capital : {country.capital}</li>
            <li>Region : {country.region}</li>
            {/* <li>Language : {country.languages.name}</li> */}
            </ul>
            
           
        </div>
    );
}


export default DisplayInfo;