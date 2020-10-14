import React, { Component } from 'react';
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { NavLink } from 'react-router-dom';




mapboxgl.accessToken = 'slack'


class Map extends Component {

  state = {
		lat: 40.7,
		lng: -73.96,
		zoom: 11,
		pitch: 1.5, // pitch in degrees
    bearing: 28.81, // bearing in degrees
    subwayLine: []
  };
  
  
  // getSubwayLines = ()=>{
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch("https://data.cityofnewyork.us/resource/s7zz-qmyz.json", requestOptions)
  //   .then(response => response.json())
  //   .then(result => console.log(result[0]["the_geom"]["coordinates"]))
  //   .catch(error => console.log('error', error))
  // }
  
  
  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer, // HTML container id
      style: 'mapbox://styles/nycody/ckg70msbu0bsq19ntsnzxhz22/draft', // style URL + THIS IS A DRAFT NEEDS TO BE UPDATED!
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom, 
      maxZoom: 18,
      minZoom: 10,
      pitch: this.state.pitch, 
      bearing: this.state.bearing
    })
    
    //Search Bar Begin
    const geocoder = new MapboxGeocoder({

      accessToken: mapboxgl.accessToken,
      marker: {
      color: 'green'
      },
      mapboxgl: mapboxgl
      });
      map.addControl(geocoder);
//Search Bar End
    

map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['subway-entrances'] 
  });

  if (!features.length) {
    return;
  }

  const feature = features[0];

  const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      writeReview(feature) + `<a href="http://localhost:3000/review"><button onClick="">Review It!</button></a>`
      )
    .addTo(map)
});



{/* <ReviewPage id={feature.properties.id}/> */}

 function writeReview(feature)  {
 return ('<strong>' 
 + feature.properties.name + 
 '</strong> <p> Lines: ' 
 + feature.properties.line + 
 '</p>'
 )
}

    //The ending bracket for compDidMount  
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

