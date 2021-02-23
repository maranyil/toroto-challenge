import React from 'react';
import Mapbox from '../components/Mapbox/Map';
import Maininfo from '../components/Maininfo/Maininfo';
import Otherinfo from '../components/Maininfo/Otherinfo';


const Toroto = () => {
    return (
        <div className = "toroto">
        <Maininfo />
        <Mapbox />
        <Otherinfo />
        </div>
    )
}

export default Toroto;
