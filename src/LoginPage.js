import React from 'react'
import './LoginPage.css'


function LoginPage() {


    return(
       <>
         <input type="radio" checked id="toggle--login" name="toggle" class="ghost" />
         <input type="radio" id="toggle--signup" name="toggle" class="ghost" />

         <img class="logo framed" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/MTA_NYC_logo.svg/1200px-MTA_NYC_logo.svg.png" alt="MAT logo" />
        {/* <div className="logo framed"><strong>MAT Logo</strong></div> */}

         <form class="form form--login framed">
    <input type="email" placeholder="Email" class="input input--top" />
    <input type="password" placeholder="Password" class="input" />
    <input type="submit" value="Log in" class="input input--submit" />
    
    <label for="toggle--signup" class="text text--small text--centered">New? <b>Sign up</b></label>
  </form>
  <form class="form form--signup framed">
    <h2 class="text text--centered text--omega">Start reviewing accessibility in NYC now!</h2>

    <input type="text" placeholder="Username" class="input input--top" />
    <input type="password" placeholder="Password" class="input" />
    <input type="text" placeholder="Bio" class="input" />
    <input type="submit" value="Sign up" class="input input--submit" />
    
    <label for="toggle--login" class="text text--small text--centered">Not new? <b>Log in</b></label>
  </form>
  <div class="legal">
    <a class="text text--small text--border-right" href="javascript:;">Terms</a>
    <a class="text text--small text--border-right" href="javascript:;">Privacy</a>
    <a class="text text--small" href="javascript:;">Password help</a>
  </div>


  <div class="fullscreen-bg"></div>
       </>
    )
}

export default LoginPage;