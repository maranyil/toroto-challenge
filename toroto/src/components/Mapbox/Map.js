import * as React from 'react';
import { Component } from 'react';
import '../../scss/Map.scss';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';

export default class Mapbox extends Component {
  state = {
    viewport: { longitude: -95.12766, latitude: 17.42847, zoom: 5 },
  };

  render() {
    const { viewport } = this.state;
    const MAPBOX_TOKEN =
      'pk.eyJ1IjoibWFyYW11bGF0byIsImEiOiJja2VhOGNtcXoyZHhkMnNwOG0xMTNjNmd5In0.ORehNnJ51xmK1KgnV-bdlA';

    return (
      <div className="myMap">
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="55vh"
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/maramulato/cklft68wv2ft517o803wzev97"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          styles="mapbox://styles/maramulato/cklfvay1616tq17memvcnr4mw"
        />
        <Marker
          latitude={15.15705}
          longitude={-92.28702}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p>Finca Guadalupe Zajú</p>
        </Marker>
        <Marker
          latitude={17.07602}
          longitude={-96.7146}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p>ICICO</p>
        </Marker>
        <Marker
          latitude={20.1231}
          longitude={-98.73146}
          offsetLeft={-10}
          offsetTop={-10}
        >
          <p>Recarga de acuífero en Hidalgo</p>
        </Marker>
      </ReactMapGL>
      </div>
    );
  }
}
