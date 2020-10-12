import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '75%'
  
};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };


      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    


  render() {
    return (
<>

      <Map
        google={this.props.google}
        zoom={10}    
        style= {mapStyles}
        initialCenter={
          {
            lat: 40.6894,
            lng: -73.9003
          }
        }
        
      ><Marker
      onClick={this.onMarkerClick}
    //   name={`Hello World`}
    />
    <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
    >
      <div>
        <h4>
            This Place
        </h4>
        <ul>
            <li>Is Restaraunt</li>
            <li>Has Steps</li>
        </ul>
            <button>Write Review</button>
      </div>
    </InfoWindow>
    </Map>
    </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);