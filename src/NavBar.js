import React from 'react'
import { NavLink } from 'react-router-dom';
import './App.css'
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
  borderRadius: '15px',
}
 
class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkgreen'
          }}
        >Home</NavLink>

        <NavLink to="/login" exact style={link} activeStyle={{ background: 'darkgreen' }}>Login</NavLink>
        <NavLink to="/signup" exact style={link} activeStyle={{  background: 'darkgreen' }}>Signup</NavLink>
        <NavLink to="/profile" exact style={link} activeStyle={{  background: 'darkgreen' }}>Profile</NavLink>
      </div>
    )
  }
}


export default NavBar;