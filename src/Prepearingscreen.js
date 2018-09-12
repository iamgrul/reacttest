import React, { Component } from 'react';
import './Prepearingscreen.css';

class Prepearingscreen extends Component {
  render() {
      return (
          <div className="Prepearingscreen">
              <div className="title">
                  <h1>Hi!</h1>
                  <h2>Almost ready to start</h2>
                  <p>Leave:</p>
              </div>
              <div className="counter"></div>
          </div>
      );
  }
}

export default Prepearingscreen;

