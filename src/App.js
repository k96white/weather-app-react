import React, { Component } from 'react'
import Navbar from './components/Navbar';
// import City from './components/City';
// import WeatherInfo from './components/WeatherInfo';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import MyCities from './components/MyCities';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cityName : ''
    }
  }
  
  // getSelectedCity = (cityName) =>{
  //    this.setState({
  //      cityName : cityName
  //    })
  // }
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar /> <br/>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path ='/MyCities' component={MyCities}></Route>
                <Route component={notFound}></Route>
            </Switch>
        </div>
      </Router>
    )
  }
}

const notFound = () =>{
  return <h1>Page not Found</h1>
}



