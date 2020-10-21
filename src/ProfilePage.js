import React from 'react'
import './ProfilePage.css'

class ProfilePage extends React.Component {

state={
	userName: "",
	userBio: "",
	editButtonClicked: false, 
	editName: "",
	editBio: "",
	reviews: []
}

componentDidMount(){
	let userId = localStorage.getItem("currentUser")
	fetch("http://localhost:3000/users/" + userId).then(resp => resp.json()).then(data => {
		this.setState((previousState)=>({ userName: data.name, userBio: data.bio, reviews: data.ratings }))

	})
}


changeHandler = (e) =>{
	e.preventDefault()
	this.setState({
		...this.state,
		[e.target.name]: e.target.value
	});
}

submitHandler = (e) =>{
	e.preventDefault()
	let userId = localStorage.getItem("currentUser")
	fetch(`http://localhost:3000/users/` + userId, {
	method: 'PATCH',
	headers: {
		"Content-Type": "application/json",
		"Accepts": "application/json"
	},
	body: JSON.stringify({
		name: this.state.editName,
		bio: this.state.editBio
	})
}).then(response => response.json()).then(data => { 
	this.setState(()=>({ ...this.state, userName: data.name, userBio: data.bio, editButtonClicked: !this.state.editButtonClicked }))
})
}

getReviews = ()=> {
	console.log(this.state.reviews)
	let reviewArray = this.state.reviews
	 return reviewArray.map(
		 r => 
	<li>{r.review}
		<button style={{color: "red", background: "transparent", border:"transparent"}} alt="delete review" onClick={()=>this.deleteReview(r.id)}> x</button>
	</li>
	)
  }


deleteReview = (reviewId)=>{
	fetch('http://localhost:3000/ratings/' + reviewId, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
	}).then(resp => resp.json()).then(data =>{
		this.setState({ reviews: data })
	 })
}

logOut = () =>{
	return (localStorage.removeItem("currentUser"),
	 window.alert("Thanks for using My Accessible Transit!"))
}

render(){
	if (this.state.editButtonClicked === true){
		
		return(
			<div className="profile-page">

				<div className= "card-container">

				<span className="pro">Commuter Profile</span>
				

				<img className="round" src="https://i.imgur.com/uI3sAT1.png" height="150px" alt="user" />

				<form onSubmit={(e)=>{this.submitHandler(e)}}>
					<input value={this.state.editName} name="editName" placeHolder={this.state.userName} onChange={(e)=>{this.changeHandler(e)}}></input>
					<h6>Edit profile</h6>
					<p><input type="text-field" value={this.state.editBio} name="editBio" placeHolder={this.state.userBio} onChange={(e)=>{this.changeHandler(e)}}></input></p>
					<div class="buttons">
						<button type="submit" class="primary" >
							Submit Changes
						</button>
					</div>
				</form>
				<div className="skills">
					<h6>Reviews</h6>
					<ul>
						{/* <li>{this.getReviews()}</li> */}
					</ul>
				</div>
			</div>

					</div>
			)
		} else {
			return(
				<div className="profile-page">

				<div className= "card-container">

				<span className="pro">Commuter Profile</span>
				<button className="logout" onClick={this.logOut}> Log Out </button>

				<img class="round" src="https://i.imgur.com/uI3sAT1.png" height="150px" alt="user" />
				<h2>{this.state.userName}</h2>
				<h6>New York</h6>
				<p>{this.state.userBio}</p>
				<div class="buttons">
					<button className="primary" onClick={()=>{ this.setState(()=>({ editButtonClicked: true }))}} >
						Edit Profile
					</button>
				</div>
				<div class="skills">
					<h6>Reviews</h6>
					<ul>
					{ this.getReviews() }
						<li>
							{/* {this.state.reviews.review} */}
						</li>
					</ul>
				</div>
			</div>
			<div className="background"></div>
					</div>
			)
		}
		
	}
}

export default ProfilePage;





// profilePage = ()=>{
// 	return(

// <div>

// <div class="card-container">

// <span class="pro">Commuter Profile</span>

// <img class="round" src="https://i.imgur.com/uI3sAT1.png" height="150px" alt="user" />
// <h2>{this.state.userName}</h2>
// <h6>New York</h6>
// <p>{this.state.userBio}</p>
// <div class="buttons">
// 	<button class="primary">
// 		Message
// 	</button>
// </div>
// <div class="skills">
// 	<h6>Skills</h6>
// 	<ul>
// 		<li>UI / UX</li>
// 		<li>Front End Development</li>
// 		<li>HTML</li>
// 		<li>CSS</li>
// 		<li>JavaScript</li>
// 		<li>React</li>
// 		<li>Node</li>
// 	</ul>
// </div>
// </div>

// 	</div>

// 	)
// }