import React from 'react';
import { Map as LeafletMap,TileLayer } from 'react-leaflet';
import './Map.css'
import { showDataOnMap } from '../../../util';
import {useSelector } from 'react-redux';

function Map(props){
    const {mapCenter,zoom,countries} = props;
    const casesType = useSelector(state => state.country.casesType)

    return (
        <div className="map">
            <LeafletMap center={mapCenter} zoom={zoom}>
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/dompham21/ckdkcajve10du1ion5r5cex7s/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZG9tcGhhbTIxIiwiYSI6ImNrZGtjYWFiazBuNWsycGxqZjlydHRna2YifQ.jVm45rHJIplmexOWcsVTKg"
                    attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                />
                {showDataOnMap(countries,casesType)}
            </LeafletMap>
        </div>
    )
}

export default Map;
