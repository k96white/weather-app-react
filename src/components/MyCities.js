import React, { Component } from "react";
import Axios from "axios";

export default class MyCities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityInfo: [],
    };
    this.removeCity = this.removeCity.bind(this);
  }

  componentDidMount() {
    this.getCities();
  }
  componentDidUpdate() {
    this.getCities();
  }

  getCities = () => {
    Axios.get(
      "https://react-firebaseaxiosdemo.firebaseio.com/myCities.json"
    ).then((res) => {
      this.setState({
        cityInfo: res.data,
      });
    });
  };
  removeCity = (event) => {
    console.log("inside remove city");
    const id = event.target.value; // value to delete
    if (window.confirm("Do you want to delete?")) {
      Axios.delete(
        `https://react-firebaseaxiosdemo.firebaseio.com/myCities/${id}.json`
      )
        .then((res) => console.log("deleted successful"))
        .catch((err) => console.log("error:" + err));
    }
  };

  render() {
    let items = null;

    if (this.state.cityInfo !== null) {
      items = Object.entries(this.state.cityInfo).map((item) => {
        return (
          <>
            <li className="citylist" key={item.toString()}>
              <span>
                City Name:<strong>{item[1].name}</strong>
              </span>
              <span>
                Temperature:<strong>{item[1].temp} K</strong>
              </span>
              <span>
                Data added on:<strong>{item[1].date}</strong>
              </span>
              <button
                value={item[0]}
                className="btn btn-dark removeBtn"
                onClick={this.removeCity}
              >
                Remove
              </button>
            </li>
            <br />
          </>
        );
      });
    } else {
      items = <h6>No City has been Added to your List</h6>;
    }
    return (
      <div className="container">
        <h3 className="myCityHeader">My Cities</h3>
        <br />
        <ul>{items}</ul>
      </div>
    );
  }
}
