import React, { useEffect, useState } from 'react';
import '../assets/styles/Container.css';
import Cards from '../components/Cards';
import Search from '../components/Search';
import Filter from '../components/Filter';

function Container() {
const [countryList, setCountryList] = useState([])

 useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => {
        return response.json()
    })
    .then((data)=> {
        setCountryList(data)
      console.log(data) 
    })
    .catch(() => {
        console.log('Huno un error en el fetch')
    })
 }, [])
        return (
            <React.Fragment>
                <div className="Container">
                    <div className="row">
                        <div className="col" id='Container__buttons'>
                        <Search/>
                        <Filter />
                        </div>
                    </div>
                    <div className="row">

               
             
                {countryList.map(({ name, flag, population, region, capital }) => {
                    return(
                            <div className="col-md-4">
                                <div className="contenedor">
                                    <Cards 
                                        flag={flag}
                                        name={name}
                                        key={name}
                                        population={population} 
                                        region={region}
                                        capital={capital}
                                    />
                        </div>
                            </div>
                
                      

                    )
                })
           }
            </div>
            </div>
            </React.Fragment>
        )
    }

export default Container