import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react'

export class GoogleMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

render() {
    console.log(this.props.playersCoordinates);
    console.log(this.props.playersCoordinates.username);
    return (
      <Map google={this.props.google} style={{width: '90%', height: '220%'}} zoom={11} initialCenter={{
        lat:40.730610,
        lng:-73.935242
      }}>

        {this.props.playersCoordinates.map(player =>
          <Marker name={player.username} position ={{lat: player.lat, lng: player.lng}}
            onClick={this.onMarkerClick}
          />)}

        <InfoWindow onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>

        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBd151XswU8eBsfwCXuklHv1_KjOi1rWg8')
})(GoogleMap)
