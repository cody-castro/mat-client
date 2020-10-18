import React, {useState, useRef, Component} from 'react';
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import { NavLink } from 'react-router-dom';
import ReactMapGL, {Layer, Source, Popup, Marker} from 'react-map-gl';
import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then(resp => resp.json()).then(data => console.log(data))


function Map() {

  const [viewport, setViewport, setLayer] = useState( {
    latitude: 40.709244800046726,
    longitude: -73.84787727630345,
      width: "100vw",
      height: "100vh",
      zoom: 9.503816871606016,
      pitch: 1.5, // pitch in degrees
      bearing: 28.81, // bearing in degrees
      // layerData: {}
    })

    const mapRef = useRef();


    const stationDataUrl = "http://localhost:3000/locations"
    const {data, error} = useSwr(stationDataUrl, fetcher)

    const stations = data && !error ? data : [];


  //   stationLayer:{
  //     id: 'ckg9gs84802ub22qow819e45r',
  //     type: 'point',
  //     source: {},
  //     width: "100vw",
  //     height: "100vh",
  //   }
  // };


// function getData(){
//   fetch("http://localhost:3000/locations").then(resp => resp.json()).then(data => { 
//    return newLayerData => {setLayer( {...newLayerData} )}
//   })
// }  





return (
  <>
  {/* {console.log(stations)} */}
          <ReactMapGL 
          {...viewport} 
          onViewportChange={newViewport => {setViewport({ ...newViewport })}} 
          mapStyle="mapbox://styles/nycody/ckgcysc6u4htx19p7l9z0g4a1/draft"  
          mapboxApiAccessToken="pk.eyJ1Ijoibnljb2R5IiwiYSI6ImNrZmcxZWFuejAzNWEydHIyMmw5eGIxaWwifQ.7p4RHp9R5RXRDe6YyktAnQ"
          maxZoom={20}
          >
          {/*  <Source 
            type="GeoJSON">
              <Layer 
              {...this.state.stationLayer}
              />

            </Source> */}
            {stations.map(station => (
              <Marker className="station-popup" latitude={parseFloat(station.coordinates.x)} longitude={parseFloat(station.coordinates.y)} key={station.id}>
                <button>
                  <img src="https://cdn2.iconfinder.com/data/icons/train-circle-filled/100/023-_Train_-_Rail_-_Railroad_-_Railway_-_Tracks_-_Transport-512.png" alt="poop"/>
                </button>
              </Marker>
            ))}
          </ReactMapGL>
</>
        )

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