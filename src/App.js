import React, { Component } from 'react';
import './App.css';
import Prepearingscreen from "./Prepearingscreen";
import TestForm from "./TestForm";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Prepearingscreen/>
            <TestForm/>
        </div>
    );
  }
}

export default App;
