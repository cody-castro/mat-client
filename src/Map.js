import React, {useState, useRef, Component, useEffect} from 'react';
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import { NavLink } from 'react-router-dom';
import ReactMapGL, {Layer, Source, Popup, Marker} from 'react-map-gl';
import useSwr from "swr";
import useSupercluster from "use-supercluster";
import Modal from "./Modal"
var fs = require("fs")

const fetcher = (...args) => fetch(...args).then(response => response.json());


function Map() {
  
  const [viewport, setViewport] = useState( {
    latitude: 40.709244800046726,
    longitude: -73.84787727630345,
    width: "100vw",
    height: "100vh",
    zoom: 9.503816871606016,
    pitch: 1.5, // pitch in degrees
    bearing: 28.81, // bearing in degrees
  })

  let mapRef = useRef();
  
  // const [stations, setStations] = useState([])
  
  const [popups, setShowPopup] = useState(null)
  
  const stationDataUrl = "http://localhost:3000/locations/"
  
  const { data, error } = useSwr(stationDataUrl, { fetcher });
  const stations = data && !error ? data : [];

    const bounds = mapRef.current ? mapRef.current.getMap().getBounds().toArray().flat() : null;

    console.log(mapRef, mapRef.current);

  // function getData() {
  //     fetch(stationDataUrl).then(resp => resp.json()).then(data => setStations(data) )
  //   }

    const points = stations.map(station => ({
    type: "Feature",
    properties: { cluster: false, stationId: station.id, },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(station.coordinates.x),
        parseFloat(station.coordinates.y)]}
      }))
      
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom: viewport.zoom,
        options: { radius: 100, maxZoom: 45 }
      });
      
      console.log(clusters)
      // useEffect( ()=>{
      //   getData()
      // }, [])
      
      function closePopup() {
        setShowPopup(null)
      };
      

      function popupHandler(e){
        setShowPopup(e)
    // console.log(e)
  }
  
  function writeReview(e){
    e.preventDefault(e)
    // console.log("yeeee")
  }

console.log(clusters);
  
  function popupStuff(){
    return(
      <ul>
                        <li>
                          {popups.name}
                        </li>
                        <li>
                          {popups.line}
                        </li>
                        <li>
                          <div id="review" onClick={(e) =>{
                            console.log(e.targetValue)}}>Review This Station
                            </div>
                        </li>
                      </ul>
    )
  }



 return (
    <>
            <ReactMapGL 
            {...viewport} 
            onViewportChange={newViewport => {setViewport({ ...newViewport })}} 
            mapStyle="mapbox://styles/nycody/ckgcysc6u4htx19p7l9z0g4a1/draft"  
            mapboxApiAccessToken="pk.eyJ1Ijoibnljb2R5IiwiYSI6ImNrZmcxZWFuejAzNWEydHIyMmw5eGIxaWwifQ.7p4RHp9R5RXRDe6YyktAnQ"
            // maxZoom={20}
            ref={mapRef}
            >

              {clusters.map(cluster => {
                const [longitude, latitude] = cluster.geometry.coordinates;
                const {cluster: isCluster, point_count: pointCount} = cluster.properties;

                if (isCluster){
                  return (
                    <Marker key={cluster.id} latitude={latitude} longitude={longitude}>
                      <div className="cluster-marker">
                        {pointCount}
                      </div>
                    </Marker>
                  )
                }

                return (
                  <Marker key={cluster.properties.stationId} latitude={latitude} longitude={longitude} cluster={true}
                  clusterMinZoom={10}
                  // clusterRadius={.1}
                  >
                    <img height="20" width="relative" src="http://maps.google.com/mapfiles/ms/micons/rail.png" alt="station icon" onClick= { () => { popupHandler(latitude, longitude)} }></img>
                    
                  </Marker>
                )
              }
              )}

{popups !== null ? (
                    <Popup
                      latitude={parseFloat(popups.coordinates.y)}
                      longitude={parseFloat(popups.coordinates.x)}
                      // onClose={()=>{closePopup()}}
                      closeButton="true"
                      id="popup"
                    >
                      {popupStuff()}
                    </Popup>
                    ) : null}
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