import React from 'react';
import './App.css';
import Homepage from './Homepage'
import Map from './Map'
import NavBar from './NavBar'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import ReviewPage from './ReviewPage'
import ProfilePage from './ProfilePage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="/review/" component={ReviewPage} />
        </div>
      </Router>
    );
  }
}

export default App;



// function App() {
//   return (
//    <>
//     <NavBar />
//     <Homepage />
//    </>
//   );
// }

// export default App;
