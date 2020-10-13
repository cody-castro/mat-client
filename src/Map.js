import React, { Component } from 'react';
import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";



mapboxgl.accessToken = 'slack'


class Map extends Component {

  state = {
		lat: 40.7,
		lng: -73.96,
		zoom: 11,
		pitch: 1.5, // pitch in degrees
    bearing: 28.81, // bearing in degrees

	};

componentDidMount(){
  const map = new mapboxgl.Map({
    container: this.mapContainer, // HTML container id
    style: 'mapbox://styles/nycody/ckg70msbu0bsq19ntsnzxhz22', // style URL
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom, 
    maxZoom: 18,
    minZoom: 10,
    pitch: this.state.pitch, 
    bearing: this.state.bearing
  })
}
  












  render() {

    return (
    <>
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    </>
      )
  }





}

export default Map 

