import React from 'react'
import './LoginPage.css'




class LoginPage extends React.Component {

// state = {
//   userName: "",
//   userPass: "",
//   userBio: "",
// }

// changeHandler = (e) =>{
//   // e.preventDefault()
//   this.setState({
//     ...this.state,
//     [e.target.name]: e.target.value
//   });
// }

// signUp = () =>{
//   fetch('http://localhost:3000/users/', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//          accept: "application/json"
//   },
//       body: JSON.stringify({
//             whatsBeingChanged: theNewThing
//   })
//   }).then(resp=>resp.json()).then(data => functionYouWant(data))
// }




  render() {

    return(
       <div className="login-div">
         <input type="radio" checked id="toggle--login" name="toggle" class="ghost" />
         <input type="radio" id="toggle--signup" name="toggle" class="ghost" />

         <img class="logo framed" src="https://i.imgur.com/uI3sAT1.png" alt="MAT logo" />
        {/* <div className="logo framed"><strong>MAT Logo</strong></div> */}

        <form class="form form--login framed">
          <input type="email" placeholder="Email" class="input input--top" />
          <input type="password" placeholder="Password" class="input" />
          <input type="submit" value="Log in" class="input input--submit" />
          <a className="signup-link" href="http://localhost:3001/signup/"> New? Sign up </a>
        </form>

  {/* <form class="form form--signup framed">
    <h2 class="text text--centered text--omega">Start reviewing accessibility in NYC now!</h2>

    <input type="text" placeholder="Username" value={this.state.userValue} class="input input--top" onChange={(e)=>{this.changeHandler(e)}} name="userValue" />
    <input type="password" placeholder="Password"  value={this.state.userPass} class="input" onChange={(e)=>{this.changeHandler(e)}} name="userPass" />
    <input type="text" placeholder="Bio"  value={this.state.userBio} class="input" onChange={(e)=>{this.changeHandler(e)}} name="userBio" />
    <input type="submit" value="Sign up" class="input input--submit" />
    
    <label for="toggle--login" class="text text--small text--centered">Not new? <b>Log in</b></label>
  </form> */}



  <div className="fullscreen-bg"></div>
       </div >
    )
  }
}

export default LoginPage;