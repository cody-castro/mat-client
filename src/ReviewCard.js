import React from 'react'
import "./ReviewCard.css";

function ReviewCard() {


    return(
    <div className="map-courses-container">
	    <div className="map-course">
		    <div className="map-course-preview">
			{/* <h6>Course</h6>  */}
			    <h2>Things you can do</h2>
			    <a href="#">some copy <i className="fas fa-chevron-right"></i></a>
		    </div>
		<div className="map-course-info">
			<div className="map-progress-container">
				<div className="map-progress"></div>
				<span className="map-progress-text">
					6/9 Challenges
				</span>
			</div>
			<h2>You can leave reviews and see everyone elses in real time to better plan your trip</h2>
			<button className="map-btn">Continue</button>
		</div>
	</div>
</div>


    )

}

export default ReviewCard;