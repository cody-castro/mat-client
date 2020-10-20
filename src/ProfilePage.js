import React from 'react'
import './ProfilePage.css'

class ProfilePage extends React.Component {

state={
	userName: "",
	userBio: "",
	editButtonClicked: false, 
	editName: "",
	editBio: ""
}

componentDidMount(){
	fetch("http://localhost:3000/users/").then(resp => resp.json()).then(data => {
		this.setState((previousState)=>({ userName: data[0].name, userBio: data[0].bio }))
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
	console.log("Hello worldt")

// 	fetch(`http://localhost:3000/users/1`, {
// 	method: 'PATCH',
// 	headers: {
// 		"Content-Type": "application/json",
// 		"Accepts": "application/json"
// 	},
// 	body: JSON.stringify({
// 		name: this.state.editName,
// 		bio: this.state.editBio
// 	})
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// })
}


render(){
	if (this.state.editButtonClicked === true){
		
		return(
			<div>

				<div class= "card-container">

				<span class="pro">Commuter Profile</span>

				<img class="round" src="https://i.imgur.com/uI3sAT1.png" height="150px" alt="user" />

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
				<div class="skills">
					<h6>Reviews</h6>
					<ul>
						{/* <li>{this.state.reviews}</li> */}
					</ul>
				</div>
			</div>

					</div>
			)
		} else {
			return(
				<div>

				<div class= "card-container">

				<span class="pro">Commuter Profile</span>

				<img class="round" src="https://i.imgur.com/uI3sAT1.png" height="150px" alt="user" />
				<h2>{this.state.userName}</h2>
				<h6>New York</h6>
				<p>{this.state.userBio}</p>
				<div class="buttons">
					<button class="primary" onClick={()=>{ this.setState(()=>({ editButtonClicked: true }))}} >
						Edit Profile
					</button>
				</div>
				<div class="skills">
					<h6>Reviews</h6>
					<ul>
						{/* <li>{this.state.reviews}</li> */}
					</ul>
				</div>
			</div>

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