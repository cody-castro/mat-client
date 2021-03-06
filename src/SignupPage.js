import React from 'react'
// import './App.css'
import './SignupPage.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ProfilePage from './ProfilePage'

class SignupPage extends React.Component {

    state = {
        userName: "",
        userPass: "",
        userBio: "",
      }
      
      changeHandler = (e) =>{
        e.preventDefault()
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      }
      
  signUp = (e) =>{
    e.preventDefault()
         fetch('http://localhost:3000/users/', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
               accept: "application/json"
        },
            body: JSON.stringify({
                  name: this.state.userName,
                  password_digest: this.state.userPass,
                  bio: this.state.userBio
        })
        }).then(resp=>resp.json()).then(data => {
          console.log(data);
          localStorage.setItem( "currentUser", data.id ); 
          })
      }
      
      
render(){

  return(
        <div className="signuppage">
 <img class="logo framed" src="https://i.imgur.com/uI3sAT1.png" alt="MAT logo" />
            <form onSubmit={(e)=>{this.signUp(e)}} class="form form--signup framed">
                <h2 class="text text--centered text--omega">Start reviewing accessibility in NYC now!</h2>

                <input type="text" placeholder="Username" value={this.state.userName} class="input input--top" onChange={(e)=>{this.changeHandler(e)}} name="userName" />
                <input type="password" placeholder="Password"  value={this.state.userPass} class="input" onChange={(e)=>{this.changeHandler(e)}} name="userPass" />
                <input type="text" placeholder="Bio"  value={this.state.userBio} class="input" onChange={(e)=>{this.changeHandler(e)}} name="userBio" />
                <input type="submit" value="Sign up" class="input input--submit" />
                
                <label for="toggle--login" class="text text--small text--centered"><a href="http://localhost:3001/login">Not new? <b>Log in</b></a></label>
            </form>

<div className="fullscreen-bg"></div>
        </div>
    )
}

}

export default SignupPage