import React, { Component } from 'react';
import './DetailView.css';
import GoogleMapsContainer from '../GoogleMapsContainer/GoogleMapsContainer';
import { CSSTransition } from 'react-transition-group';
import backBtn from '../../assets/icons/ic_webBack@2x.png';

export default class DetailView extends Component {

    state = {
        showDetailView: this.props.showDetailView
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showDetailView: nextProps.showDetailView
        });
    }

    render() {

        // const style = this.state.showDetailView ? {
        //     left: '0'
        // } : {
        //     left: '-100vw'
        // }

        const { name, category } = this.props.selectedRestaurant ? 
            this.props.selectedRestaurant : { name: '', category: '' };

        const { lat, lng, address, city, state, postalCode } = this.props.selectedRestaurant ? 
            this.props.selectedRestaurant.location : { lat: 0, lng: 0, address: '' };

        const { phone, twitter } = this.props.selectedRestaurant && this.props.selectedRestaurant.contact ? 
            this.props.selectedRestaurant.contact : { phone: '(xxx) xxx - xxxx', twitter: '' };

        return (
            <CSSTransition
              in={this.state.showDetailView}
              timeout={300}
              classNames="DetailView"
              unmountOnExit
              onExited={() => {
                // this.setState({
                //   /
                // });
              }}
            > 
                <div className="DetailView">
                    <div className="DetailView__back-button" onClick={this.props.backButtonClickHandler}>
                        <img src={ backBtn } alt="back button" />
                    </div>
                    <div className="DetailView__map">
                        <GoogleMapsContainer 
                            selectedRestaurant={this.props.selectedRestaurant}
                            coords={{lat, lng}}
                        />
                    </div>
                    <div className="DetailView__details">
                        <div className="DetailView__name-bar">
                            <div className="DetailView__name-bar-content">
                                <div className="DetailView__name">
                                    { name }
                                </div>
                                <div className="DetailView__category">
                                    { category }
                                </div>
                            </div>
                        </div>
                        <div className="DetailView__contact">
                            <div className="DetailView__address">
                                <div>{ address }</div>
                                <div>{ `${city}, ${state} ${postalCode}` }</div>
                            </div>
                            {
                                // true && expression = expression
                                this.props.selectedRestaurant && this.props.selectedRestaurant.contact &&
                                <div>
                                    <div className="DetailView__phone">
                                        { phone }
                                    </div>
                                    <div className="DetailView__twitter">
                                        { '@' + twitter }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    }
}