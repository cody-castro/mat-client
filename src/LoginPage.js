import { render } from 'node-sass'
import React, { Component } from 'react'
import './LoginPage.css'

const userUrl = "http://localhost:3000/users"

class LoginPage extends Component {

  state={
    userName: "",
    userPass: "",
    userBio: "",
  }

addUser = () =>{
  fetch(userUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
  },
      body: JSON.stringify({
            whatsBeingChanged: "theNewThing"
  })
  }).then( resp=>resp.json() ).then( data => console.log(data) )
}


changeHandler = (e) =>{
  const value= e.target.value 
  this.setState({ ...this.state, [e.target.name]: value })
}


render(){
    return(
       <>
         <input type="radio" checked id="toggle--login" name="toggle" class="ghost" />
         <input type="radio" id="toggle--signup" name="toggle" class="ghost" />

         <img class="logo framed" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/MTA_NYC_logo.svg/1200px-MTA_NYC_logo.svg.png" alt="MAT logo" />
        {/* <div className="logo framed"><strong>MAT Logo</strong></div> */}

         <form class="form form--login framed">
    <input type="text" placeholder="Email" class="input input--top" />
    <input type="password" placeholder="Password" class="input" />
    <input type="submit" value="Log in" class="input input--submit" />
    
    <label for="toggle--signup" class="text text--small text--centered">New? <b>Sign up</b></label>
  </form>
  <form class="form form--signup framed">
    <h2 class="text text--centered text--omega">Start reviewing accessibility in NYC now!</h2>

    <input type="text" placeholder="Username" value={this.state.userName} onChange={this.changeHandler} name="userName" class="input input--top" />
    <input type="password" placeholder="Password" value={this.state.userPass} name="userPass" class="input" />
    <input type="text" placeholder="Bio" value={this.state.userBio} name="userBio" class="input" />
    <input type="submit" value="Sign up" class="input input--submit" />
    
    <label for="toggle--login" class="text text--small text--centered">Not new? <b>Log in</b></label>
  </form>


  <div class="fullscreen-bg"></div>
       </>
    )
}
}

export default LoginPage;