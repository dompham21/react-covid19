import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';
import React from "react";

const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      multiplier: 400,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 800,
    },
    deaths: {
      hex: "#718096",
      multiplier: 800,
    },
  };

export const sortDataDescending = (data)=>{
    return [...data,data.sort((a,b)=> a.cases > b.cases ? -1 : 1 )] 
}

export const sortDataAscending = (data)=>{
    return [...data,data.sort((a,b)=> a.cases < b.cases ? -1 : 1 )]
}

export const showDataOnMap = (data,casesType="cases")=>(
    
    data.map((country,index)=>(
        
        <Circle key={index} center={[country.countryInfo.lat, country.countryInfo.long]}
                fillOpacity={0.4}
                color={casesTypeColors[casesType].hex}
                fillColor={casesTypeColors[casesType].hex}
                radius={
                    Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
                }

        >
             <Popup>
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    ></div>
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                        Cases: {numeral(country.cases).format("0,0")}
                    </div>
                    <div className="info-recovered">
                        Recovered: {numeral(country.recovered).format("0,0")}
                    </div>
                    <div className="info-deaths">
                        Deaths: {numeral(country.deaths).format("0,0")}
                    </div>
                </div>
            </Popup>

        </Circle>
    ))
        
)