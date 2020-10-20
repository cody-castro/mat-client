import React, {useState, useRef, Component, useEffect} from 'react';
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import { NavLink } from 'react-router-dom';
import ReactMapGL, {Layer, Source, Popup, Marker} from 'react-map-gl';
import useSwr from "swr";
import useSupercluster from "use-supercluster";
import './Map.css'
import {Link, Route} from 'react-router-dom'
import ReviewPage from './ReviewPage'

const fetcher = (...args) => fetch(...args).then(response => response.json());

function Map() {
  
  const [viewport, setViewport] = useState( {
    latitude: 40.69813713083944,
    longitude: -73.9566481146791,
    zoom: 12.577032850735295,
    width: "100vw",
    height: "100vh",
    pitch: 1.5, // pitch in degrees
    bearing: 28.81, // bearing in degrees
  })

  let mapRef = useRef();
  
  // const [stations, setStations] = useState([])
  const [popups, setShowPopup] = useState(null)
  
  const stationDataUrl = "http://localhost:3000/locations/"
  const { data, error } = useSwr(stationDataUrl, { fetcher });
  const stations = data && !error ? data : [];

  const [reviewPage, setReviewPage] = useState(false)

  const [review, setReview] = useState(null)
  const [clickedStation, setClickedStation] = useState({})

  const [stationReviews, setStationReviews] = useState([])

    // const bounds = mapRef.current ? mapRef.current.getMap().getBounds().toArray().flat() : null;
      
      function closePopup() {
        setShowPopup(null)
      };
      

      function popupHandler(stationObj){
        setShowPopup(stationObj)
  }
  
  function writeReview(e){
    e.preventDefault()
    console.log("yeeee")
  }
  
  // function popupStuff(){
  //   return( )
  // }

  function getReviews(){
    // setStationReviews(popups.ratings.map( r => r.review ))
     return popups.ratings.map(r => <li>{r.review}</li>)
  }

  function submitHandler(reviewObj){
    fetch('http://localhost:3000/ratings/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           accept: "application/json"
    },
        body: JSON.stringify(reviewObj)
        }).then(resp=>resp.json()).then(data => {
        console.log(data)
        if (data != undefined){ 
          const newPopups = popups
          newPopups.ratings = [...newPopups.ratings, data]
          setShowPopup(newPopups)
          setReviewPage(false) 
        }
      })
}



 return (
          <>
          {reviewPage ? <ReviewPage stationId= {clickedStation} submitHandler={submitHandler} /> : 
            <ReactMapGL 
            {...viewport} 
            onViewportChange={newViewport => {setViewport({ ...newViewport })}} 
            mapStyle="mapbox://styles/nycody/ckgcysc6u4htx19p7l9z0g4a1/draft"  
            mapboxApiAccessToken="pk.eyJ1Ijoibnljb2R5IiwiYSI6ImNrZmcxZWFuejAzNWEydHIyMmw5eGIxaWwifQ.7p4RHp9R5RXRDe6YyktAnQ"
            // maxZoom={20}
            ref={mapRef}
            >
              {popups !== null ? (
                    <Popup
                      latitude={parseFloat(popups.coordinates.y)}
                      longitude={parseFloat(popups.coordinates.x)}
                      // onClose={()=>{closePopup()}}
                      closeButton="true"
                      id="popup"
                    >
                       <ul>
                        <li>
                          Location: {popups.name}
                        </li>
                        <li>
                          Subway Line: {popups.line}
                        </li>
                          {getReviews()}
                        <li>
                          <button onClick= {()=>{ setClickedStation(popups.id); setReviewPage(true)} }> Leave Review </button>
                        </li>
                      </ul>

                    </Popup>
              ) : null}



            {stations.map(station => (
                <Marker id={station.id} latitude={parseFloat(station.coordinates.y)} longitude={parseFloat(station.coordinates.x)} cluster={true}
                clusterMaxZoom={14}
                clusterRadius={2}
                ref={mapRef}>

                  <img height="15" width="relative" src="http://maps.google.com/mapfiles/ms/micons/rail.png" alt="station icon" onClick= {e => { popupHandler(station)}}></img>
                  
                </Marker>

              ))}

            </ReactMapGL>
          }

            {/* <Route path="/review" component={ReviewPage} /> */}
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