import React, { Component } from 'react';
import axios from 'axios';

export default class City extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             city : []
        }
    }
    
    // fetch city names from firebase
    componentDidMount(){
        axios.get('https://react-firebaseaxiosdemo.firebaseio.com/cities.json')
        .then(
               res => {
                        console.log(res) 
                        this.setState({
                            city : res.data
                        })
                        console.log(this.state.city);
             }
            )
        .catch(err => {
                        console.log(err);
                        alert('Some server issue, check your internet');
                    })
    }
    
    handleSelected = (e) =>{
        this.props.getSelectedCity(e.target.value);
    }
    render() {
        const getCity = Object.values(this.state.city).map( i => (
            <option key={i} value={i}>{i}</option>
        ))
        return (
            <div>
                 <label htmlFor='cityName'>Select A City:</label>
                 <select id='cities'  onChange={this.handleSelected}>
                     <option>Not selected</option>
                    {getCity}
                 </select>
            </div>
        )
    }
}
