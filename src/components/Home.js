import React, { Component } from 'react';
import City from './City';
import WeatherInfo from './WeatherInfo';

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cityName : ''
        }
    }

    getSelectedCity = (cityName) =>{
        this.setState({
          cityName : cityName
        })
     }
    
    render() {
        return (
            <div>
                <City getSelectedCity = {this.getSelectedCity}/> <br/>
                <WeatherInfo cityName = {this.state.cityName} showInfo={false}/>
            </div>
        )
    }
}
