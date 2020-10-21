import React from 'react'
import './App.css';
// import Map from './Map'
import Footer from './Footer'
import WelcomeCard from './WelcomeCard'
import MapCard from './MapCard'
import ReviewCard from './ReviewCard'

function Homepage(){

//     const requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };
//       function getData(){
//       fetch("https://cors-anywhere.herokuapp.com/https://cody-castro.github.io/Data/Subway%20Entrances%20(3).geojson", requestOptions)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//       }

// getData()

    return(    
        <div className="homepage" >
            <WelcomeCard />
            <MapCard />
            <ReviewCard />
            <Footer />
        </div>
    )
}

export default Homepage; 


