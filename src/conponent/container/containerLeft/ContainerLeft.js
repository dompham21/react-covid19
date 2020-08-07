import React from 'react';

import "./ContainerLeft.css"
import InfoBox from './InfoBox'
import Map from './Map';
import 'leaflet/dist/leaflet.css'


function ContainerLeft(props){
    const {onChangeCountries,countries,countryInfo,mapCenter,zoom} = props;
  
    return(
        <div className="container_left">
            <div className="container_stat_main">
                <div className="container_stat">      
                    <h3>Stats Overview</h3>
                    <select onChange={onChangeCountries}>
                        <option defaultValue="worldwide" value="worldwide">Worldwide</option>
                        {countries.map((item,index)=>(
                                <option key={index} value={item.countryInfo.iso2}>{item.country}</option>
                        ))}                
                    </select>
                </div>
                <InfoBox title="cases"  cases={countryInfo.cases}></InfoBox>
                <InfoBox title="recovered" cases={countryInfo.recovered}></InfoBox>
                <InfoBox title="deaths" cases={countryInfo.deaths}></InfoBox>
            </div>
            <Map mapCenter={mapCenter} zoom={zoom} countries={countries}></Map>
        </div>
    )
}

export default ContainerLeft;