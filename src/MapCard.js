import React from 'react'
import "./MapCard.css"

function MapCard() {


    return(
    <div className="map-courses-container">
	    <div className="map-course">
		    <div className="map-course-preview">
			{/* <h6>Course</h6>  */}
			    <h2>Check out our map and start reviewing subway stations</h2>
			    <a href="#"> <i className="fas fa-chevron-right"></i></a>
		    </div>
		<div className="map-course-info">
			<div className="map-progress-container">
				<div className="map-progress"></div>
				<span className="map-progress-text">
				
				</span>
			</div>
			<h2>some copy about subway accessibility and how the MTA is neglects upkeep</h2>
			<button className="map-btn"><a href="http://localhost:3001/map">Continue</a></button>
		</div>
	</div>
</div>


    )

}

export default MapCard;