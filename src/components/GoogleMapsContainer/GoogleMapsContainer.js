import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import './GoogleMapsContainer.css';

class GoogleMapsContainer extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            windowWidth: window.innerWidth
        }

        window.onresize = () => {
            this.setState({
                windowWidth: window.innerWidth
            });
        };
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    render() {
        //resize logic
        const style = window.innerWidth < 768 ? {
            width: '100%',
            height: '180px',
            'marginLeft': 'auto',
            'marginRight': 'auto',
        } : {
            width: '100%',
            height: 'calc(100vh - 65px)',
            'marginLeft': 'auto',
            'marginRight': 'auto',
        }

        const { name, location, contact } = this.props.selectedRestaurant;

        const { address, lat, lng } = location;

        const { formattedPhone: phone } = contact ? contact : { formattedPhone: '(xxx) xxx - xxxx'}

        return (
            <Map
                style={style}
                google={this.props.google}
                onClick={this.onMapClick}
                zoom={14}
                initialCenter={{ lat: 39.648209, lng: -75.711185 }}
                center={{lat, lng}}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    title={name}
                    position={{lat, lng}}
                    name={name}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={()=>{ this.setState({ showingInfoWindow: false });}}
                >
                    <div className="InfoWindow__content">
                        <div className="InfoWindow__name">{name}</div>
                        <p>
                            <div className="InfoWindow__address">{address}</div>
                            <div className="InfoWindow__phone">{phone}</div>
                        </p>
                    </div>  
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAVbFh6eaFLcoclWQZbrgnbgShmnj-TXc8")
})(GoogleMapsContainer)