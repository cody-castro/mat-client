import React from 'react'
import './App.css';
// import Map from './Map'
import Footer from './Footer'
import WelcomeCard from './WelcomeCard'
import MapCard from './MapCard'
import ReviewCard from './ReviewCard'

function Homepage(){

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://data.cityofnewyork.us/resource/he7q-3hwy.json", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return(    
        <>
            <WelcomeCard />
            <MapCard />
            <ReviewCard />
            <Footer />
        </>
    )
}

export default Homepage; 


