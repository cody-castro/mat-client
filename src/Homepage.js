import React from 'react'
import './App.css';
import Map from './Map'
import Footer from './Footer'
import WelcomeCard from './WelcomeCard'
import MapCard from './MapCard'
import ReviewCard from './ReviewCard'

function Homepage(){


    return(
      
<>
<WelcomeCard />
<MapCard />
<ReviewCard />
<Footer />
<Map/>
</>

    )
}

export default Homepage; 


