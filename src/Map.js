import React from 'react';
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { NavLink } from 'react-router-dom';
import ReactMapGL, {Layer} from 'react-map-gl';






class Map extends React.Component {

  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      lat: 40.7831,
      lng: 73.9712,
      zoom: 15,
      pitch: 1.5, // pitch in degrees
      bearing: 28.81, // bearing in degrees

      // maxZoom: 18,
      // minZoom: 10
    },
    stationLayer:{
      id: 'ckg9gs84802ub22qow819e45r',
      type: 'circle',
      source: 'mapbox',
      'source-layer': 'Subway_Entrances_',
    }

  };

  
// fetch("http://localhost:3000/locations")


  render() {
        return (
<>
          <ReactMapGL {...this.state.viewport} onViewportChange={viewport => this.setState({viewport})} mapStyle="mapbox://styles/nycody/ckgcysc6u4htx19p7l9z0g4a1/draft" mapboxApiAccessToken="slack"/>
            <Layer {...this.state.stationLayer}  />
          <ReactMapGL />
</>
        )
    }

  }

export default Map; 


//Old Map stuff

// componentDidMount() {
  //     const map = new mapboxgl.Map({
    //       container: this.mapContainer, // HTML container id
    //       style: 'mapbox://styles/nycody/ckg70msbu0bsq19ntsnzxhz22/draft', // style URL + THIS IS A DRAFT NEEDS TO BE UPDATED!
    //       center: [this.state.lng, this.state.lat],
    //       zoom: this.state.zoom, 
    //       maxZoom: 18,
    //       minZoom: 10,
    //       pitch: this.state.pitch, 
    //       bearing: this.state.bearing
    //     })
    
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


    //     //Search Bar Begin
    //     const geocoder = new MapboxGeocoder({
      
//       accessToken: mapboxgl.accessToken,
//       marker: {
//       color: 'green'
//       },
//       mapboxgl: mapboxgl
//       });
//       map.addControl(geocoder);
// //Search Bar End
    

// map.on('click', function(e) {
//   var features = map.queryRenderedFeatures(e.point, {
//     layers: ['subway-entrances'] 
//   });

//   if (!features.length) {
//     return;
//   }

//   const feature = features[0];

//   const popup = new mapboxgl.Popup({ offset: [0, -15] })
//     .setLngLat(feature.geometry.coordinates)
//     .setHTML(
//       writeReview(feature) + `<a href="http://localhost:3001/review/"><button onClick="">Review It!</button></a>`
//       )
//     .addTo(map)
// });



// {/* <ReviewPage id={feature.properties.id}/> */}

//  function writeReview(feature)  {
//  return ('<strong>' 
//  + feature.properties.name + 
//  '</strong> <p> Lines: ' 
//  + feature.properties.line + 
//  '</p>' 
//  )
// }

//     //The ending bracket for compDidMount  
//   }
  


  
//   render() {


//     return (
//       <>
//       <div>
//         <div ref={el => this.mapContainer = el} className="mapContainer" />
//       </div>
//     </>
//       )
//     }