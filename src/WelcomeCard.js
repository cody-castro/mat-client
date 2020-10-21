import React from 'react'
import "./WelcomeCard.css"

function WelcomeCard() {


    return(
    <div className="home-courses-container">
	    <div className="home-course">
		    <div className="home-course-preview">
			{/* <h6>Course</h6>  */}
			    <h2>Welcome to My Accessible Transit</h2>
			    <a href="#">some copy <i className="fas fa-chevron-right"></i></a>
		    </div>
		<div className="home-course-info">
			<div className="home-progress-container">
				<div className="home-progress"></div>
				<span className="home-progress-text">
					6/9 Challenges
				</span>
			</div>
			<h2>Copy</h2>
			<button className="home-btn">Continue</button>
		</div>
	</div>
</div>


    )

}

export default WelcomeCard;